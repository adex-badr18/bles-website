import { useState, useEffect } from "react";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Consents from "./Consents";

const TreatmentConsentForm = () => {
    const [consent, setConsent] = useState(false);
    const [formData, setFormData] = useState({
        verification: {
            id: "",
            verificationStatus: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            phone: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
        },
        consent: {
            patientName: "",
            patientSignature: "",
            patientSignDate: "",
            isMinor: "",
            guardianName: "James Isabella",
            guardianSignature: "",
            patientGuardianRelationship: "Father",
            guardianSignDate: "",
        },
    });

    useEffect(() => {
        if (formData.consent.isMinor.toLowerCase() === "no") {
            setFormData((prev) => ({
                ...prev,
                consent: {
                    ...prev.consent,
                    guardianName: "",
                    guardianSignature: "",
                    patientGuardianRelationship: "",
                    guardianSignDate: "",
                },
            }));
        }
    }, [formData.consent.isMinor]);

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

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            "dob",
            "maritalStatus",
            "phone",
            "email",
            "address",
            "patientSignature",
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
            }

            return true;
        }

        if (step === 2) {
            const dataObj = formData.consent;
            const isMinorRequiredFields = [
                "guardianName",
                "guardianSignature",
                "patientGuardianRelationship",
            ];

            if (!formData.consent.isMinor) {
                return false;
            }

            if (formData.consent.isMinor.toLowerCase() === "yes") {
                for (const key in dataObj) {
                    const value = dataObj[key];

                    if (!isMinorRequiredFields.includes(key)) {
                        continue;
                    }

                    if (value === "" || value === null || value === undefined) {
                        return false;
                    }
                }
            }

            if (!formData.consent.patientSignature || !consent) {
                return false;
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Verification", "Consents", "Preview"],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 2,
                name: "Consents",
                component: (
                    <Consents
                        formData={formData}
                        onChange={handleFormElementChange}
                        // setFormData={setFormData}
                        consent={consent}
                        setConsent={setConsent}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview",
                component: <PdfPreview Doc={<PdfDoc data={formData} />} />,
            },
        ],
    };

    return (
        <div>
            <MultiStepForm
                formData={formData}
                formSize="md"
                optionalFields={[]}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isStepValid={isStepValid}
            />
        </div>
    );
};

export default TreatmentConsentForm;
