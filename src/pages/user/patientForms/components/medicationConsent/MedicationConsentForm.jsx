import { useState, useEffect } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import VerificationStep from "../../../../../components/VerificationStep";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";
import Consents from "./Consents";

import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm, useUploadFile } from "../../../../../hooks/usePatients";
import { objectToFormData, convertToBoolean } from "../../../../utils";
import { pdf } from "@react-pdf/renderer";

const MedicationConsentForm = () => {
    const { showToast } = useToast();
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const {
        mutateAsync: mutateSubmit,
        isPending: isSubmitting,
        error,
        data,
    } = useCreateForm({
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
    const { mutateAsync: mutateFile, isPending: isUploading } = useUploadFile({
        handleFormChange: handleFormElementChange,
        field: "file",
        section: "upload",
        showToast,
    });
    const [consent, setConsent] = useState(false);
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
        consent: {
            patientSignature: "",
            patientSignDate: "",
            isMinor: "",
            guardianName: "",
            guardianSignature: "",
            patientGuardianRelationship: "",
            guardianSignDate: "",
        },
        upload: { file: "" },
    });

    console.log(formData);

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
    function handleFormElementChange(section, fieldPath, value) {
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
        // prepare pdf file payload
        const pdfBlob = await pdf(<PdfDoc data={formData} />).toBlob();
        const pdfFile = new File([pdfBlob], "medication-consent.pdf", {
            type: "application/pdf",
        });
        const uploadPayload = objectToFormData({
            fileType: "medication-consent",
            owner: `${formData.verification.firstName}-${formData.verification.lastName}`,
            file: pdfFile,
        });

        // TODO: Upload pdf file
        const uploadResponse = await mutateFile(uploadPayload);
        const fileUrl = uploadResponse?.data?.fileUrl

        // Prepare submission payload
        const data = {
            id: 0,
            patientId: formData.verification.patientId,
            isMinor: convertToBoolean(formData.consent.isMinor),
            patientSignDate: formData.consent.patientSignDate,
            guardianName: formData.consent.guardianName,
            patientGuardianRelationship:
                formData.consent.patientGuardianRelationship,
            guardianSignDate: formData.consent.guardianSignDate,
            file: fileUrl,
        };

        const payload = objectToFormData(data);

        // TODO: submit form
        await mutateSubmit({
            payload,
            endpoint: "/patients/forms/medication-consent",
        });
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
            }

            return true;
        }

        if (step === 2) {
            const dataObj = formData.consent;
            const isMinorRequiredFields = [
                "guardianName",
                "guardianSignature",
                "patientGuardianRelationship",
                "patientSignDate",
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

            if (!formData.consent.patientSignature) {
                return false;
            }

            if (!consent) {
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
                        setFormData={setFormData}
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
                formSize="md"
                isStepValid={isStepValid}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                successModalData={successModalData}
                isSubmitting={isSubmitting || isUploading}
            />
        </div>
    );
};

export default MedicationConsentForm;
