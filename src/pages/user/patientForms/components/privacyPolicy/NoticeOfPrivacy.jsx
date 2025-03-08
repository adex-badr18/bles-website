import { useState } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import VerificationStep from "../../../../../components/VerificationStep";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";
import PrivacyPolicy from "./PrivacyPolicy";
import { useToast } from "../../../../../components/ToastContext";

const NoticeOfPrivacy = () => {
    const [policyConsent, setPolicyConsent] = useState(false);
    const { showToast, toasts } = useToast();
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
            patientSignature: "",
            noticeEffectDate: "",
            date: "",
        },
    });

    // console.log("Toasts", toasts)

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

    const submitHandler = async () => {
        showToast({
            message: "An error occurred. Please try again.",
            type: "success",
            duration: 5000,
        });

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
            "noticeEffectDate",
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

            for (const key in dataObj) {
                const value = dataObj[key];

                if (!requiredFields.includes(key)) {
                    continue;
                }

                if (value === "" || value === null || value === undefined) {
                    return false;
                }
            }

            if (!policyConsent) {
                return false;
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Verification", "Privacy Practices", "Preview"],
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
                name: "Privacy Practices",
                component: (
                    <PrivacyPolicy
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

export default NoticeOfPrivacy;
