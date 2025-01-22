import React from "react";

const Dropdown = ({ data, title, selectClass, optionClass, ...rest }) => {
    return (
        <div className="w-full border border-[#DCDEE0] rounded-md px-3">
            <select
                className={`py-2 text-darkBlue outline-none bg-transparent w-full ${selectClass}`}
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
    );
};

export default Dropdown;
