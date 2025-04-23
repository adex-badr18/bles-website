import { useState } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import VerificationStep from "../../../../../components/VerificationStep";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";
import Policy from "./Policy";
import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm, useUploadFile } from "../../../../../hooks/usePatients";
import { objectToFormData } from "../../../../utils";
import { pdf } from "@react-pdf/renderer";

const TerminationPolicy = () => {
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
    const [policyConsent, setPolicyConsent] = useState(false);
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
            witnessName: "",
            witnessSignature: "",
            witnessSignDate: "",
        },
        upload: { file: "" },
    });

    console.log(formData);

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
    }

    const submitHandler = async (e) => {
        // prepare pdf file payload
        const pdfBlob = await pdf(<PdfDoc data={formData} />).toBlob();
        const pdfFile = new File([pdfBlob], "termination-policy.pdf", {
            type: "application/pdf",
        });
        const uploadPayload = objectToFormData({
            fileType: "termination-policy",
            owner: `${formData.verification.firstName}-${formData.verification.lastName}`,
            file: pdfFile,
        });

        // TODO: Upload pdf file
        const uploadResponse = await mutateFile(uploadPayload);
        const fileUrl = uploadResponse?.data?.fileUrl;

        // Prepare submission payload
        const data = {
            id: "",
            patientId: formData.verification.patientId,
            patientSignDate: formData.consent.patientSignDate,
            witnessName: formData.consent.witnessName,
            witnessSignDate: formData.consent.witnessSignDate,
            terminationPolicy: "",
            file: fileUrl,
        };

        const payload = objectToFormData(data);

        // TODO: submit form
        await mutateSubmit({
            payload,
            endpoint: "/patients/forms/termination-policy",
        });
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
            if (
                !formData.consent.patientSignature ||
                !policyConsent ||
                !formData.consent.witnessName ||
                !formData.consent.witnessSignature
            ) {
                return false;
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Verification", "Policy", "Preview"],
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
                name: "Policy",
                component: (
                    <Policy
                        formData={formData}
                        onChange={handleFormElementChange}
                        consent={policyConsent}
                        setConsent={setPolicyConsent}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview",
                component: (
                    <PdfPreview key={7} Doc={<PdfDoc data={formData} />} />
                ),
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
               isSubmitting={isUploading || isSubmitting}
            />
        </div>
    );
};

export default TerminationPolicy;
