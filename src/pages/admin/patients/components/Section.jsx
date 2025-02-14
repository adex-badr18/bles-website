import React from "react";

const Section = ({ title, children }) => (
    <div className="bg-offWhite p-4 md:p-8 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {children}
        </div>
    </div>
);

export default Section;
