import React from "react";
import TextAreaField from "../../../../../components/TextAreaField";
import TextField from "../../../../../components/TextField";
import SelectField from "../../../../../components/SelectField";
import StaticDivider from "../../../../../components/StaticDivider";
import { booleanOptions } from "../../../../user/patientForms/components/moodDisorder/data";
import { convertBooleanToText } from "../../../../utils";
import { referralSourceOptions, referralTherapistOptions } from "../../../../user/patientForms/data";

const ScreeningForm = ({ data }) => {
    const formData = {
        screening: {
            id: data.id,
            patientId: data.patientId,
            mhBhPhone: data.mhBhPhone,
            helpNeeds: data.helpNeeds,
            inCrisis: convertBooleanToText(data.inCrisis),
            currentlyOnPsychMed: convertBooleanToText(data.currentlyOnPsychMed),
            stableOnMed: convertBooleanToText(data.stableOnMed),
            isPsychiatristConsult: convertBooleanToText(
                data.isPsychiatristConsult
            ),
            isTherapistConsult: convertBooleanToText(data.isTherapistConsult),
            anyMentalHealthTreatment: convertBooleanToText(
                data.anyMentalHealthTreatment
            ),
            suicideAttemptHistory: convertBooleanToText(
                data.suicideAttemptHistory
            ),
            harmToSelfOrOthers: convertBooleanToText(data.harmToSelfOrOthers),
            intent: data.intent,
            healthSymptoms: convertBooleanToText(data.healthSymptoms),
            healthSymptomsFrequency: data.healthSymptomsFrequency,
        },
        referral: {
            id: data.referral.id,
            source: data.referral.source,
            therapist: data.referral.therapist,
            firstName: data.referral.firstName,
            middleName: data.referral.middleName,
            lastName: data.referral.lastName,
            phone: data.referral.phone,
            address: {
                id: data.referral.address.id,
                streetName: data.referral.address.streetName,
                city: data.referral.address.city,
                state: data.referral.address.state,
                zipCode: data.referral.address.zipCode,
            },
        },
    };

    return (
        <form className="space-y-6 md:space-y-10">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-2">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                        Screening Form
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold"
                    >
                        All fields marked (*) were required.
                    </p>
                </div>

                <TextAreaField
                    label="How may we help you today?"
                    name="helpNeeds"
                    placeholder="Write detailed description here"
                    section="screening"
                    field="helpNeeds"
                    value={formData.screening.helpNeeds}                    
                    isRequired={true}
                    readOnly
                    disabled
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
                        readOnly
                        disabled
                    />

                    <SelectField
                        label="Are you in Crisis?"
                        name="inCrisis"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.inCrisis}
                        section="screening"
                        field="inCrisis"                        
                        disabled
                    />

                    <SelectField
                        label="Are you on psychiatric medications?"
                        name="currentlyOnPsychMed"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.currentlyOnPsychMed}
                        section="screening"
                        field="currentlyOnPsychMed"                        
                        disabled
                    />

                    <SelectField
                        label="Are you stable on your medications?"
                        name="stableOnMed"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.stableOnMed}
                        section="screening"
                        field="stableOnMed"                        
                        disabled
                    />

                    <SelectField
                        label="Are you currently seeing a psychiatrist?"
                        name="isPsychiatristConsult"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.isPsychiatristConsult}
                        section="screening"
                        field="isPsychiatristConsult"                        
                        disabled
                    />

                    <SelectField
                        label="Are you currently seeing a therapist?"
                        name="isTherapistConsult"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.isTherapistConsult}
                        section="screening"
                        field="isTherapistConsult"                        
                        disabled
                    />

                    <SelectField
                        label="Any past mental health treatment?"
                        name="anyMentalHealthTreatment"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.anyMentalHealthTreatment}
                        section="screening"
                        field="anyMentalHealthTreatment"                        
                        disabled
                    />

                    <SelectField
                        label="Any History of Suicide attempt?"
                        name="suicideAttemptHistory"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.screening.suicideAttemptHistory}
                        section="screening"
                        field="suicideAttemptHistory"                        
                        disabled
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
                        disabled
                    />

                    {formData.screening.harmToSelfOrOthers && (
                        <TextAreaField
                            label="Any intent or plan?"
                            name="intent"
                            placeholder="Any intent or plan?"
                            section="screening"
                            field="intent"
                            value={formData.screening.intent}                            
                            readOnly
                            disabled
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
                        disabled
                    />

                    {formData.screening.healthSymptoms && (
                        <TextAreaField
                            label="Describe the Symptoms"
                            name="healthSymptomsFrequency"
                            placeholder="Write detailed description here"
                            section="screening"
                            field="healthSymptomsFrequency"
                            value={formData.screening.healthSymptomsFrequency}                            
                            readOnly
                            disabled
                        />
                    )}
                </div>
            </div>

            <StaticDivider />

            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Referral Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <SelectField
                        label="Source"
                        name="source"
                        title="-- Select an option --"
                        data={referralSourceOptions}
                        value={formData.referral.source}
                        section="referral"
                        field="source"                        
                        disabled
                    />

                    <SelectField
                        label="Therapist"
                        name="therapist"
                        title="-- Select an option --"
                        data={referralTherapistOptions}
                        value={formData.referral.therapist}
                        section="referral"
                        field="therapist"                        
                        disabled
                    />

                    <TextField
                        type="text"
                        label="First Name"
                        name="firstName"
                        placeholder="First Name"
                        section="referral"
                        field="firstName"
                        value={formData.referral.firstName}                        
                        readOnly
                        disabled
                    />

                    <TextField
                        type="text"
                        label="Middle Name"
                        name="middleName"
                        placeholder="Middle Name"
                        section="referral"
                        field="middleName"
                        value={formData.referral.middleName}                        
                        readOnly
                        disabled
                    />

                    <TextField
                        type="text"
                        label="Last Name"
                        name="lastName"
                        placeholder="Last Name"
                        section="referral"
                        field="lastName"
                        value={formData.referral.lastName}                        
                        readOnly
                        disabled
                    />

                    <TextField
                        type="text"
                        label="Phone Number"
                        name="phone"
                        placeholder="Phone Number"
                        section="referral"
                        field="phone"
                        value={formData.referral.phone}                        
                        readOnly
                        disabled
                    />

                    <TextField
                        type="text"
                        label="Address (Street)"
                        name="streetName"
                        field="address.streetName"
                        placeholder="Address (Street)"
                        section="referral"
                        value={formData.referral.address.streetName}                        
                        readOnly
                        disabled
                    />

                    <TextField
                        type="text"
                        label="City"
                        name="city"
                        field="address.city"
                        placeholder="City"
                        section="referral"
                        value={formData.referral.address.city}                        
                        readOnly
                        disabled
                    />

                    <TextField
                        type="text"
                        label="State"
                        name="state"
                        field="address.state"
                        placeholder="State"
                        section="referral"
                        value={formData.referral.address.state}                        
                        readOnly
                        disabled
                    />

                    <TextField
                        type="text"
                        label="Zip Code"
                        name="zipCode"
                        field="address.zipCode"
                        placeholder="Zip Code"
                        section="referral"
                        value={formData.referral.address.zipCode}                        
                        readOnly
                        disabled
                    />
                </div>
            </div>
        </form>
    );
};

export default ScreeningForm;
