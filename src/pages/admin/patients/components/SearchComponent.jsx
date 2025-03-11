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

const SearchComponent = ({ setIsSearchModalOpen, onSearch }) => {
    const [searchParams, setSearchParams] = useState({
        data: {
            id: "",
            firstName: "",
            lastName: "",
            middleName: "",
            dob: "",
            phone: "",
            email: "",
            gender: "",
            maritalStatus: "",
            city: "",
            state: "",
            paymentMode: "",
        },
    });

    const onSearchParamsChange = (e) => {
        setSearchParams((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    };

    const searchHandler = async (e) => {
        e.preventDefault();

        onSearch(searchParams);
        setIsSearchModalOpen(false);
    };

    const clearSearch = (e) => {
        e.preventDefault();

        setSearchParams({
            data: {
                id: "",
                firstName: "",
                lastName: "",
                middleName: "",
                dob: "",
                phone: "",
                email: "",
                gender: "",
                maritalStatus: "",
                city: "",
                state: "",
                paymentMode: "",
            },
        });

        onSearch({});
    };

    const isFormEmpty = () => {
        const dataObj = searchParams.data;

        return Object.values(dataObj).every(
            (value) => value === "" || value === null
        );
    };

    return (
        <form className="space-y-5">
            <h3 className="text-xl font-semibold">Search Patient(s)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <TextField
                    type="text"
                    label="Patient ID"
                    name="id"
                    field="id"
                    placeholder="Patient ID"
                    section="data"
                    value={searchParams.data.id}
                    handleInputChange={onSearchParamsChange}
                />
                <TextField
                    type="text"
                    label="First Name"
                    name="firstName"
                    field="firstName"
                    placeholder="First Name"
                    section="data"
                    value={searchParams.data.firstName}
                    handleInputChange={onSearchParamsChange}
                />
                <TextField
                    type="text"
                    label="Middle Name"
                    name="middleName"
                    field="middleName"
                    placeholder="Middle Name"
                    section="data"
                    value={searchParams.data.middleName}
                    handleInputChange={onSearchParamsChange}
                />
                <TextField
                    type="text"
                    label="Last Name"
                    name="lastName"
                    field="lastName"
                    placeholder="Last Name"
                    section="data"
                    value={searchParams.data.lastName}
                    handleInputChange={onSearchParamsChange}
                />
                <DateField
                    label="Date of Birth"
                    name="dob"
                    field="dob"
                    section="data"
                    placeholder="MM/DD/YYYY"
                    handleFormElementChange={onSearchParamsChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    defaultDate={
                        searchParams.data.dob
                            ? new Date(searchParams.data.dob)
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
                    value={searchParams.data.phone}
                    handleInputChange={onSearchParamsChange}
                />
                <TextField
                    type="text"
                    label="Email"
                    name="email"
                    field="email"
                    placeholder="Email"
                    section="data"
                    value={searchParams.data.email}
                    handleInputChange={onSearchParamsChange}
                />
                <SelectField
                    label="Gender"
                    name="gender"
                    title="-- Select an option --"
                    data={genderOptions}
                    value={searchParams.data.gender}
                    section="data"
                    field="gender"
                    handleSelectChange={onSearchParamsChange}
                />
                <SelectField
                    label="Marital Status"
                    name="maritalStatus"
                    title="-- Select an option --"
                    data={maritalStatusOptions}
                    value={searchParams.data.maritalStatus}
                    section="data"
                    field="maritalStatus"
                    handleSelectChange={onSearchParamsChange}
                />
                <TextField
                    type="text"
                    label="City"
                    name="city"
                    field="city"
                    placeholder="City"
                    section="data"
                    value={searchParams.data.city}
                    handleInputChange={onSearchParamsChange}
                />
                <TextField
                    type="text"
                    label="State"
                    name="state"
                    field="state"
                    placeholder="State"
                    section="data"
                    value={searchParams.data.state}
                    handleInputChange={onSearchParamsChange}
                />
                <SelectField
                    label="Payment Options"
                    name="paymentMode"
                    title="-- Select an option --"
                    data={paymentMethods}
                    value={searchParams.data.paymentMode}
                    section="data"
                    field="paymentMode"
                    handleSelectChange={onSearchParamsChange}
                />
            </div>

            <div className="flex items-center justify-end gap-4">
                <button
                    onClick={clearSearch}
                    className="py-2 px-4 font-semibold text-center border border-vividRed bg-vividRed rounded-lg text-white hover:text-vividRed hover:bg-transparent transition duration-300"
                >
                    Clear
                </button>

                <button
                    onClick={searchHandler}
                    className={`py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent disabled:hover:text-lightGreen`}
                    disabled={isFormEmpty}
                >
                    Search
                </button>
            </div>

            {/* <SubmitButton
                isDisabled={isSubmitting}
                isSubmitting={isSubmitting}
                loadingText="Searching..."
                onSubmit={onSearch}
                submitText="Search"
                xtraClass=""
            /> */}
        </form>
    );
};

export default SearchComponent;
