import React from "react";
import RadioField from "../../../../../components/RadioField";
import {
    booleanOptions,
    influenceOnLifeOptions,
} from "../../../../user/patientForms/components/moodDisorder/data";
import { convertBooleanToText } from "../../../../utils";
import StaticDivider from "../../../../../components/StaticDivider";

const MoodDisorderAssessmentForm = ({ data }) => {
    const formData = {
        part1: {
            hyperFeeling: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?",
                answer: convertBooleanToText(data.hyperFeeling),
            },
            isIrritable: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you you were so irritable that you shouted at people or started fights or arguments?",
                answer: convertBooleanToText(data.isIrritable),
            },
            isOverConfident: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you felt much more self-confident than usual?",
                answer: convertBooleanToText(data.isOverConfident),
            },
            lessSleep: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you got much less sleep than usual and found you didn’t really miss it?",
                answer: convertBooleanToText(data.lessSleep),
            },
            talkMore: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more talkative or spoke faster than usual?",
                answer: convertBooleanToText(data.talkMore),
            },
            pacedThoughts: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you thoughts raced through your head or you couldn’t slow your mind down?",
                answer: convertBooleanToText(data.pacedThoughts),
            },
            easyDistraction: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were so easily distracted by things around you that you had trouble concentrating or staying on track?",
                answer: convertBooleanToText(data.easyDistraction),
            },
            overEnergetic: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you had much more energy than usual?",
                answer: convertBooleanToText(data.overEnergetic),
            },
            overActive: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more active or did many more things than usual?",
                answer: convertBooleanToText(data.overActive),
            },
            overSocial: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
                answer: convertBooleanToText(data.overSocial),
            },
            sexaholic: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you were much more interested in sex than usual?",
                answer: convertBooleanToText(data.sexaholic),
            },
            overFoolish: {
                question:
                    "Has there ever been a period of time when you were not your usual self and you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
                answer: convertBooleanToText(data.overFoolish),
            },
            overSpending: {
                question:
                    "Has there ever been a period of time when you were not your usual self and spending money got you or your family in trouble?",
                answer: convertBooleanToText(data.overSpending),
            },
        },
        part2: {
            sameTimeOccurrence: {
                question:
                    "If you checked YES to more than one of the above, have several of these ever happened during the same period of time?",
                answer: convertBooleanToText(data.sameTimeOccurrence),
            },
            influenceOnLife: {
                question:
                    "How much of a problem did any of these cause you — like being able to work; having family, money, or legal troubles; getting into arguments or fights?",
                answer: data.influenceOnLife,
            },
            isRelativeWithBipolar: {
                question:
                    "Have any of your blood relatives (ie, children, siblings, parents, grandparents, aunts, uncles) had manic-depressive illness or bipolar disorder?",
                answer: convertBooleanToText(data.isRelativeWithBipolar),
            },
            isBipolarDiagnosed: {
                question:
                    "Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?",
                answer: convertBooleanToText(data.isBipolarDiagnosed),
            },
        },
    };

    const onChange = () => {};

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                        Mood Disorder Questionnaire (MDQ) Screener
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <p className="text-deepGrey">
                    The MDQ Screener is a self-report tool used to identify
                    symptoms that may be consistent with bipolar disorder. It
                    assists our clinicians in understanding your mood patterns
                    and whether further evaluation is needed.
                </p>

                <p className="text-deepGrey">
                    <strong className="text-vividRed font-semibold">
                        Note:
                    </strong>{" "}
                    Your responses will help determine if your mood experiences
                    warrant further evaluation for bipolar disorder. A positive
                    screening does not diagnose bipolar disorder but indicates
                    the need for a more comprehensive clinical assessment.
                </p>
            </div>

            <div className="space-y-4">
                <p className="text-deepGrey">
                    Please answer “Yes” or “No” for each of the following
                    questions regarding your experiences over your lifetime.
                </p>

                <h4 className="text-darkBlue font-semibold text-lg">
                    Section One
                </h4>
                <div className="space-y-4 md:space-y-8">
                    {Object.entries(formData.part1).map(
                        ([key, value], index) => {
                            return (
                                <RadioField
                                    label={value.question}
                                    data={booleanOptions}
                                    name={key}
                                    value={value.answer}
                                    section="part1"
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
            </div>

            <StaticDivider />

            <div className="space-y-4">
                <h4 className="text-darkBlue font-semibold text-lg">
                    Section Two
                </h4>
                <div className="space-y-4 md:space-y-8">
                    {Object.entries(formData.part2).map(
                        ([key, value], index) => {
                            return (
                                <RadioField
                                    label={value.question}
                                    data={
                                        key === "influenceOnLife"
                                            ? influenceOnLifeOptions
                                            : booleanOptions
                                    }
                                    name={key}
                                    value={value.answer}
                                    section="part2"
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
            </div>
        </div>
    );
};

export default MoodDisorderAssessmentForm;
