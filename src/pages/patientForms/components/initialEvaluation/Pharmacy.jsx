import TextField from "../../../../components/TextField";

const Pharmacy = ({ formData, onChange }) => {
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Pharmacy Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <TextField
                        type="text"
                        label="Full Name"
                        name="name"
                        placeholder="Full Name"
                        section="pharmacy"
                        field="name"
                        value={formData.pharmacy.name}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Phone Number"
                        name="phone"
                        placeholder="Phone Number"
                        section="pharmacy"
                        field="phone"
                        value={formData.pharmacy.phone}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Street Address"
                        name="streetName"
                        placeholder="Street Address"
                        section="pharmacy"
                        field="address.streetName"
                        value={formData.pharmacy.address.streetName}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="City"
                        name="city"
                        placeholder="City"
                        section="pharmacy"
                        field="address.city"
                        value={formData.pharmacy.address.city}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="State"
                        name="state"
                        placeholder="State"
                        section="pharmacy"
                        field="address.state"
                        value={formData.pharmacy.address.state}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Zip Code"
                        name="zipCode"
                        placeholder="Zip Code"
                        section="pharmacy"
                        field="address.zipCode"
                        value={formData.pharmacy.address.zipCode}
                        handleInputChange={onChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default Pharmacy;
