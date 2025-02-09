import React from "react";

const FieldItem = ({ label, value, colspanClass }) => {
    return (
        <div className={`space-y-1 ${colspanClass}`}>
            <label htmlFor="" className="block text-grey">
                {label}
            </label>
            <div id="" className="input">
                {value}
            </div>
        </div>
    );
};

export default FieldItem;
