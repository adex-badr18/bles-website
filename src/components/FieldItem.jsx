import React from "react";

const FieldItem = ({ label, value, src, colspanClass }) => {
    return (
        <div className={`space-y-1 ${colspanClass}`}>
            <label className="block text-deepGrey">{label}</label>
            {src && <img src={src} alt={label} className="w-full" />}

            <div className="input">{value || "N/A"}</div>
        </div>
    );
};

export default FieldItem;
