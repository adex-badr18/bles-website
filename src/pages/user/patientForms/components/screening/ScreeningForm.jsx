import { useState } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import VerificationStep from "../../../../../components/VerificationStep";
import ScreeningStep from "./ScreeningStep";
import Referral from "./Referral";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";

import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm } from "../../../../../hooks/usePatients";
import { objectToFormData, convertToBoolean } from "../../../../utils";

const ScreeningForm = () => {
    const { showToast } = useToast();
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const { mutate, isPending, error, data } = useCreateForm({
        onSuccess: (response) => {
            setSuccessModalData(response?.data);
            setIsSuccessModalOpen(true);
        },
        onError: (error) => {
            showToast({
                message: error?.message || `Failed to submit form!`,
                type: "error",
                duration: 5000,
            });
        },
    });
    const [formData, setFormData] = useState({
        verification: {
            patientId: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            phone: "",
            email: "",
            address: {
                id: null,
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
        },
        screening: {
            mhBhPhone: "",
            helpNeeds: "",
            inCrisis: "",
            currentlyOnPsychMed: "",
            stableOnMed: "",
            isPsychiatristConsult: "",
            isTherapistConsult: "",
            anyMentalHealthTreatment: "",
            suicideAttemptHistory: "",
            harmToSelfOrOthers: "",
            intent: "",
            healthSymptoms: "",
            healthSymptomsFrequency: "",
        },
        referral: {
            id: "",
            source: "",
            therapist: "",
            firstName: "",
            middleName: "",
            lastName: "",
            phone: "",
            address: {
                id: "",
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
        },
    });

    console.log(formData);

    // Handle form element change
    const handleFormElementChange = (section, fieldPath, value) => {
        setFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // prepare data
        const data = {
            id: "",
            patientId: formData.verification.patientId,
            mhBhPhone: formData.screening.mhBhPhone,
            helpNeeds: formData.screening.helpNeeds,
            inCrisis: convertToBoolean(formData.screening.inCrisis),
            currentlyOnPsychMed: convertToBoolean(
                formData.screening.currentlyOnPsychMed
            ),
            stableOnMed: convertToBoolean(formData.screening.stableOnMed),
            isPsychiatristConsult: convertToBoolean(
                formData.screening.isPsychiatristConsult
            ),
            isTherapistConsult: convertToBoolean(
                formData.screening.isTherapistConsult
            ),
            anyMentalHealthTreatment: convertToBoolean(
                formData.screening.anyMentalHealthTreatment
            ),
            suicideAttemptHistory: convertToBoolean(
                formData.screening.suicideAttemptHistory
            ),
            harmToSelfOrOthers: convertToBoolean(
                formData.screening.harmToSelfOrOthers
            ),
            intent: formData.screening.intent,
            healthSymptoms: convertToBoolean(formData.screening.healthSymptoms),
            healthSymptomsFrequency: formData.screening.healthSymptomsFrequency,
            referral: {
                id: "",
                source: formData.referral.source,
                therapist: formData.referral.therapist,
                firstName: formData.referral.firstName,
                middleName: formData.referral.middleName,
                lastName: formData.referral.lastName,
                phone: formData.referral.phone,
                address: {
                    id: 0,
                    streetName: formData.referral.address.streetName,
                    city: formData.referral.address.city,
                    state: formData.referral.address.state,
                    zipCode: formData.referral.address.zipCode,
                },
            },
        };

        const payload = objectToFormData(data);

        mutate({ payload, endpoint: "/patients/forms/screening" });
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            // "dob",
            "maritalStatus",
            "phone",
            "email",
            "address",
            "helpNeeds",
            "patientId",
        ];

        if (step === 1) {
            const dataObj = formData.verification;

            for (const key in dataObj) {
                const value = dataObj[key];

                if (!requiredFields.includes(key)) {
                    continue;
                }

                if (value !== null && typeof value === "object") {
                    for (const key in value) {
                        const nestedValue = value[key];
                        if (nestedValue === "" || nestedValue === null) {
                            return false;
                        }
                    }
                }

                if (value === "" || value === null || value === undefined) {
                    return false;
                }

                return true;
            }
        }

        if (step === 2) {
            const value = formData.screening.helpNeeds;

            if (!formData.screening.helpNeeds) {
                return false;
            }

            return true;
        }

        // return true;
    };

    const formSteps = {
        steps: ["Verification", "Screening", "Referral"],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        formData={formData}
                        setFormData={setFormData}
                    />
                ),
            },
            {
                id: 2,
                name: "Screening",
                component: (
                    <ScreeningStep
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Referral",
                component: (
                    <Referral
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            // {
            //     id: 4,
            //     name: "Preview",
            //     component: (
            //         <PdfPreview key={7} Doc={<PdfDoc data={formData} />} />
            //     ),
            // },
        ],
    };

    return (
        <div>
            <MultiStepForm
                formSize="md"
                isStepValid={isStepValid}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                successModalData={successModalData}
                isSubmitting={isPending}
            />
        </div>
    );
};

export default ScreeningForm;
