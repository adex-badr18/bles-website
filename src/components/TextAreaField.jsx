import React from "react";

const TextAreaField = ({
    label,
    name,
    placeholder,
    value,
    section,
    field,
    handleFormElementChange,
    isRequired,
    ...rest
}) => {
    return (
        <div className="space-y-1">
            <label htmlFor={`${section}-${name}`} className="text-deepGrey">
                {label}{" "}
                {isRequired && <small className="text-vividRed text-lg">*</small>}
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
                {...rest}
            ></textarea>
        </div>
    );
};

export default TextAreaField;
