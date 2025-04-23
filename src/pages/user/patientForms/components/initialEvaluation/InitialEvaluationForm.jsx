import { useState, useEffect } from "react";
import Pharmacy from "./Pharmacy";
import Agreements from "./Agreements";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";

import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm, useUploadFile } from "../../../../../hooks/usePatients";
import { objectToFormData } from "../../../../utils";
import { pdf } from "@react-pdf/renderer";

const InitialEvaluationForm = () => {
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
    const [consents, setConsents] = useState({
        finResponsibility: false,
        treatmentConsent: false,
        pcpAuth: false,
        infoToRelease: false,
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
        pharmacy: {
            name: "",
            phone: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
        },
        primaryCarePhysician: {
            havePcp: "",
            name: "",
            phone: "",
            fax: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
            infoToRelease: "",
        },
        consent: { signature: "", date: "" },
        upload: { file: "" },
    });

    console.log(formData);

    useEffect(() => {
        if (formData.primaryCarePhysician.havePcp.toLowerCase() === "no") {
            setConsents((prev) => ({
                ...prev,
                pcpAuth: false,
                infoToRelease: false,
            }));

            setFormData((prev) => ({
                ...prev,
                primaryCarePhysician: {
                    ...prev.primaryCarePhysician,
                    name: "",
                    phone: "",
                    fax: "",
                    infoToRelease: "",
                    address: {
                        ...prev.primaryCarePhysician.address,
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "",
                    },
                },
            }));
        }
    }, [formData.primaryCarePhysician.havePcp]);

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

    const submitHandler = async () => {
        // prepare pdf file payload
        const pdfBlob = await pdf(<PdfDoc data={formData} />).toBlob();
        const pdfFile = new File([pdfBlob], "initial-evaluation.pdf", {
            type: "application/pdf",
        });
        const uploadPayload = objectToFormData({
            fileType: "initial-evaluation",
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
            pharmacy: {
                id: "",
                patientId: formData.verification.patientId,
                name: formData.pharmacy.name,
                phone: formData.pharmacy.phone,
                address: {
                    id: 0,
                    streetName: formData.pharmacy.address.streetName,
                    city: formData.pharmacy.address.city,
                    state: formData.pharmacy.address.state,
                    zipCode: formData.pharmacy.address.zipCode,
                },
            },
            primaryCarePhysician: {
                id: "",
                patientId: formData.verification.patientId,
                havePcp: formData.primaryCarePhysician.havePcp,
                name: formData.primaryCarePhysician.name,
                phone: formData.primaryCarePhysician.phone,
                fax: formData.primaryCarePhysician.fax,
                address: {
                    id: "",
                    streetName: formData.primaryCarePhysician.address.streetName,
                    city: formData.primaryCarePhysician.address.city,
                    state: formData.primaryCarePhysician.address.state,
                    zipCode: formData.primaryCarePhysician.address.zipCode,
                },
            },
            infoToRelease: formData.primaryCarePhysician.infoToRelease,
            date: formData.consent.date,
            initialEvaluation: "",
            file: fileUrl,
        };

        const payload = objectToFormData(data);

        // TODO: submit form
        await mutateSubmit({
            payload,
            endpoint: "/patients/forms/initial-evaluation",
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
            "havePcp",
            "patientId"
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
            return true;
        }

        if (step === 3) {
            if (!formData.primaryCarePhysician.havePcp) {
                return false;
            }

            for (const key in consents) {
                const value = consents[key];
                if (
                    (key === "finResponsibility" ||
                        key === "treatmentConsent") &&
                    !value
                ) {
                    return false;
                }
            }

            if (formData.primaryCarePhysician.havePcp.toLowerCase() === "yes") {
                const dataObj = formData.primaryCarePhysician;
                const pcpRequiredFields = [
                    "name",
                    "phone",
                    "address",
                    "infoToRelease",
                ];

                for (const key in dataObj) {
                    const value = dataObj[key];

                    if (!pcpRequiredFields.includes(key)) {
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

                for (const key in consents) {
                    const value = consents[key];
                    if (
                        (key === "pcpAuth" || key === "infoToRelease") &&
                        !value
                    ) {
                        return false;
                    }
                }
            }

            if (!formData.consent.signature) {
                return false;
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Verification", "Pharmacy", "Agreements", "Preview"],
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
                name: "Pharmacy Info.",
                component: (
                    <Pharmacy
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Agreements",
                component: (
                    <Agreements
                        formData={formData}
                        onChange={handleFormElementChange}
                        consents={consents}
                        setConsents={setConsents}
                    />
                ),
            },
            {
                id: 4,
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

export default InitialEvaluationForm;
