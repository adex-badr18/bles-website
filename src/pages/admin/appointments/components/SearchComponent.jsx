import { useState } from "react";
import DateField from "../../../../components/DateField";
import TextField from "../../../../components/TextField";
import SelectField from "../../../../components/SelectField";
import {
    genderOptions,
    maritalStatusOptions,
} from "../../../user/patientForms/data";
import { paymentMethods } from "../../../user/appointment/data";
import SubmitButton from "../../../../components/SubmitButton";

const SearchComponent = ({
    searchFormData,
    onChange,
    onSearch,
    isSubmitting,
}) => {
    return (
        <form className="space-y-5">
            <h3 className="text-xl font-semibold">Search Appointment(s)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <TextField
                    type="text"
                    label="Patient ID"
                    name="id"
                    field="id"
                    placeholder="Patient ID"
                    section="data"
                    value={searchFormData.data.id}
                    handleInputChange={onChange}
                />
                <TextField
                    type="text"
                    label="First Name"
                    name="firstName"
                    field="firstName"
                    placeholder="First Name"
                    section="data"
                    value={searchFormData.data.firstName}
                    handleInputChange={onChange}
                />
                <TextField
                    type="text"
                    label="Middle Name"
                    name="middleName"
                    field="middleName"
                    placeholder="Middle Name"
                    section="data"
                    value={searchFormData.data.middleName}
                    handleInputChange={onChange}
                />
                <TextField
                    type="text"
                    label="Last Name"
                    name="lastName"
                    field="lastName"
                    placeholder="Last Name"
                    section="data"
                    value={searchFormData.data.lastName}
                    handleInputChange={onChange}
                />
                <DateField
                    label="Date of Birth"
                    name="dob"
                    field="dob"
                    section="data"
                    placeholder="MM/DD/YYYY"
                    handleFormElementChange={onChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    defaultDate={
                        searchFormData.data.dob
                            ? new Date(searchFormData.data.dob)
                            : null
                    }
                />
                <TextField
                    type="text"
                    label="Phone Number"
                    name="phone"
                    field="phone"
                    placeholder="Phone Number"
                    section="data"
                    value={searchFormData.data.phone}
                    handleInputChange={onChange}
                />
                <TextField
                    type="text"
                    label="Email"
                    name="email"
                    field="email"
                    placeholder="Email"
                    section="data"
                    value={searchFormData.data.email}
                    handleInputChange={onChange}
                />
                <SelectField
                    label="Gender"
                    name="gender"
                    title="-- Select an option --"
                    data={genderOptions}
                    value={searchFormData.data.gender}
                    section="data"
                    field="gender"
                    handleSelectChange={onChange}
                />
                <SelectField
                    label="Marital Status"
                    name="maritalStatus"
                    title="-- Select an option --"
                    data={maritalStatusOptions}
                    value={searchFormData.data.maritalStatus}
                    section="data"
                    field="maritalStatus"
                    handleSelectChange={onChange}
                />
                <TextField
                    type="text"
                    label="City"
                    name="city"
                    field="city"
                    placeholder="City"
                    section="data"
                    value={searchFormData.data.city}
                    handleInputChange={onChange}
                />
                <TextField
                    type="text"
                    label="State"
                    name="state"
                    field="state"
                    placeholder="State"
                    section="data"
                    value={searchFormData.data.state}
                    handleInputChange={onChange}
                />
                <DateField
                    label="Appointment Date & Time"
                    name="appointmentDateTime"
                    field="appointmentDateTime"
                    section="data"
                    placeholder="MM/DD/YYYY"
                    handleFormElementChange={onChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    defaultDate={
                        searchFormData.data.appointmentDateTime
                            ? new Date(searchFormData.data.appointmentDateTime)
                            : null
                    }
                />
                <SelectField
                    label="Payment Options"
                    name="paymentMode"
                    title="-- Select an option --"
                    data={paymentMethods}
                    value={searchFormData.data.paymentMode}
                    section="data"
                    field="paymentMode"
                    handleSelectChange={onChange}
                />
            </div>

            <SubmitButton
                isDisabled={isSubmitting}
                isSubmitting={isSubmitting}
                loadingText="Searching..."
                onSubmit={onSearch}
                submitText="Search"
                xtraClass=""
            />
        </form>
    );
};

export default SearchComponent;
