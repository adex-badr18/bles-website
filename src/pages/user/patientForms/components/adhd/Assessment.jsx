import {
    adhdHistory,
    adhdImpairments,
    adhdOptions,
    adhdSymptoms,
} from "./data";
import RadioField from "../../../../../components/RadioField";
import StaticDivider from "../../../../../components/StaticDivider";

const Assessment = ({ formData, onChange }) => {
    console.log(formData);

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue">
                    Adult ADHD Self-Report Scale (ASRS-v1.1) Symptom Checklist
                </h3>

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
                    professional to discuss during today’s appointment.
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
                                />
                            );
                        }
                    )}
                </div>
            </div>

            {/* <div className="space-y-4">
                <h4 className="font-bold text-lg md:text-xl text-darkBlue">
                    Scoring
                </h4>

                <p className="text-deepGrey">
                    Scores of 5, 10, and 15 are taken as the cut-off points for
                    mild, moderate and severe anxiety, respectively. When used
                    as a screening tool, further evaluation is recommended when
                    the score is 10 or greater.
                </p>

                <p className="text-deepGrey">
                    Using the threshold score of 10, the GAD-7 has a sensitivity
                    of 89% and a specificity of 82% for GAD. It is moderately
                    good at screening three other common anxiety disorders -
                    panic disorder (sensitivity 74%, specificity 81%), social
                    anxiety disorder (sensitivity 72%, specificity 80%) and
                    post-traumatic stress disorder (sensitivity 66%, specificity
                    81%).
                </p>

                <p className="text-deepGrey text-xl">
                    <span className="font-bold">Total Score:</span>{" "}
                    <span className="">{totalScore}</span>
                </p>
            </div> */}
        </div>
    );
};

export default Assessment;
