import { Checkbox } from "../../../../../components/CheckboxGroup";
import SignaturePad from "../../../../../components/SignaturePad";
import DateField from "../../../../../components/DateField";
import FieldItem from "../../../../../components/FieldItem";

import { consentOptions } from "../../data";

const ConsentForm = ({
    consentData,
    setConsentData,
    handleInputChange,
    formData,
}) => {
    const handleCheckboxChange = (e, name) => {
        const { value } = e.target;

        setConsentData((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue">
                    Agreement Terms and Consent
                </h3>

                <div className="space-y-4">
                    {consentOptions.map((option) => (
                        <div
                            key={option.id}
                            className="p-4 border rounded-lg space-y-4"
                        >
                            <h5 className="font-medium text-darkBlue text-lg md:text-xl">
                                {option.title}
                            </h5>
                            <Checkbox
                                label={option.label}
                                value={option.value}
                                checked={consentData[option.name]}
                                onChange={(e) =>
                                    handleCheckboxChange(e, option.name)
                                }
                                checkedClass="border-2 border-darkBlue"
                                unCheckedClass="border-lightGrey"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-xl md:text-2xl text-darkBlue">
                    Signature and Date
                </h3>

                <div className="flex flex-col gap-5">
                    <SignaturePad
                        handleInputChange={handleInputChange}
                        section="consent"
                        fieldPath="signature"
                        dateSection="consent"
                        dateFieldPath="date"
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
            </div>
        </div>
    );
};

export default ConsentForm;
