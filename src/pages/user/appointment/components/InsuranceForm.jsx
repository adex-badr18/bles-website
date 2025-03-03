import StaticDivider from "../../../../components/StaticDivider";
import Dropdown from "../../../../components/Dropdown";
import { paymentMethods, insuranceNames } from "../data";
import TextField from "../../../../components/TextField";
import SelectField from "../../../../components/SelectField";

const InsuranceForm = ({ formData, handleInputChange }) => {
    return (
        <div className="space-y-6">
            <form className="space-y-8">
                <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-medium text-deepGrey text-center">
                            How do you plan to pay for your visit?
                        </h3>

                        <p
                            aria-label="All fields marked asterik (*) are required"
                            className="text-sm text-vividRed font-bold text-center"
                        >
                            All fields marked (*) are required.
                        </p>
                    </div>

                    <SelectField
                        label="Payment Method"
                        name="paymentMethod"
                        title="-- Select an option --"
                        data={paymentMethods}
                        value={formData.insurance.paymentMethod}
                        section="insurance"
                        field="paymentMethod"
                        handleSelectChange={handleInputChange}
                        isRequired={true}
                    />
                </div>

                {formData.insurance.paymentMethod.toLowerCase() ===
                    "insurance card" && <StaticDivider />}

                {formData.insurance.paymentMethod.toLowerCase() ===
                    "insurance card" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-center flex-wrap gap-1">
                            {insuranceNames.map((insurance) => (
                                <img
                                    key={insurance.id}
                                    src={insurance.logo}
                                    alt=""
                                    className="w-20 h-auto"
                                />
                            ))}
                        </div>

                        <SelectField
                            label="Insurance Name"
                            name="insuranceName"
                            title="-- Select an option --"
                            data={insuranceNames}
                            value={formData.insurance.insuranceName}
                            section="insurance"
                            field="insuranceName"
                            handleSelectChange={handleInputChange}
                            isRequired={true}
                        />

                        <TextField
                            type="text"
                            label="Insurance Number"
                            name="insuranceNumber"
                            field="insuranceNumber"
                            placeholder="Insurance Number"
                            section="insurance"
                            value={formData.insurance.insuranceNumber}
                            handleInputChange={handleInputChange}
                            isRequired={true}
                        />
                    </div>
                )}
            </form>
        </div>
    );
};

export default InsuranceForm;
