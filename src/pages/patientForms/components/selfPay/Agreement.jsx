import { selfPayTerms } from "./data";
import DateField from "../../../../components/DateField";
import FieldItem from "../../../../components/FieldItem";
import { Checkbox } from "../../../../components/CheckboxGroup";
import SignaturePad from "../../../../components/SignaturePad";

const Agreement = ({ formData, onChange, consent, setConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;
    return (
        <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue">
                    Self-Pay Agreement
                </h3>

                <div className="p-4 border rounded-lg space-y-4 md:space-y-8 text-deepGrey">
                    <p className="text-vividRed font-medium text-center">
                        This Self-Pay Agreement outlines the terms and
                        conditions for patients who choose to pay for services
                        out-of-pocket rather than using insurance. Please read
                        this agreement carefully. By signing below, you
                        acknowledge and accept the terms of this agreement.
                    </p>

                    <div className="space-y-4">
                        {selfPayTerms.map((option) => (
                            <div
                                key={option.id}
                                className="p-4 border rounded-lg space-y-4"
                            >
                                <h5 className="font-medium text-darkBlue text-lg md:text-xl">
                                    {option.title}
                                </h5>

                                <p className="text-grey">{option.descr}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-4 border rounded space-y-5">
                <h4 className="text-xl text-darkBlue font-medium">
                    Acknowledgement & Signature
                </h4>

                <Checkbox
                    label={`I, ${patientFullName} have read and understand this Self-Pay Agreement. I acknowledge that I am financially responsible for all services provided to me and agree to the terms outlined above.`}
                    value={`I, ${patientFullName} have read and understand this Self-Pay Agreement. I acknowledge that I am financially responsible for all services provided to me and agree to the terms outlined above.`}
                    checked={consent}
                    onChange={() => setConsent((prev) => !prev)}
                    checkedClass="border-2 border-darkBlue"
                    unCheckedClass="border-lightGrey"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <FieldItem
                        label="Patient's Name"
                        value={patientFullName}
                        colspanClass="col-span-2"
                    />

                    {formData.consent.date && (
                        <FieldItem
                            label="Date"
                            value={new Date(
                                formData.consent.date
                            ).toLocaleDateString()}
                        />
                    )}
                </div>

                <div className="space-y-1">
                    <label className="block text-grey">Patient Signature</label>
                    <SignaturePad
                        handleInputChange={onChange}
                        section="consent"
                        fieldPath="patientSignature"
                        dateSection="consent"
                        dateFieldPath="date"
                    />
                </div>
            </div>
        </div>
    );
};

export default Agreement;
