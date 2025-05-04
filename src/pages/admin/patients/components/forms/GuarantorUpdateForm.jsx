import React from "react";
import TextField from "../../../../../components/TextField";
import DateField from "../../../../../components/DateField";
import FileUpload from "../../../../../components/FileUpload";
import FieldItem from "../../../../../components/FieldItem";
import { useUpdatePatient } from "../../../../../hooks/usePatients";
import { formatToYYYYMMDD, objectToFormData } from "../../../../utils";
import SubmitButton from "../../../../../components/SubmitButton";

const GuarantorUpdateForm = ({ formData, handleInputChange }) => {
    const { mutate, isPending, error, data } = useUpdatePatient();

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
            ...formData.guarantor,
            dob: formatToYYYYMMDD(formData.guarantor.dob),
        };

        console.log(formattedData);

        const formDataPayload = objectToFormData(formattedData);

        // TODO: Update personal info
        mutate({
            patientId: formData?.patientId,
            payload: formDataPayload,
            endpoint: `patients/forms/register/${formData.patientId}/guarantor/${formData.id}`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <form>
                {" "}
                <div className="space-y-2">
                    <h3 className="font-bold text-xl text-darkBlue">
                        Guarantor
                    </h3>
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

                        <div className="space-y-3">
                            <FileUpload
                                label="State Issued ID"
                                name="stateIssuedId"
                                placeholder="State Issued ID"
                                section="guarantor"
                                field="stateIssuedId"
                                isRequired={false}
                                value={formData.guarantor.stateIssuedId}
                                handleFormChange={handleInputChange}
                                patientName={`${formData.personal.firstName}-${formData.personal.lastName}`}
                            />
                            {formData.guarantor.stateIssuedId && (
                                <FieldItem
                                    label="Current State Issued ID"
                                    src={formData.guarantor.stateIssuedId}
                                />
                            )}
                        </div>

                        <div className="space-y-3">
                            <FileUpload
                                label="Insurance Card"
                                name="insuranceCard"
                                placeholder="Insurance Card"
                                section="guarantor"
                                field="insuranceCard"
                                isRequired={false}
                                value={formData.guarantor.insuranceCard}
                                handleFormChange={handleInputChange}
                                patientName={`${formData.personal.firstName}-${formData.personal.lastName}`}
                            />
                            {formData.guarantor.insuranceCard && (
                                <FieldItem
                                    label="Current Insurance Card"
                                    src={formData.guarantor.insuranceCard}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </form>

            <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Updating"
                onSubmit={handleSubmit}
                submitText="Update Guarantor Info"
            />
        </div>
    );
};

export default GuarantorUpdateForm;
