import { useState } from "react";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Assessment from "./Assessment";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";

const AnxietyDisorderForm = () => {
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
                        onChange={handleFormElementChange}
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

export default AnxietyDisorderForm;
