import { useState } from "react";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Assessment from "./Assessment";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";
import { objectToFormData } from "../../../../utils";
import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm } from "../../../../../hooks/usePatients";

const AnxietyDisorderForm = () => {
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
            nervousRate: {
                question: "Feeling nervous, anxious, or on edge.",
                answer: "",
            },
            controlOverWorry: {
                question: "Not being able to stop or control worrying.",
                answer: "",
            },
            excessiveWorry: {
                question: "Worrying too much about different things.",
                answer: "",
            },
            relaxTrouble: {
                question: "Trouble relaxing.",
                answer: "",
            },
            restlessness: {
                question: "Being so restless that it is hard to sit still.",
                answer: "",
            },
            annoyanceRate: {
                question: "Becoming easily annoyed or irritable.",
                answer: "",
            },
            frightRate: {
                question: "Feeling afraid as if something awful might happen.",
                answer: "",
            },
        },
        lifeInfluenceSummary: {
            question:
                "If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?",
            answer: "",
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

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            id: null,
            patientId: formData.verification.patientId,
            nervousRate: formData.assessment.nervousRate.answer,
            controlOverWorry: formData.assessment.controlOverWorry.answer,
            excessiveWorry: formData.assessment.excessiveWorry.answer,
            relaxTrouble: formData.assessment.relaxTrouble.answer,
            restlessness: formData.assessment.restlessness.answer,
            annoyanceRate: formData.assessment.annoyanceRate.answer,
            frightRate: formData.assessment.frightRate.answer,
            lifeInfluenceSummary: formData.lifeInfluenceSummary.answer,
        };
        const payload = objectToFormData(data);

        mutate({ payload, endpoint: "/patients/forms/anxiety-disorder" });
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
                lifeInfluenceSummary: formData.lifeInfluenceSummary,
            };

            console.log(dataObj);

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

export default AnxietyDisorderForm;
