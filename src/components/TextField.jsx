import React from "react";

const TextField = ({
    label,
    name,
    placeholder,
    section,
    field,
    value,
    handleInputChange,
    type,
    classAttr,
    ...rest
}) => {
    return (
        <div className={`space-y-1 ${classAttr}`}>
            <label htmlFor={`${section}-${name}`} className="block text-deepGrey">
                {label}
            </label>
            <input
                type={type}
                id={`${section}-${name}`}
                name={name}
                className={`input`}
                placeholder={placeholder}
                value={value}
                onChange={(e) =>
                    handleInputChange(section, field, e.target.value)
                }
                {...rest}
            />
        </div>
    );
};

export default TextField;
