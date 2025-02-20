import React from "react";

const FieldItem = ({ label, value, src, colspanClass }) => {
    return (
        <div className={`space-y-1 ${colspanClass}`}>
            <h5 className="block text-deepGrey">{label}</h5>
            {src && <img src={src} alt={label} className="w-full" />}

            <div className="input">{value || "N/A"}</div>
        </div>
    );
};

export default FieldItem;
