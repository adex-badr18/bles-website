import React from "react";

const RadioField = ({
    label,
    data,
    name,
    value,
    section,
    field,
    handleFormElementChange,
}) => {
    return (
        <div className="space-y-1">
            <p className="text-deepGrey font-medium">{label}</p>
            <div className="flex items-center gap-8">
                {data.map((button) => (
                    <label
                        key={button.id}
                        htmlFor={button.name}
                        className="text-deepGrey font-medium flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name={name}
                            id={button.name}
                            className="hidden peer"
                            value={button.value}
                            checked={value === button.value}
                            onChange={(e) =>
                                handleFormElementChange(
                                    section,
                                    field,
                                    e.target.value
                                )
                            }
                        />
                        <div className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-darkBlue flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-transparent"></div>
                        </div>
                        <span className="">{button.text}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioField;
