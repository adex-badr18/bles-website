import { useState } from "react";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Assessment from "./Assessment";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";

import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm } from "../../../../../hooks/usePatients";
import { objectToFormData } from "../../../../utils";

const DepressionAssessmentForm = () => {
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
        assessment: {
            pleasureInterest: {
                question: "Little interest or pleasure in doing things",
                answer: "",
            },
            depressionRate: {
                question: "Feeling down, depressed, or hopeless",
                answer: "",
            },
            sleepRate: {
                question:
                    "Trouble falling or staying asleep, or sleeping too much",
                answer: "",
            },
            fatigueRate: {
                question: "Feeling tired or having little energy",
                answer: "",
            },
            appetiteRate: {
                question: "Poor appetite or overeating",
                answer: "",
            },
            failureRate: {
                question:
                    "Feeling bad about yourself, or that you are a failure",
                answer: "",
            },
            concentrationRate: {
                question:
                    "Trouble concentrating on things like reading or watching TV",
                answer: "",
            },
            restlessnessRate: {
                question:
                    "Moving or speaking very slowly, or being very restless",
                answer: "",
            },
            suicideThought: {
                question:
                    "Thoughts that you would be better off dead or hurting yourself",
                answer: "",
            },
        },
    });

    // Compute totalScore
    const totalScore = Object.values(formData.assessment).reduce(
        (total, item) => {
            return total + Number(item.answer ?? 0);
        },
        0
    );

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
        // Prepare data
        const data = {
            id: null,
            patientId: formData.verification.patientId,
            pleasureInterest: formData.assessment.pleasureInterest.answer,
            depressionRate: formData.assessment.depressionRate.answer,
            sleepRate: formData.assessment.sleepRate.answer,
            fatigueRate: formData.assessment.fatigueRate.answer,
            appetiteRate: formData.assessment.appetiteRate.answer,
            failureRate: formData.assessment.failureRate.answer,
            concentrationRate: formData.assessment.concentrationRate.answer,
            restlessnessRate: formData.assessment.restlessnessRate.answer,
            suicideThought: formData.assessment.suicideThought.answer,
        };
        const payload = objectToFormData(data);
        mutate({ payload, endpoint: "/patients/forms/depression-assessment" });
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            // "dob",
            "maritalStatus",
            "cellPhone",
            "email",
            "address",
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
            const dataObj = {
                ...formData.assessment,
            };

            for (const key in dataObj) {
                const value = dataObj[key].answer;

                if (value === "" || value === null || value === undefined) {
                    return false;
                }
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Verification", "Assessment", "Preview"],
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
                name: "Assessment",
                component: (
                    <Assessment
                        formData={formData}
                        onChange={handleFormElementChange}
                        totalScore={totalScore}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview",
                component: (
                    <PdfPreview
                        key={7}
                        Doc={<PdfDoc data={formData} totalScore={totalScore} />}
                    />
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
                isSubmitting={isPending}
            />
        </div>
    );
};

export default DepressionAssessmentForm;
