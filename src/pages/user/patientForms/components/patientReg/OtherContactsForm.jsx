import TextField from "../../../../../components/TextField";
import SelectField from "../../../../../components/SelectField";
import DateField from "../../../../../components/DateField";

import {
    familyRoleOptions,
    employmentOptions,
    genderOptions,
    maritalStatusOptions,
} from "../../data";
import FileUpload from "../../../../../components/FileUpload";

const OtherContactsForm = ({ formData, handleInputChange }) => {
    console.log(formData)
    return (
        <form className="space-y-4 md:space-y-8">
            <div className="space-y-2">
                <h3 className="font-bold text-xl text-darkBlue">
                    Parent/Guardian
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <TextField
                        type="text"
                        label="First Name"
                        name="firstName"
                        placeholder="First Name"
                        section="parent"
                        field="firstName"
                        value={formData.parent.firstName}
                        handleInputChange={handleInputChange}
                    />
                    {/* <TextField
                        type="text"
                        label="Middle Name"
                        name="middleName"
                        placeholder="Middle Name"
                        section="parent"
                        field="middleName"
                        value={formData.parent.middleName}
                        handleInputChange={handleInputChange}
                    /> */}
                    <TextField
                        type="text"
                        label="Last Name"
                        name="lastName"
                        field="lastName"
                        placeholder="Last Name"
                        section="parent"
                        value={formData.parent.lastName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Phone"
                        name="phone"
                        field="phone"
                        placeholder="Work Phone"
                        section="parent"
                        value={formData.parent.phone}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="email"
                        label="Email Address"
                        name="email"
                        field="email"
                        placeholder="Email Address"
                        section="parent"
                        value={formData.parent.email}
                        handleInputChange={handleInputChange}
                    />
                    <SelectField
                        label="Gender"
                        name="gender"
                        title="-- Select Gender --"
                        data={genderOptions}
                        value={formData.parent.gender}
                        section="parent"
                        field="gender"
                        handleSelectChange={handleInputChange}
                    />
                    <SelectField
                        label="Marital Status"
                        name="maritalStatus"
                        title="-- Select an option --"
                        data={maritalStatusOptions}
                        value={formData.parent.maritalStatus}
                        section="parent"
                        field="maritalStatus"
                        handleSelectChange={handleInputChange}
                    />
                    <SelectField
                        label="Family Role"
                        name="familyRole"
                        title="-- Select a role --"
                        data={familyRoleOptions}
                        value={formData.parent.familyRole}
                        section="parent"
                        field="familyRole"
                        handleSelectChange={handleInputChange}
                    />
                    <SelectField
                        label="Employment Status"
                        name="employmentStatus"
                        title="-- Select a status --"
                        data={employmentOptions}
                        value={formData.parent.employmentStatus}
                        section="parent"
                        field="employmentStatus"
                        handleSelectChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Employer"
                        name="employer"
                        field="employer"
                        placeholder="Employer"
                        section="parent"
                        value={formData.parent.employer}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Occupation"
                        name="occupation"
                        field="occupation"
                        placeholder="Occupation"
                        section="parent"
                        value={formData.parent.occupation}
                        handleInputChange={handleInputChange}
                    />

                    <TextField
                        type="text"
                        label="Address (Street)"
                        name="streetName"
                        field="address.streetName"
                        placeholder="Address (Street)"
                        section="parent"
                        value={formData.parent.address.streetName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="City"
                        name="city"
                        field="address.city"
                        placeholder="City"
                        section="parent"
                        value={formData.parent.address.city}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="State"
                        name="state"
                        field="address.state"
                        placeholder="State"
                        section="parent"
                        value={formData.parent.address.state}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Zip Code"
                        name="zipCode"
                        field="address.zipCode"
                        placeholder="Zip Code"
                        section="parent"
                        value={formData.parent.address.zipCode}
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="font-bold text-xl text-darkBlue">Guarantor</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <TextField
                        type="text"
                        label="First Name"
                        name="firstName"
                        placeholder="First Name"
                        section="guarantor"
                        field="firstName"
                        value={formData.guarantor.firstName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Last Name"
                        name="lastName"
                        field="lastName"
                        placeholder="Last Name"
                        section="guarantor"
                        value={formData.guarantor.lastName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Phone"
                        name="phone"
                        field="phone"
                        placeholder="Phone"
                        section="guarantor"
                        value={formData.guarantor.phone}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="email"
                        label="Email Address"
                        name="email"
                        field="email"
                        placeholder="Email Address"
                        section="guarantor"
                        value={formData.guarantor.email}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Relationship"
                        name="relationship"
                        field="relationship"
                        placeholder="Relationship"
                        section="guarantor"
                        value={formData.guarantor.relationship}
                        handleInputChange={handleInputChange}
                    />
                    <DateField
                        label="Date of Birth"
                        name="dob"
                        field="dob"
                        section="guarantor"
                        placeholder="MM/DD/YYYY"
                        handleFormElementChange={handleInputChange}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        defaultDate={formData.guarantor.dob}
                    />
                    <TextField
                        type="text"
                        label="Address (Street)"
                        name="streetName"
                        field="address.streetName"
                        placeholder="Address (Street)"
                        section="guarantor"
                        value={formData.guarantor.address.streetName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="City"
                        name="city"
                        field="address.city"
                        placeholder="City"
                        section="guarantor"
                        value={formData.guarantor.address.city}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="State"
                        name="state"
                        field="address.state"
                        placeholder="State"
                        section="guarantor"
                        value={formData.guarantor.address.state}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Zip Code"
                        name="zipCode"
                        field="address.zipCode"
                        placeholder="Zip Code"
                        section="guarantor"
                        value={formData.guarantor.address.zipCode}
                        handleInputChange={handleInputChange}
                    />
                    <FileUpload
                        label="State Issued ID"
                        name="stateIssuedId"
                        placeholder="State Issued ID"
                        section="guarantor"
                        field="stateIssuedId"
                        isRequired={true}
                        handleFormChange={handleInputChange}
                    />
                    <FileUpload
                        label="Insurance Card"
                        name="insuranceCard"
                        placeholder="Insurance Card"
                        section="guarantor"
                        field="insuranceCard"
                        isRequired={true}
                        handleFormChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="font-bold text-xl text-darkBlue">
                    Emergency Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <TextField
                        type="text"
                        label="First Name"
                        name="firstName"
                        placeholder="First Name"
                        section="emergency"
                        field="firstName"
                        value={formData.emergency.firstName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Last Name"
                        name="lastName"
                        field="lastName"
                        placeholder="Last Name"
                        section="emergency"
                        value={formData.emergency.lastName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Home Phone"
                        name="homePhone"
                        field="homePhone"
                        placeholder="Home Phone"
                        section="emergency"
                        value={formData.emergency.phone}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Cell Phone"
                        name="cellPhone"
                        field="cellPhone"
                        placeholder="Cell Phone"
                        section="emergency"
                        value={formData.emergency.cellPhone}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="email"
                        label="Email Address"
                        name="email"
                        field="email"
                        placeholder="Email Address"
                        section="emergency"
                        value={formData.emergency.email}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Relationship"
                        name="relationship"
                        field="relationship"
                        placeholder="Relationship"
                        section="emergency"
                        value={formData.emergency.relationship}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Address (Street)"
                        name="streetName"
                        field="address.streetName"
                        placeholder="Address (Street)"
                        section="emergency"
                        value={formData.emergency.address.streetName}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="City"
                        name="city"
                        field="address.city"
                        placeholder="City"
                        section="emergency"
                        value={formData.emergency.address.city}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="State"
                        name="state"
                        field="address.state"
                        placeholder="State"
                        section="emergency"
                        value={formData.emergency.address.state}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Zip Code"
                        name="zipCode"
                        field="address.zipCode"
                        placeholder="Zip Code"
                        section="emergency"
                        value={formData.emergency.address.zipCode}
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default OtherContactsForm;
