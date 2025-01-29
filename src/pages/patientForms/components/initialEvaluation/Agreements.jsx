import DateField from "../../../../components/DateField";
import TextField from "../../../../components/TextField";
import RadioField from "../../../../components/RadioField";
import SignaturePad from "../../../../components/SignaturePad";
import { pcpAuthOptions, consentOptions } from "./data";
import { Checkbox } from "../../../../components/CheckboxGroup";
import SelectField from "../../../../components/SelectField";
import { booleanOptions } from "../../data";

const Agreements = ({ formData, onChange, consents, setConsents }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    const handleCheckboxChange = (name) => {
        setConsents((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-3 text-center">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                        Agreements and Authorization with BrightLife Enhancement
                        Services
                    </h3>

                    <p className="text-vividRed">
                        The sections below contain several agreements.
                        <span className="block">
                            Please read the agreements carefully and sign.
                        </span>
                    </p>
                </div>

                <SelectField
                    label="Do you have a Primary Care Physician (PCP)?"
                    name="havePcp"
                    title="-- Select an option --"
                    data={booleanOptions}
                    value={formData.primaryCarePhysician.havePcp}
                    section="primaryCarePhysician"
                    field="havePcp"
                    handleSelectChange={onChange}
                />

                {formData.primaryCarePhysician.havePcp.toLowerCase() ===
                    "yes" && (
                    <div className="p-4 border rounded space-y-4 md:space-y-8">
                        <h4 className="text-xl text-darkBlue font-medium">
                            PCP Contact Authorization
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <TextField
                                type="text"
                                label="Primary Care Physician's Name"
                                name="name"
                                placeholder="Primary Care Physician's Name"
                                section="primaryCarePhysician"
                                field="name"
                                value={formData.primaryCarePhysician.name}
                                handleInputChange={onChange}
                            />

                            <TextField
                                type="text"
                                label="Phone Number"
                                name="phone"
                                placeholder="Phone Number"
                                section="primaryCarePhysician"
                                field="phone"
                                value={formData.primaryCarePhysician.phone}
                                handleInputChange={onChange}
                            />

                            <TextField
                                type="text"
                                label="Fax"
                                name="fax"
                                placeholder="Fax"
                                section="primaryCarePhysician"
                                field="fax"
                                value={formData.primaryCarePhysician.fax}
                                handleInputChange={onChange}
                            />

                            <TextField
                                type="text"
                                label="Street Address"
                                name="streetName"
                                placeholder="Street Address"
                                section="primaryCarePhysician"
                                field="address.streetName"
                                value={
                                    formData.primaryCarePhysician.address
                                        .streetName
                                }
                                handleInputChange={onChange}
                            />

                            <TextField
                                type="text"
                                label="City"
                                name="city"
                                placeholder="City"
                                section="primaryCarePhysician"
                                field="address.city"
                                value={
                                    formData.primaryCarePhysician.address.city
                                }
                                handleInputChange={onChange}
                            />

                            <TextField
                                type="text"
                                label="State"
                                name="state"
                                placeholder="State"
                                section="primaryCarePhysician"
                                field="address.state"
                                value={
                                    formData.primaryCarePhysician.address.state
                                }
                                handleInputChange={onChange}
                            />

                            <TextField
                                type="text"
                                label="Zip Code"
                                name="zipCode"
                                placeholder="Zip Code"
                                section="primaryCarePhysician"
                                field="address.zipCode"
                                value={
                                    formData.primaryCarePhysician.address
                                        .zipCode
                                }
                                handleInputChange={onChange}
                            />
                        </div>

                        <RadioField
                            data={pcpAuthOptions}
                            label="What information should be released to your PCP?"
                            name="infoToRelease"
                            section="primaryCarePhysician"
                            field="infoToRelease"
                            value={formData.primaryCarePhysician.infoToRelease}
                            handleFormElementChange={onChange}
                            orientation="vertical"
                        />
                    </div>
                )}

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Full List of Agreements
                    </h4>

                    <div className="space-y-4">
                        <Checkbox
                            label={`I, ${patientFullName} ${consentOptions.finRes.label}`}
                            value={consentOptions.finRes.value}
                            checked={consents[consentOptions.finRes.name]}
                            onChange={() =>
                                handleCheckboxChange(consentOptions.finRes.name)
                            }
                            checkedClass="border-2 border-darkBlue"
                            unCheckedClass="border-lightGrey"
                        />

                        {formData.primaryCarePhysician.havePcp.toLowerCase() ===
                            "yes" &&
                            formData.primaryCarePhysician.infoToRelease && (
                                <>
                                    <Checkbox
                                        label={`I, ${patientFullName} hereby authorize BrightLife Enhancement Services to ${formData.primaryCarePhysician.infoToRelease}`}
                                        value={
                                            formData.primaryCarePhysician
                                                .infoToRelease
                                        }
                                        checked={consents.infoToRelease}
                                        onChange={() =>
                                            handleCheckboxChange(
                                                "infoToRelease"
                                            )
                                        }
                                        checkedClass="border-2 border-darkBlue"
                                        unCheckedClass="border-lightGrey"
                                    />

                                    <Checkbox
                                        label={`I, ${patientFullName} ${consentOptions.pcpAuth.label}`}
                                        value={consentOptions.pcpAuth.value}
                                        checked={
                                            consents[
                                                consentOptions.pcpAuth.name
                                            ]
                                        }
                                        onChange={() =>
                                            handleCheckboxChange(
                                                consentOptions.pcpAuth.name
                                            )
                                        }
                                        checkedClass="border-2 border-darkBlue"
                                        unCheckedClass="border-lightGrey"
                                    />
                                </>
                            )}

                        <Checkbox
                            label={`I, ${patientFullName} ${consentOptions.treatmentConsent.label}`}
                            value={consentOptions.treatmentConsent.value}
                            checked={
                                consents[consentOptions.treatmentConsent.name]
                            }
                            onChange={() =>
                                handleCheckboxChange(
                                    consentOptions.treatmentConsent.name
                                )
                            }
                            checkedClass="border-2 border-darkBlue"
                            unCheckedClass="border-lightGrey"
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Agreement Confirmation
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <div className="space-y-1 col-span-2">
                            <label
                                htmlFor="lastName"
                                className="block text-grey"
                            >
                                Patient's Name
                            </label>
                            <div id="lastName" className="input">
                                {patientFullName}
                            </div>
                        </div>
                        <DateField
                            label="Date"
                            name="date"
                            field="date"
                            section="consent"
                            placeholder="MM/DD/YYYY"
                            handleFormElementChange={onChange}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            defaultDate={new Date()}
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="lastName" className="block text-grey">
                            Signature
                        </label>
                        <SignaturePad
                            handleInputChange={onChange}
                            section="consent"
                            fieldPath="signature"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Agreements;
