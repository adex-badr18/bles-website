import { booleanOptions, influenceOnLifeOptions } from "./data";
import RadioField from "../../../../../components/RadioField";
import StaticDivider from "../../../../../components/StaticDivider";

const Assessment = ({ formData, onChange }) => {
    console.log(formData);

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
