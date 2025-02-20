import { useState } from "react";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Assessment from "./Assessment";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";

const MoodDisorderForm = () => {
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
        part1: {
            hyperFeeling: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?",
                answer: "",
            },
            isIrritable: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you you were so irritable that you shouted at people or started fights or arguments?",
                answer: "",
            },
            isOverConfident: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you felt much more self-confident than usual?",
                answer: "",
            },
            lessSleep: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you got much less sleep than usual and found you didn’t really miss it?",
                answer: "",
            },
            talkMore: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more talkative or spoke faster than usual?",
                answer: "",
            },
            pacedThoughts: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you thoughts raced through your head or you couldn’t slow your mind down?",
                answer: "",
            },
            easyDistraction: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were so easily distracted by things around you that you had trouble concentrating or staying on track?",
                answer: "",
            },
            overEnergetic: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you had much more energy than usual?",
                answer: "",
            },
            overActive: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more active or did many more things than usual?",
                answer: "",
            },
            overSocial: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
                answer: "",
            },
            sexaholic: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more interested in sex than usual?",
                answer: "",
            },
            overFoolish: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
                answer: "",
            },
            overSpending: {
                question:
                    "Has there ever been a period of time when you were not your usual self and spending money got you or your family in trouble?",
                answer: "",
            },
        },
        part2: {
            sameTimeOccurrence: {
                question:
                    "If you checked YES to more than one of the above, have several of these ever happened during the same period of time?",
                answer: "",
            },
            influenceOnLife: {
                question:
                    "How much of a problem did any of these cause you — like being able to work; having family, money, or legal troubles; getting into arguments or fights?",
                answer: "",
            },
            isRelativeWithBipolar: {
                question:
                    "Have any of your blood relatives (ie, children, siblings, parents, grandparents, aunts, uncles) had manic-depressive illness or bipolar disorder?",
                answer: "",
            },
            isBipolarDiagnosed: {
                question:
                    "Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?",
                answer: "",
            },
        },
    });

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
            />
        </div>
    );
};

export default MoodDisorderForm;
