import React from "react";

const FieldItem = ({ label, value, colspanClass }) => {
    return (
        <div className={`space-y-1 ${colspanClass}`}>
            <label className="block text-deepGrey">
                {label}
            </label>
            <div className="input">
                {value}
            </div>
        </div>
    );
};

export default FieldItem;
