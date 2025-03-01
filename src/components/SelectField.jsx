import React from "react";

const SelectField = ({
    data,
    label,
    title,
    name,
    value,
    section,
    field,
    handleSelectChange,
    selectClass,
    optionClass,
    isRequired,
    ...rest
}) => {
    return (
        <div className="space-y-1">
            <label
                htmlFor={`${section}-${name}`}
                className="block text-deepGrey"
            >
                {label}{" "}
                {isRequired && <small className="text-red-800">*</small>}
            </label>
            <div className="w-full border border-[#DCDEE0] rounded-md pr-3">
                <select
                    id={`${section}-${name}`}
                    className={`py-2 pl-3 text-darkBlue outline-none bg-transparent w-full ${selectClass}`}
                    value={value}
                    name={name}
                    onChange={(e) =>
                        handleSelectChange(section, field, e.target.value)
                    }
                    {...rest}
                >
                    <option value="" className="">
                        {title}
                    </option>
                    {data.map((option) => (
                        <option
                            key={option.id}
                            value={option.value}
                            className={`px-3 py-5 text-darkBlue capitalize ${optionClass}`}
                        >
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectField;
