import TextField from "../../../../../components/TextField";
import TextAreaField from "../../../../../components/TextAreaField";
import SelectField from "../../../../../components/SelectField";
import { booleanOptions } from "../../data";

const ScreeningStep = ({ formData, onChange }) => {
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-2">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue text-center">
                        Screening
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <TextAreaField
                    label="How may we help you today?"
                    name="helpNeeds"
                    placeholder="Write detailed description here"
                    section="screening"
                    field="helpNeeds"
                    value={formData.screening.helpNeeds}
                    handleFormElementChange={onChange}
                    isRequired={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <TextField
                        type="text"
                        label="MH/BH Phone Number"
                        name="mhBhPhone"
                        placeholder="MH/BH Phone Number"
                        section="screening"
                        field="mhBhPhone"
                        value={formData.screening.mhBhPhone}
                        handleInputChange={onChange}
                    />

                    <SelectField
                        label="Are you in Crisis?"
                        name="inCrisis"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.inCrisis}
                        section="screening"
                        field="inCrisis"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Are you on psychiatric medications?"
                        name="currentlyOnPsychMed"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.currentlyOnPsychMed}
                        section="screening"
                        field="currentlyOnPsychMed"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Are you stable on your medications?"
                        name="stableOnMed"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.stableOnMed}
                        section="screening"
                        field="stableOnMed"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Are you currently seeing a psychiatrist?"
                        name="isPsychiatristConsult"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.isPsychiatristConsult}
                        section="screening"
                        field="isPsychiatristConsult"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Are you currently seeing a therapist?"
                        name="isTherapistConsult"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.isTherapistConsult}
                        section="screening"
                        field="isTherapistConsult"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Any past mental health treatment?"
                        name="anyMentalHealthTreatment"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.anyMentalHealthTreatment}
                        section="screening"
                        field="anyMentalHealthTreatment"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Any History of Suicide attempt?"
                        name="suicideAttemptHistory"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.suicideAttemptHistory}
                        section="screening"
                        field="suicideAttemptHistory"
                        handleSelectChange={onChange}
                    />
                </div>

                <div className="space-y-4">
                    <SelectField
                        label="Risk of harm to self or others?"
                        name="harmToSelfOrOthers"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.harmToSelfOrOthers}
                        section="screening"
                        field="harmToSelfOrOthers"
                        handleSelectChange={onChange}
                    />

                    {formData.screening.harmToSelfOrOthers && (
                        <TextAreaField
                            label="Any intent or plan?"
                            name="intent"
                            placeholder="Any intent or plan?"
                            section="screening"
                            field="intent"
                            value={formData.screening.intent}
                            handleFormElementChange={onChange}
                        />
                    )}
                </div>

                <div className="space-y-4">
                    <SelectField
                        label="Depression, anxiety or panic symptoms?"
                        name="healthSymptoms"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.healthSymptoms}
                        section="screening"
                        field="healthSymptoms"
                        handleSelectChange={onChange}
                    />

                    {formData.screening.healthSymptoms && (
                        <TextAreaField
                            label="Describe the Symptoms"
                            name="healthSymptomsFrequency"
                            placeholder="Write detailed description here"
                            section="screening"
                            field="healthSymptomsFrequency"
                            value={formData.screening.healthSymptomsFrequency}
                            handleFormElementChange={onChange}
                        />
                    )}
                </div>
            </div>
        </form>
    );
};

export default ScreeningStep;
