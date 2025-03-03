import { useState, useEffect } from "react";
import CheckboxGroup, {
    Checkbox,
} from "../../../../../components/CheckboxGroup";
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
import TextField from "../../../../../components/TextField";

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

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Authorization for Exchange of Information{" "}
                        <small className="text-vividRed text-lg">*</small>
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
                        isRequired={true}
                    />
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Purpose of Disclosure{" "}
                        <small className="text-vividRed text-lg">*</small>
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
                        Type of Information to be Disclosed{" "}
                        <small className="text-vividRed text-lg">*</small>
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
                        isRequired={true}
                    />

                    <div className="p-4 border rounded space-y-5">
                        <h5 className="tex-lg font-medium">
                            Patient Signature{" "}
                            <small className="text-vividRed text-lg">*</small>
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <FieldItem
                                label="Patient's Name"
                                value={patientFullName}
                                colspanClass="col-span-2"
                                isRequired={true}
                            />

                            {formData.consent.patientSignDate && (
                                <FieldItem
                                    label="Date"
                                    value={new Date(
                                        formData.consent.patientSignDate
                                    ).toLocaleDateString()}
                                    isRequired={true}
                                />
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-deepGrey">
                                Patient Signature{" "}
                                <small className="text-vividRed text-lg">
                                    *
                                </small>
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

                    {!formData.consent.guardianSignDate && (
                        <SelectField
                            label="Is Patient a Minor?"
                            name="isMinor"
                            title="-- Select an option --"
                            data={booleanOptions}
                            value={formData.consent.isMinor}
                            section="consent"
                            field="isMinor"
                            handleSelectChange={onChange}
                            isRequired={true}
                        />
                    )}

                    {/* Guardian Signature if patient is aMinor */}
                    {formData.consent.isMinor.toLowerCase() === "yes" && (
                        <div className="p-4 border rounded space-y-5">
                            <h5 className="tex-lg font-medium">
                                Legal Guardian/Authorized Representative
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <TextField
                                    type="text"
                                    label="Guardian's Name"
                                    name="guardianName"
                                    placeholder="Guardian's Name"
                                    section="consent"
                                    field="guardianName"
                                    value={formData.consent.guardianName}
                                    handleInputChange={onChange}
                                    isRequired={true}
                                />

                                <TextField
                                    type="text"
                                    label="Relationship to Patient"
                                    name="patientGuardianRelationship"
                                    placeholder="Relationship to Patient"
                                    section="consent"
                                    field="patientGuardianRelationship"
                                    value={
                                        formData.consent
                                            .patientGuardianRelationship
                                    }
                                    handleInputChange={onChange}
                                    isRequired={true}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-deepGrey">
                                    Guardian Signature{" "}
                                    <small className="text-vividRed text-lg">
                                        *
                                    </small>
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
                                    isRequired={true}
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
