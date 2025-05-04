import SelectField from "../../../../../components/SelectField";
import SubmitButton from "../../../../../components/SubmitButton";
import TextField from "../../../../../components/TextField";
import { useUpdatePatient } from "../../../../../hooks/usePatients";
import { employmentOptions, familyRoleOptions, genderOptions, maritalStatusOptions } from "../../../../user/patientForms/data";

const ParentUpdateForm = ({ formData, handleInputChange }) => {
    const { mutate, isPending, error, data } = useUpdatePatient();

    const handleSubmit = () => {
        // Prepare parent info update payload
        const formattedData = { ...formData.parent };

        console.log(formattedData);

        const formDataPayload = objectToFormData(formattedData);

        // TODO: Update parent info
        mutate({
            patientId: formData?.patientId,
            payload: formDataPayload,
            endpoint: `patients/forms/register/${formData.patientId}/parent-guardian/${formData.id}`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
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
                            // isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
                        />
                    </div>
                </div>
            </form>

            <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Updating"
                onSubmit={handleSubmit}
                submitText="Update Parent/Guardian Info"
            />
        </div>
    );
};

export default ParentUpdateForm;
