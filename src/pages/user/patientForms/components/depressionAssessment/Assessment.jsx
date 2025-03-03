import { depressionOptions } from "./data";
import RadioField from "../../../../../components/RadioField";

const Assessment = ({ formData, onChange, totalScore }) => {
    // console.log(formData.assessment)

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

export default Assessment;
