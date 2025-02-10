import { useState, useEffect } from "react";
import CheckboxGroup, { Checkbox } from "../../../../../components/CheckboxGroup";
import {
    authorizationOptions,
    disclosurePurposeOptions,
    infoTypeOptions,
    partiesObjStructure,
    revokeRightList,
    risksList,
} from "./data";
import SignaturePad from "../../../../../components/SignaturePad";
import DateField from "../../../../../components/DateField";
import FieldItem from "../../../../../components/FieldItem";
import SelectField from "../../../../../components/SelectField";
import DynamicObjectField from "../../../../../components/DynamicObjectField";
import { CheckMarkIcon } from "../../../programs/components/icons";
import { booleanOptions } from "../../data";

const Authorizations = ({
    formData,
    setFormData,
    onChange,
    consent,
    setConsent,
}) => {
    const [otherPurposeChecked, setOtherPurposeChecked] = useState(false);
    const [otherPurpose, setOtherPurpose] = useState("");
    const [otherInfoTypeChecked, setOtInfoTypeChecked] = useState(false);
    const [otherInfoType, setOtherInfoType] = useState("");
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    // const handleCheckboxChange = (name) => {
    //     setConsents((prev) => ({ ...prev, [name]: !prev[name] }));
    // };

    const handleOtherOptionTextChange = (value, name) => {
        if (formData[name].includes(value)) {
            setFormData((prev) => ({
                ...prev,
                [name]: prev[name].filter((option) => option !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: [...prev[name], value],
            }));
        }
    };

    useEffect(() => {
        if (otherPurpose) {
            handleOtherOptionTextChange(otherPurpose, "disclosurePurpose");
        }
    }, [otherPurposeChecked]);

    console.log(formData);

    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-3 text-center">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                        Authorization for Exchange of Information
                    </h3>

                    <p className="text-vividRed">
                        Please fill the form below carefuly. Indicate the
                        purpose for releasing/receiving your health data. Sign
                        and date the form to confirm your authorization.
                    </p>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Authorization for Exchange of Information
                    </h4>

                    <CheckboxGroup
                        label="I hereby authorize BrightLife Enhancement Services to:"
                        smallLabel="(Check all that apply)"
                        name="authRight"
                        options={authorizationOptions}
                        formData={formData}
                        setFormData={setFormData}
                        isRequired={true}
                        layout="vertical"
                    />
                </div>

                <div className="p-4 border rounded space-y-5">
                    {/* Dynamic Field for Receiving/Sending Party */}
                    <DynamicObjectField
                        fieldPath="parties"
                        section="authorization"
                        onChange={onChange}
                        objStructure={partiesObjStructure}
                        title="Receiving/Sending Party Information"
                        moreText="individual/Organization"
                    />
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Purpose of Disclosure
                    </h4>

                    <CheckboxGroup
                        label="Information should be disclosed ONLY for the following purposes:"
                        smallLabel="(Check all that apply)"
                        name="disclosurePurpose"
                        options={disclosurePurposeOptions}
                        formData={formData}
                        setFormData={setFormData}
                        isRequired={true}
                        layout="vertical"
                    />

                    {/* <div className="flex items-center gap-2">
                        <Checkbox
                            label={
                                <span className="text-nowrap">
                                    Other (Please specify)
                                </span>
                            }
                            value={`Other (Please specify)`}
                            checked={otherPurposeChecked}
                            onChange={() =>
                                setOtherPurposeChecked((prev) => !prev)
                            }
                            checkedClass="border-2 border-darkBlue"
                            unCheckedClass="border-lightGrey"
                        />
                        
                        {otherPurposeChecked && (
                            <input
                                type="text"
                                value={otherPurpose}
                                onChange={(e) =>
                                    setOtherPurpose(e.target.value)
                                }
                                className="w-full border-b border-[#DCDEE0] text-darkBlue outline-none py-2 px-3"
                                placeholder="Other purpose"
                            />
                        )}
                    </div> */}
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Type of Information to be Disclosed
                    </h4>

                    <CheckboxGroup
                        label="Disclose ONLY the following type of information:"
                        smallLabel="(Check all that apply)"
                        name="infoTypeToRelease"
                        options={infoTypeOptions}
                        formData={formData}
                        setFormData={setFormData}
                        isRequired={true}
                        layout="vertical"
                    />

                    {/* <div className="flex items-center gap-2">
                        <Checkbox
                            label={
                                <span className="text-nowrap">
                                    Other (Please specify)
                                </span>
                            }
                            value={`Other (Please specify)`}
                            checked={otherPurposeChecked}
                            onChange={() =>
                                setOtherPurposeChecked((prev) => !prev)
                            }
                            checkedClass="border-2 border-darkBlue"
                            unCheckedClass="border-lightGrey"
                        />
                        
                        {otherPurposeChecked && (
                            <input
                                type="text"
                                value={otherPurpose}
                                onChange={(e) =>
                                    setOtherPurpose(e.target.value)
                                }
                                className="w-full border-b border-[#DCDEE0] text-darkBlue outline-none py-2 px-3"
                                placeholder="Other purpose"
                            />
                        )}
                    </div> */}
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Right to Revoke
                    </h4>

                    <ul className="space-y-1">
                        {revokeRightList.map((right) => (
                            <li
                                key={right.id}
                                className="flex items-start gap-4 group"
                            >
                                <CheckMarkIcon />

                                <span className="">{right.descr}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Risks & Privacy Considerations
                    </h4>

                    <ul className="space-y-1">
                        {risksList.map((risk) => (
                            <li
                                key={risk.id}
                                className="flex items-start gap-4 group"
                            >
                                <CheckMarkIcon />

                                <span className="">{risk.descr}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Signatures and consents */}
                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Signatures & Consent
                    </h4>

                    <Checkbox
                        label={`By signing this form, I, ${patientFullName} confirm that I have reviewed and agree to the release/receive terms based on the information provided above.`}
                        value={`By signing this form, I, ${patientFullName} confirm that I have reviewed and agree to the release/receive terms based on the information provided above.`}
                        checked={consent}
                        onChange={() => setConsent((prev) => !prev)}
                        checkedClass="border-2 border-darkBlue"
                        unCheckedClass="border-lightGrey"
                    />

                    <div className="p-4 border rounded space-y-5">
                        <h5 className="tex-lg font-medium">
                            Patient Signature
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <FieldItem
                                label="Patient's Name"
                                value={patientFullName}
                                colspanClass="col-span-2"
                            />

                            {formData.consent.patientSignDate && (
                                <FieldItem
                                    label="Date"
                                    value={new Date(
                                        formData.consent.patientSignDate
                                    ).toLocaleDateString()}
                                />
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-grey">
                                Patient Signature
                            </label>
                            <SignaturePad
                                handleInputChange={onChange}
                                section="consent"
                                fieldPath="patientSignature"
                                dateSection="consent"
                                dateFieldPath="patientSignDate"
                            />
                        </div>
                    </div>

                    <SelectField
                        label="Is Patient a Minor?"
                        name="isMinor"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.consent.isMinor}
                        section="consent"
                        field="isMinor"
                        handleSelectChange={onChange}
                    />

                    {/* Guardian Signature if patient is aMinor */}
                    {formData.consent.isMinor === "yes" && (
                        <div className="p-4 border rounded space-y-5">
                            <h5 className="tex-lg font-medium">
                                Legal Guardian/Authorized Representative
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <FieldItem
                                    label="Guardian's Name"
                                    value={formData.consent.guardianName}
                                />

                                <FieldItem
                                    label="Relationship to Patient"
                                    value={
                                        formData.consent
                                            .patientGuardianRelationship
                                    }
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-grey">
                                    Guardian Signature
                                </label>
                                <SignaturePad
                                    handleInputChange={onChange}
                                    section="consent"
                                    fieldPath="guardianSignature"
                                    dateSection="consent"
                                    dateFieldPath="guardianSignDate"
                                />
                            </div>

                            {formData.consent.guardianSignDate && (
                                <FieldItem
                                    label="Date"
                                    value={new Date(
                                        formData.consent.guardianSignDate
                                    ).toLocaleDateString()}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
};

export default Authorizations;
