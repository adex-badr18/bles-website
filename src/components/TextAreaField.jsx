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
            <label htmlFor={`${section}-${name}`} className="text-deepGrey">
                {label}
            </label>
            <textarea
                name={name}
                id={`${section}-${name}`}
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
