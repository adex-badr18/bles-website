import TextField from "../../../../components/TextField";
import SelectField from "../../../../components/SelectField";
import { referralSourceOptions, referralTherapistOptions } from "../../data";

const Referral = ({ formData, onChange }) => {
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Referral Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <SelectField
                        label="Source"
                        name="source"
                        title="-- Select an option --"
                        data={referralSourceOptions}
                        value={formData.referral.source}
                        section="referral"
                        field="source"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Therapist"
                        name="therapist"
                        title="-- Select an option --"
                        data={referralTherapistOptions}
                        value={formData.referral.therapist}
                        section="referral"
                        field="therapist"
                        handleSelectChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="First Name"
                        name="firstName"
                        placeholder="First Name"
                        section="referral"
                        field="firstName"
                        value={formData.referral.firstName}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Middle Name"
                        name="middleName"
                        placeholder="Middle Name"
                        section="referral"
                        field="middleName"
                        value={formData.referral.middleName}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Last Name"
                        name="lastName"
                        placeholder="Last Name"
                        section="referral"
                        field="lastName"
                        value={formData.referral.lastName}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Phone Number"
                        name="phone"
                        placeholder="Phone Number"
                        section="referral"
                        field="phone"
                        value={formData.referral.phone}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Address (Street)"
                        name="streetName"
                        field="address.streetName"
                        placeholder="Address (Street)"
                        section="referral"
                        value={formData.referral.address.streetName}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="City"
                        name="city"
                        field="address.city"
                        placeholder="City"
                        section="referral"
                        value={formData.referral.address.city}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="State"
                        name="state"
                        field="address.state"
                        placeholder="State"
                        section="referral"
                        value={formData.referral.address.state}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Zip Code"
                        name="zipCode"
                        field="address.zipCode"
                        placeholder="Zip Code"
                        section="referral"
                        value={formData.referral.address.zipCode}
                        handleInputChange={onChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default Referral;
