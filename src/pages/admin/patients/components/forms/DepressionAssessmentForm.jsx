import React from "react";
import { depressionOptions } from "../../../../user/patientForms/components/depressionAssessment/data";
import RadioField from "../../../../../components/RadioField";

const DepressionAssessmentForm = ({ data }) => {
    const formData = {
        assessment: {
            pleasureInterest: {
                question: "Little interest or pleasure in doing things",
                answer: String(data.pleasureInterest || 0),
            },
            depressionRate: {
                question: "Feeling down, depressed, or hopeless",
                answer: String(data.depressionRate || 0),
            },
            sleepRate: {
                question:
                    "Trouble falling or staying asleep, or sleeping too much",
                answer: String(data.sleepRate || 0),
            },
            fatigueRate: {
                question: "Feeling tired or having little energy",
                answer: String(data.fatigueRate || 0),
            },
            appetiteRate: {
                question: "Poor appetite or overeating",
                answer: String(data.appetiteRate || 0),
            },
            failureRate: {
                question:
                    "Feeling bad about yourself, or that you are a failure",
                answer: String(data.failureRate || 0),
            },
            concentrationRate: {
                question:
                    "Trouble concentrating on things like reading or watching TV",
                answer: String(data.concentrationRate || 0),
            },
            restlessnessRate: {
                question:
                    "Moving or speaking very slowly, or being very restless",
                answer: String(data.restlessnessRate || 0),
            },
            suicideThought: {
                question:
                    "Thoughts that you would be better off dead or hurting yourself",
                answer: String(data.suicideThought || 0),
            },
        },
    };

    // Compute totalScore
    const totalScore = Object.values(formData.assessment).reduce(
        (total, item) => {
            return total + Number(item.answer);
        },
        0
    );

    const onChange = () => {};

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                        PHQ-9 Depression Assessment Form
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <p className="text-deepGrey">
                    The PHQ-9 is a validated tool used to identify the presence
                    and severity of depressive symptoms. Your honest responses
                    over the past two weeks help us create a personalized
                    treatment plan tailored to your needs.
                </p>

                <p className="text-deepGrey">
                    Your total score will be calculated to assess the severity
                    of depressive symptoms. Higher scores suggest more severe
                    depression, which will help guide your treatment options at
                    BrightLife Enhancement Services.
                </p>

                <div className="space-y-2">
                    <p className="text-deepGrey">
                        <span className="font-semibold text-vividRed block">
                            Instruction:
                        </span>
                        For each statement below, please indicate how often you
                        have been bothered by the problem using the following
                        scale:
                    </p>

                    <ul className="space-y-2">
                        {depressionOptions.map((scale) => (
                            <li
                                key={scale.id}
                                className="flex items-center gap-4 text-deepGrey"
                            >
                                <div className="h-2 w-2 rounded-full bg-darkBlue"></div>
                                {scale.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="space-y-4 md:space-y-8">
                {Object.entries(formData.assessment).map(
                    ([key, value], index) => {
                        return (
                            <RadioField
                                label={`${index + 1}. ${value.question}`}
                                data={depressionOptions}
                                name={key}
                                value={value.answer}
                                section="assessment"
                                field={`${key}.answer`}
                                handleFormElementChange={onChange}
                                orientation="grid"
                                labelClass="text-deepGrey text-lg font-medium"
                                key={index}
                                isRequired={true}
                                readOnly
                                disabled
                            />
                        );
                    }
                )}
            </div>

            <p className="text-deepGrey text-2xl">
                <span className="font-bold">Total Score:</span>{" "}
                <span className="">{totalScore}</span>
            </p>
        </div>
    );
};

export default DepressionAssessmentForm;
