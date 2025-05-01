import React from "react";
import {
    adhdHistory,
    adhdImpairments,
    adhdOptions,
    adhdSymptoms,
} from "../../../../user/patientForms/components/adhd/data";
import StaticDivider from "../../../../../components/StaticDivider";
import RadioField from "../../../../../components/RadioField";

const AdhdForm = ({ data }) => {
    const formData = {
        partA: {
            projectCompletionProblem: {
                question:
                    "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
                answer: data.projectCompletionProblem,
            },
            organizationRate: {
                question:
                    "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
                answer: data.organizationRate,
            },
            memoryRate: {
                question:
                    "How often do you have problems remembering appointments or obligations?",
                answer: data.memoryRate,
            },
            attitudeToChallenge: {
                question:
                    "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
                answer: data.attitudeToChallenge,
            },
            fidgetRateOnsit: {
                question:
                    "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
                answer: data.fidgetRateOnsit,
            },
            activeToWork: {
                question:
                    "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
                answer: data.activeToWork,
            },
        },
        partB: {
            carelessMistakes: {
                question:
                    "How often do you make careless mistakes when you have to work on a boring or difficult project?",
                answer: data.carelessMistakes,
            },
            attentionToBoringWork: {
                question:
                    "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
                answer: data.attentionToBoringWork,
            },
            concentrationRate: {
                question:
                    "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
                answer: data.concentrationRate,
            },
            misplaceRate: {
                question:
                    "How often do you misplace or have difficulty finding things at home or at work?",
                answer: data.misplaceRate,
            },
            distractionRate: {
                question:
                    "How often are you distracted by activity or noise around you?",
                answer: data.distractionRate,
            },
            excuseRate: {
                question:
                    "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
                answer: data.excuseRate,
            },
            restlessRate: {
                question: "How often do you feel restless or fidgety?",
                answer: data.restlessRate,
            },
            troubleRelaxing: {
                question:
                    "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
                answer: data.troubleRelaxing,
            },
            excessiveTalks: {
                question:
                    "How often do you find yourself talking too much when you are in social situations?",
                answer: data.excessiveTalks,
            },
            peopleSentenceCompletion: {
                question:
                    "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
                answer: data.peopleSentenceCompletion,
            },
            patienceOnQueue: {
                question:
                    "How often do you have difficulty waiting your turn in situations when turn taking is required?",
                answer: data.patienceOnQueue,
            },
            interruptOthers: {
                question:
                    "How often do you interrupt others when they are busy?",
                answer: data.interruptOthers,
            },
        },
    };

    const onChange = () => {
      
    }

    return (
        <div className="space-y-6 md:space-y-10 overflow-y-auto">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                        Adult ADHD Self-Report Scale (ASRS-v1.1) Symptom
                        Checklist
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <p className="text-deepGrey">
                    <strong>Description:</strong> The Symptom Checklist is an
                    instrument consisting of the eighteen DSM-IV-TR criteria.
                    Six of the eighteen questions were found to be the most
                    predictive of symptoms consistent with ADHD. These six
                    questions are the basis for the ASRS v1.1 Screener and are
                    also Part A of the Symptom Checklist. Part B of the Symptom
                    Checklist contains the remaining twelve questions.
                </p>

                <div className="space-y-2 text-deepGrey">
                    <h4 className="text-lg font-semibold">Instructions</h4>

                    <div className="space-y-2">
                        <h5 className="font-semibold">Symptoms</h5>
                        <ul className="space-y-2">
                            {adhdSymptoms.map((symptom) => (
                                <li
                                    key={symptom.id}
                                    className="flex items-center gap-4 text-deepGrey"
                                >
                                    <div className="h-2 w-2 rounded-full bg-darkBlue flex-shrink-0"></div>
                                    {symptom.descr}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h5 className="font-semibold">Impairments</h5>
                        <ul className="space-y-2">
                            {adhdImpairments.map((impairment) => (
                                <li
                                    key={impairment.id}
                                    className="flex items-center gap-4 text-deepGrey"
                                >
                                    <div className="h-2 w-2 rounded-full bg-darkBlue flex-shrink-0"></div>
                                    {impairment.descr}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h5 className="font-semibold">History</h5>
                        <ul className="space-y-2">
                            {adhdHistory.map((history) => (
                                <li
                                    key={history.id}
                                    className="flex items-center gap-4 text-deepGrey"
                                >
                                    <div className="h-2 w-2 rounded-full bg-darkBlue flex-shrink-0"></div>
                                    {history.descr}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <StaticDivider />

            <div className="space-y-4">
                <p className="text-deepGrey">
                    Please answer the questions below. As you answer each
                    question, check the option that best describes how you have
                    felt and conducted yourself over the past 6 months. Please
                    give this completed checklist to your healthcare
                    professional to discuss during your next appointment.
                </p>

                <h4 className="text-darkBlue font-semibold text-lg">Part A</h4>
                <div className="space-y-4 md:space-y-8">
                    {Object.entries(formData.partA).map(
                        ([key, value], index) => {
                            return (
                                <RadioField
                                    label={`${index + 1}. ${value.question}`}
                                    data={adhdOptions}
                                    name={key}
                                    value={value.answer}
                                    section="partA"
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
                <h4 className="text-darkBlue font-semibold text-lg">Part B</h4>
                <div className="space-y-4 md:space-y-8">
                    {Object.entries(formData.partB).map(
                        ([key, value], index) => {
                            return (
                                <RadioField
                                    label={`${index + 7}. ${value.question}`}
                                    data={adhdOptions}
                                    name={key}
                                    value={value.answer}
                                    section="partB"
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

export default AdhdForm;
