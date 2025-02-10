import { anxietyOptions, anxietySummaryOptions } from "./data";
import RadioField from "../../../../../components/RadioField";

const Assessment = ({ formData, onChange, totalScore }) => {
    console.log(formData);

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue">
                    Generalized Anxiety Disorder 7-item (GAD-7) Scale
                </h3>

                <p className="text-deepGrey">
                    The GAD-7 is a screening tool that measures the severity of
                    your anxiety symptoms. Your responses will help us
                    understand your anxiety levels and inform our treatment
                    strategies.
                </p>

                <p className="text-deepGrey">
                    Your total score (ranging from 0 to 21) will indicate the
                    level of anxiety you are experiencing and assist our
                    clinicians to determine the appropriate interventions.
                </p>

                <div className="space-y-2">
                    <p className="text-deepGrey">
                        <span className="font-semibold text-vividRed block">
                            Instruction:
                        </span>
                        Please indicate how often, over the past two weeks, you
                        have been bothered by each of the following problems
                        using this scale:
                    </p>

                    <ul className="space-y-2">
                        {anxietyOptions.map((scale) => (
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
                                data={anxietyOptions}
                                name={key}
                                value={value.answer}
                                section="assessment"
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

            <RadioField
                label={formData.lifeInfluenceSummary.question}
                data={anxietySummaryOptions}
                name={"lifeInfluenceSummary"}
                value={formData.lifeInfluenceSummary.answer}
                section="lifeInfluenceSummary"
                field={`answer`}
                handleFormElementChange={onChange}
                orientation="grid"
            />

            <div className="space-y-4">
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
            </div>
        </div>
    );
};

export default Assessment;
