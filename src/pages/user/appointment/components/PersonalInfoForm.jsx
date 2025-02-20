import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import StaticDivider from "../../../../components/StaticDivider";
import SelectField from "../../../../components/SelectField";
import TextField from "../../../../components/TextField";
import DateField from "../../../../components/DateField";
import FieldItem from "../../../../components/FieldItem";
import Spinner from "../../../../components/Spinner";
import { booleanOptions, genderOptions } from "../../patientForms/data";

const PersonalInfoForm = ({ formData, handleInputChange }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch patient info by Id
    const verifyId = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        // TODO: Fetch Patient data by id

        setTimeout(() => {
            // Success
            handleInputChange("personal", "verificationStatus", "success");

            // Error
            // handleInputChange("personal", "verificationStatus", "failed")

            handleInputChange("personal", "id", "PAT000001");
            handleInputChange("personal", "firstName", "Badrudeen");
            handleInputChange("personal", "middleName", "");
            handleInputChange("personal", "lastName", "Abdul-hameed");
            handleInputChange("personal", "gender", "Male");
            handleInputChange("personal", "phone", "+1234567890");
            handleInputChange("personal", "email", "tukstom12@gmail.com");
            handleInputChange("personal", "dob", new Date("01/10/1990"));
            handleInputChange("address", "street", "23 Hagers Street");
            handleInputChange("address", "city", "Middlesbrough");
            handleInputChange("address", "state", "London");
            handleInputChange("address", "zipCode", "123456");

            setIsSubmitting(false);
        }, 4000);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-1 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-darkBlue">
                    Welcome to BrightLife
                </h3>
                <p className=" text-deepGrey">
                    Let us help you take the first step toward healing and
                    renewed purpose.
                </p>
            </div>

            <div className="space-y-4 md:space-y-8">
                {formData.personal.verificationStatus.toLowerCase() !==
                    "success" && (
                    <SelectField
                        label="Are you a new patient?"
                        name="isNew"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.personal.isNew}
                        section="personal"
                        field="isNew"
                        handleSelectChange={handleInputChange}
                    />
                )}

                {formData.personal.isNew.toLowerCase() === "no" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <div className="col-span-2">
                            <TextField
                                type="text"
                                label="Patient ID"
                                name="id"
                                field="id"
                                placeholder="Patient ID"
                                section="personal"
                                value={formData.personal.id}
                                handleInputChange={handleInputChange}
                            />
                        </div>

                        <button
                            onClick={verifyId}
                            className="place-self-end bg-lightGreen hover:bg-emerald-500 text-white font-semibold py-2 px-3 rounded-md w-full transition-colors duration-300"
                        >
                            {isSubmitting ? (
                                <Spinner secondaryText="Verifying..." />
                            ) : (
                                "Verify ID"
                            )}
                        </button>
                    </div>
                )}

                {formData.personal.verificationStatus === "failed" && (
                    <div className="text-vividRed font-medium text-center">
                        The requested patient ID could not be found.
                    </div>
                )}

                {formData.personal.verificationStatus === "success" && (
                    <div className="space-y-10">
                        <StaticDivider />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FieldItem
                                label="First Name"
                                value={formData.personal.firstName}
                            />
                            <FieldItem
                                label="Middle Name"
                                value={formData.personal.middleName}
                            />
                            <FieldItem
                                label="Last Name"
                                value={formData.personal.lastName}
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={new Date(
                                    formData.personal.dob
                                ).toLocaleDateString()}
                            />
                            <FieldItem
                                label="Gender"
                                value={formData.personal.gender}
                            />
                            <FieldItem
                                label="Phone Number"
                                value={formData.personal.phone}
                            />
                            <FieldItem
                                label="Email"
                                value={formData.personal.email}
                            />
                            <FieldItem
                                label="Street Address"
                                value={formData.address.street}
                            />
                            <FieldItem
                                label="City"
                                value={formData.address.city}
                            />
                            <FieldItem
                                label="State"
                                value={formData.address.state}
                            />
                            <FieldItem
                                label="Zip Code"
                                value={formData.address.zipCode}
                            />
                        </div>
                    </div>
                )}
            </div>

            {formData.personal.isNew.toLowerCase() === "yes" && (
                <form className="space-y-10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                            Tell us a little about you
                        </h3>

                        <TextField
                            type="text"
                            label="First Name"
                            name="firstName"
                            placeholder="First Name"
                            section="personal"
                            field="firstName"
                            value={formData.personal.firstName}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Middle Name"
                            name="middleName"
                            placeholder="Middle Name"
                            section="personal"
                            field="middleName"
                            value={formData.personal.middleName}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Last Name"
                            name="lastName"
                            field="lastName"
                            placeholder="Last Name"
                            section="personal"
                            value={formData.personal.lastName}
                            handleInputChange={handleInputChange}
                        />

                        <SelectField
                            label="Gender"
                            name="gender"
                            title="-- Select Gender --"
                            data={genderOptions}
                            value={formData.personal.gender}
                            section="personal"
                            field="gender"
                            handleSelectChange={handleInputChange}
                        />
                        <DateField
                            label="Date of Birth"
                            name="dob"
                            field="dob"
                            section="personal"
                            placeholder="MM/DD/YYYY"
                            handleFormElementChange={handleInputChange}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            defaultDate={``}
                        />
                    </div>

                    <StaticDivider />

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                            Your contact Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <TextField
                                type="text"
                                label="Phone Number"
                                name="phone"
                                field="phone"
                                placeholder="Phone Number"
                                section="personal"
                                value={formData.personal.phone}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="email"
                                label="Email Address"
                                name="email"
                                field="email"
                                placeholder="Email Address"
                                section="personal"
                                value={formData.personal.email}
                                handleInputChange={handleInputChange}
                            />

                            <TextField
                                type="text"
                                label="Street Address"
                                name="street"
                                field="street"
                                placeholder="Street Address"
                                section="address"
                                value={formData.address.street}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="City"
                                name="city"
                                field="city"
                                placeholder="City"
                                section="address"
                                value={formData.address.city}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="State"
                                name="state"
                                field="state"
                                placeholder="State"
                                section="address"
                                value={formData.address.state}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="Zip Code"
                                name="zipCode"
                                field="zipCode"
                                placeholder="Zip Code"
                                section="address"
                                value={formData.address.zipCode}
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default PersonalInfoForm;
