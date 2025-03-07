import DateField from "../../../../../components/DateField";
import FieldItem from "../../../../../components/FieldItem";
import SignaturePad from "../../../../../components/SignaturePad";
import { Checkbox } from "../../../../../components/CheckboxGroup";

import { consents } from "./data";

const Consents = ({ formData, onChange, infoConsent, setInfoConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    console.log(formData);
    console.log(infoConsent);

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                        Agreement Terms and Consent
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <div className="space-y-4">
                    {consents.map((option) => (
                        <div
                            key={option.id}
                            className="p-4 border rounded-lg space-y-4"
                        >
                            <h5 className="font-medium text-darkBlue text-lg md:text-xl">
                                {option.title}
                            </h5>

                            <p className="text-grey">{option.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border rounded space-y-4 md:space-y-6">
                <h4 className="text-xl text-darkBlue font-medium">
                    Agreement Confirmation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <FieldItem
                        label="Patient's Name"
                        value={patientFullName}
                        colspanClass="col-span-2"
                        isRequired={true}
                    />

                    {formData.consent.date && (
                        <FieldItem
                            label="Date"
                            value={new Date(
                                formData.consent.date
                            ).toLocaleDateString()}
                            isRequired={true}
                        />
                    )}
                </div>

                <Checkbox
                    label={`I, ${patientFullName} understand and agree to all the terms and conditions stated above.`}
                    value={`I, ${patientFullName} understand and agree to all the terms and conditions stated above.`}
                    checked={infoConsent}
                    onChange={() => setInfoConsent((prev) => !prev)}
                    checkedClass="border-2 border-darkBlue"
                    unCheckedClass="border-lightGrey"
                    isRequired={true}
                />

                <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-deepGrey">
                        Signature{" "}
                        <small className="text-vividRed text-lg">*</small>
                    </label>
                    <SignaturePad
                        handleInputChange={onChange}
                        section="consent"
                        fieldPath="signature"
                        dateSection="consent"
                        dateFieldPath="date"
                        signature={formData.consent.signature}
                    />
                </div>
            </div>
        </div>
    );
};

export default Consents;
