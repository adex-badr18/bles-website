import { consents } from "./data";
import TextField from "../../../../../components/TextField";
import DateField from "../../../../../components/DateField";
import FieldItem from "../../../../../components/FieldItem";
import { Checkbox } from "../../../../../components/CheckboxGroup";
import SignaturePad from "../../../../../components/SignaturePad";
import { convertIsoDateToReadable } from "../../../../utils";

const Policy = ({ formData, onChange, consent, setConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                    Termination Policy
                </h3>

                <p
                    aria-label="All fields marked asterik (*) are required"
                    className="text-sm text-vividRed font-bold text-center"
                >
                    All fields marked (*) are required.
                </p>

                <div className="space-y-4">
                    {consents.map((option) => (
                        <div
                            key={option.id}
                            className="p-4 border rounded-lg space-y-4"
                        >
                            <p className="text-deepGrey">{option.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border rounded space-y-5">
                <h4 className="text-xl text-darkBlue font-medium">
                    Termination Confirmation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <FieldItem
                        label="Patient's Name"
                        value={patientFullName}
                        isRequired={true}
                    />

                    <TextField
                        type="text"
                        label="Witness Name"
                        name="witnessName"
                        placeholder="Full Name"
                        section="consent"
                        field="witnessName"
                        value={formData.consent.witnessName}
                        handleInputChange={onChange}
                        isRequired={true}
                    />
                </div>

                <Checkbox
                    label={`I, ${patientFullName} understand and agree to BrightLife Enhancement Services Termination Policy stated above.`}
                    value={`I, ${patientFullName} understand and agree to BrightLife Enhancement Services Termination Policy stated above.`}
                    checked={consent}
                    onChange={() => setConsent((prev) => !prev)}
                    checkedClass="border-2 border-darkBlue"
                    unCheckedClass="border-lightGrey"
                    isRequired={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="">
                        <label className="block text-deepGrey mb-1">
                            Patient Signature{" "}
                            <small className="text-vividRed text-lg">*</small>
                        </label>
                        <SignaturePad
                            handleInputChange={onChange}
                            section="consent"
                            fieldPath="patientSignature"
                            dateSection="consent"
                            dateFieldPath="patientSignDate"
                            signature={formData.consent.patientSignature}
                        />
                        <div className="mt-8">
                            {formData.consent.patientSignDate && (
                                <FieldItem
                                    label="Patient Signature Date"
                                    value={convertIsoDateToReadable(
                                        formData.consent.patientSignDate
                                    )}
                                    isRequired={true}
                                />
                            )}
                        </div>
                    </div>

                    <div className="">
                        <label className="block text-deepGrey mb-1">
                            Witness Signature{" "}
                            <small className="text-vividRed text-lg">*</small>
                        </label>
                        <SignaturePad
                            handleInputChange={onChange}
                            section="consent"
                            fieldPath="witnessSignature"
                            dateSection="consent"
                            dateFieldPath="witnessSignDate"
                            signature={formData.consent.witnessSignature}
                        />
                        <div className="mt-8">
                            {formData.consent.witnessSignDate && (
                                <FieldItem
                                    label="Witness Signature Date"
                                    value={convertIsoDateToReadable(
                                        formData.consent.witnessSignDate
                                    )}
                                    isRequired={true}
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
