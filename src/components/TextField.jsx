import React from "react";

const TextField = ({
    label,
    name,
    placeholder,
    section,
    field,
    value,
    handleInputChange,
    type
}) => {
    return (
        <div className="space-y-1">
            <label htmlFor={name} className="block text-grey">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="input"
                placeholder={placeholder}
                value={value}
                onChange={(e) =>
                    handleInputChange(section, field, e.target.value)
                }
            />
        </div>
    );
};

export default TextField;
