import { useState, useEffect } from "react";
import TextField from "./TextField";
import DateField from "./DateField";
import SelectField from "./SelectField";
import StaticDivider from "./StaticDivider";
import FieldItem from "./FieldItem";
import { MdEmail } from "react-icons/md";
import SubmitButton from "./SubmitButton";

const VerificationStep = ({ formData, onChange }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch patient info by Id
    const verifyId = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        // TODO: Fetch Patient data by id

        setTimeout(() => {
            // Success
            onChange("verification", "verificationStatus", "success");

            // Error
            // onChange("verification", "verificationStatus", "failed")

            onChange("verification", "id", "PAT000001");
            onChange("verification", "firstName", "Badrudeen");
            onChange("verification", "middleName", "");
            onChange("verification", "lastName", "Abdul-hameed");
            onChange("verification", "gender", "Male");
            onChange("verification", "phone", "+1234567890");
            onChange("verification", "email", "tukstom12@gmail.com");
            onChange("verification", "dob", new Date("01/10/1990"));
            onChange("verification", "street", "23 Hagers Street");
            onChange("verification", "city", "Middlesbrough");
            onChange("verification", "state", "London");
            onChange("verification", "zipCode", "123456");

            setIsSubmitting(false);
        }, 4000);
    };

    console.log(formData);

    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h2 className="text-lg font-medium text-darkBlue">
                    Enter your patient ID below to fetch your basic information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    <div className="col-span-2">
                        <TextField
                            type="text"
                            label="Patient ID"
                            name="id"
                            field="id"
                            placeholder="Patient ID e.g. PAT000001"
                            section="verification"
                            value={formData.verification.id}
                            handleInputChange={onChange}
                            isRequired={true}
                        />
                    </div>

                    <SubmitButton
                        isSubmitting={isSubmitting}
                        loadingText="Verifying..."
                        onSubmit={verifyId}
                        submitText="Verify ID"
                        xtraClass="place-self-end"
                        isDisabled={
                            formData.verification.verificationStatus.toLowerCase() ===
                            "success" || !formData.verification.id
                        }
                    />

                    {/* <button
                        onClick={verifyId}
                        className="place-self-end bg-lightGreen hover:bg-emerald-500 text-white font-semibold py-2 px-3 rounded-md w-full transition-colors duration-300"
                    >
                        {isSubmitting ? (
                            <Spinner secondaryText="Verifying..." />
                        ) : (
                            "Verify ID"
                        )}
                    </button> */}
                </div>

                {formData.verification.verificationStatus === "failed" && (
                    <div className="text-vividRed font-medium text-center">
                        The requested patient ID could not be found.
                    </div>
                )}

                {formData.verification.verificationStatus === "success" && (
                    <div className="space-y-10">
                        <StaticDivider />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FieldItem
                                label="First Name"
                                value={formData.verification.firstName}
                            />
                            <FieldItem
                                label="Middle Name"
                                value={formData.verification.middleName}
                            />
                            <FieldItem
                                label="Last Name"
                                value={formData.verification.lastName}
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={new Date(
                                    formData.verification.dob
                                ).toLocaleDateString()}
                            />
                            <FieldItem
                                label="Gender"
                                value={formData.verification.gender}
                            />
                            <FieldItem
                                label="Phone Number"
                                value={formData.verification.phone}
                            />
                            <FieldItem
                                label="Email"
                                value={formData.verification.email}
                            />
                            <FieldItem
                                label="Street Address"
                                value={formData.verification.street}
                            />
                            <FieldItem
                                label="City"
                                value={formData.verification.city}
                            />
                            <FieldItem
                                label="State"
                                value={formData.verification.state}
                            />
                            <FieldItem
                                label="Zip Code"
                                value={formData.verification.zipCode}
                            />
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
};

export default VerificationStep;
