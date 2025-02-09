import { consents } from "./data";
import TextField from "../../../../components/TextField";
import DateField from "../../../../components/DateField";
import FieldItem from "../../../../components/FieldItem";
import { Checkbox } from "../../../../components/CheckboxGroup";
import SignaturePad from "../../../../components/SignaturePad";

const Policy = ({ formData, onChange, consent, setConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue">
                    Termination Policy
                </h3>

                <div className="space-y-4">
                    {consents.map((option) => (
                        <div
                            key={option.id}
                            className="p-4 border rounded-lg space-y-4"
                        >
                            <p className="text-grey">{option.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border rounded space-y-5">
                <h4 className="text-xl text-darkBlue font-medium">
                    Termination Confirmation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <FieldItem label="Patient's Name" value={patientFullName} />

                    <TextField
                        type="text"
                        label="Witness Name"
                        name="witnessName"
                        placeholder="Full Name"
                        section="consent"
                        field="witnessName"
                        value={formData.consent.witnessName}
                        handleInputChange={onChange}
                    />
                </div>

                <Checkbox
                    label={`I, ${patientFullName} understand and agree to BrightLife Enhancement Services Termination Policy stated above.`}
                    value={`I, ${patientFullName} understand and agree to BrightLife Enhancement Services Termination Policy stated above.`}
                    checked={consent}
                    onChange={() => setConsent((prev) => !prev)}
                    checkedClass="border-2 border-darkBlue"
                    unCheckedClass="border-lightGrey"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="">
                        <label className="block text-grey mb-1">
                            Patient Signature
                        </label>
                        <SignaturePad
                            handleInputChange={onChange}
                            section="consent"
                            fieldPath="patientSignature"
                            dateSection="consent"
                            dateFieldPath="patientSignDate"
                        />
                        <div className="mt-8">
                            {formData.consent.patientSignDate && (
                                <FieldItem
                                    label="Patient Signature Date"
                                    value={new Date(
                                        formData.consent.patientSignDate
                                    ).toLocaleDateString()}
                                />
                            )}
                        </div>
                    </div>

                    <div className="">
                        <label className="block text-grey mb-1">
                            Witness Signature
                        </label>
                        <SignaturePad
                            handleInputChange={onChange}
                            section="consent"
                            fieldPath="witnessSignature"
                            dateSection="consent"
                            dateFieldPath="witnessSignDate"
                        />
                        <div className="mt-8">
                            {formData.consent.witnessSignDate && (
                                <FieldItem
                                    label="Witness Signature Date"
                                    value={new Date(
                                        formData.consent.witnessSignDate
                                    ).toLocaleDateString()}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;
