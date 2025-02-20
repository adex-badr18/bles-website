import { useState } from "react";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Assessment from "./Assessment";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";

const AdhdForm = () => {
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
        partA: {
            projectCompletionProblem: {
                question: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
                answer: "",
            },
            organizationRate: {
                question: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
                answer: "",
            },
            memoryRate: {
                question: "How often do you have problems remembering appointments or obligations?",
                answer: "",
            },
            attitudeToChallenge: {
                question: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
                answer: "",
            },
            FidgetRateOnsit: {
                question: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
                answer: "",
            },
            activeToWork: {
                question: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
                answer: "",
            },
        },
        partB: {
            carelessMistakes: {
                question: "How often do you make careless mistakes when you have to work on a boring or difficult project?",
                answer: "",
            },
            AttentionToBoringWork: {
                question: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
                answer: "",
            },
            ConcentrationRate: {
                question: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
                answer: "",
            },
            misplaceRate: {
                question: "How often do you misplace or have difficulty finding things at home or at work?",
                answer: "",
            },
            distractionRate: {
                question: "How often are you distracted by activity or noise around you?",
                answer: "",
            },
            excuseRate: {
                question: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
                answer: "",
            },
            restlessRate: {
                question: "How often do you feel restless or fidgety?",
                answer: "",
            },
            troubleRelaxing: {
                question: "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
                answer: "",
            },
            excessiveTalks: {
                question: "How often do you find yourself talking too much when you are in social situations?",
                answer: "",
            },
            PeopleSentenceCompletion: {
                question: "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
                answer: "",
            },
            patienceOnQueue: {
                question: "How often do you have difficulty waiting your turn in situations when turn taking is required?",
                answer: "",
            },
            interruptOthers: {
                question: "How often do you interrupt others when they are busy?",
                answer: "",
            },
        },
    });

    // Compute totalScore
    // const totalScore = Object.values(formData.assessment).reduce(
    //     (total, item) => {
    //         return total + Number(item.answer ?? 0);
    //     },
    //     0
    // );

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
                        // totalScore={totalScore}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview",
                component: (
                    <PdfPreview
                        key={7}
                        Doc={<PdfDoc data={formData} />}
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
            />
        </div>
    );
};

export default AdhdForm;
