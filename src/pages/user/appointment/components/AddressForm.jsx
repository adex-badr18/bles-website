const AddressForm = ({ formData, handleInputChange }) => {
    return (
        <div className="space-y-6">
            <form className="space-y-8 divide-y-2 divide-lightGray">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                        Your address
                    </h3>

                    <div className="space-y-1">
                        <label htmlFor="address1" className="block text-grey">
                            Address Line 1:
                        </label>
                        <input
                            type="text"
                            id="address1"
                            name="address1"
                            className="input"
                            placeholder="Address Line 1"
                            value={formData.address.address1}
                            onChange={(e) =>
                                handleInputChange(
                                    "address",
                                    "address1",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="address2" className="block text-grey">
                            Address Line 2:
                        </label>
                        <input
                            type="text"
                            id="address2"
                            name="address2"
                            className="input"
                            placeholder="Address Line 2"
                            value={formData.address.address2}
                            onChange={(e) =>
                                handleInputChange(
                                    "address",
                                    "address2",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="city" className="block text-grey">
                            City:
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="input"
                            placeholder="City"
                            value={formData.address.city}
                            onChange={(e) =>
                                handleInputChange(
                                    "address",
                                    "city",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="state" className="block text-grey">
                            State:
                        </label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            className="input"
                            placeholder="State"
                            value={formData.address.state}
                            onChange={(e) =>
                                handleInputChange(
                                    "address",
                                    "state",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="zipCode" className="block text-grey">
                            Zip Code:
                        </label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            className="input"
                            placeholder="Zip Code"
                            value={formData.address.zipCode}
                            onChange={(e) =>
                                handleInputChange(
                                    "address",
                                    "zipCode",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddressForm;
