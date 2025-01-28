import React from "react";

const TextAreaField = ({
    label,
    name,
    placeholder,
    value,
    section,
    field,
    handleFormElementChange,
}) => {
    return (
        <div className="space-y-1">
            <label htmlFor={name} className="text-grey ">
                {label}
            </label>
            <textarea
                name={name}
                id={name}
                className="input"
                placeholder={placeholder}
                value={value}
                onChange={(e) =>
                    handleFormElementChange(section, field, e.target.value)
                }
            ></textarea>
        </div>
    );
};

export default TextAreaField;
