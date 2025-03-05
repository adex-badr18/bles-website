import { useState } from "react";
import DateField from "../../../../components/DateField";
import TextField from "../../../../components/TextField";
import SelectField from "../../../../components/SelectField";
import {
    genderOptions,
    maritalStatusOptions,
} from "../../../user/patientForms/data";
import { ratingOptions, statusOptions } from "../data";
import SubmitButton from "../../../../components/SubmitButton";

const SearchComponent = ({
    searchFormData,
    onChange,
    onSearch,
    isSubmitting,
}) => {
    return (
        <form className="space-y-5">
            <h3 className="text-xl font-semibold">Search Review(s)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <TextField
                    type="text"
                    label="Name"
                    name="name"
                    field="name"
                    placeholder="Name"
                    section="data"
                    value={searchFormData.data.name}
                    handleInputChange={onChange}
                />
                <TextField
                    type="text"
                    label="Email"
                    name="email"
                    field="email"
                    placeholder="Email"
                    section="data"
                    value={searchFormData.data.email}
                    handleInputChange={onChange}
                />
                <SelectField
                    label="Rating"
                    name="rating"
                    title="-- Select an option --"
                    data={ratingOptions}
                    value={searchFormData.data.rating}
                    section="data"
                    field="rating"
                    handleSelectChange={onChange}
                />
                <SelectField
                    label="Status"
                    name="status"
                    title="-- Select an option --"
                    data={statusOptions}
                    value={searchFormData.data.status}
                    section="data"
                    field="status"
                    handleSelectChange={onChange}
                />
            </div>

            <SubmitButton
                isDisabled={isSubmitting}
                isSubmitting={isSubmitting}
                loadingText="Searching..."
                onSubmit={onSearch}
                submitText="Search"
                xtraClass=""
            />
        </form>
    );
};

export default SearchComponent;
