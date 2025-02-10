import StaticDivider from "../../../../components/StaticDivider";
import Dropdown from "../../../../components/Dropdown";
import { paymentMethods, insuranceNames } from "../data";

const InsuranceForm = ({ formData, handleInputChange }) => {
    return (
        <div className="space-y-6">
            <form className="space-y-8">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                        How do you plan to pay for your visit?
                    </h3>

                    <div className="space-y-1">
                        <label
                            htmlFor="paymentMethod"
                            className="block text-grey"
                        >
                            Payment Method:
                        </label>
                        <Dropdown
                            id="paymentMethod"
                            name="paymentMethod"
                            selectClass=""
                            title="-- Select an option --"
                            data={paymentMethods}
                            value={formData.insurance.paymentMethod}
                            onChange={(e) =>
                                handleInputChange(
                                    "insurance",
                                    "paymentMethod",
                                    e.target.value
                                )
                            }
                        />
                    </div>
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

                        <div className="space-y-1">
                            <label
                                htmlFor="insuranceName"
                                className="block text-grey"
                            >
                                Insurance Name:
                            </label>
                            <Dropdown
                                id="insuranceName"
                                name="insuranceName"
                                selectClass=""
                                title="-- Select an option --"
                                data={insuranceNames}
                                value={formData.insurance.insuranceName}
                                onChange={(e) =>
                                    handleInputChange(
                                        "insurance",
                                        "insuranceName",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="insuranceNumber"
                                className="block text-grey"
                            >
                                Insurance Number:
                            </label>
                            <input
                                type="text"
                                id="insuranceNumber"
                                name="insuranceNumber"
                                className="input"
                                placeholder="Insurance Number"
                                value={formData.insurance.insuranceNumber}
                                onChange={(e) =>
                                    handleInputChange(
                                        "insurance",
                                        "insuranceNumber",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default InsuranceForm;
