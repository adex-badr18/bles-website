import React from "react";

const PageTitle = ({title, children}) => {
    return (
        <div className="flex items-center justify-between gap-4 mb-8">
            <h1 className="text-2xl text-lightGreen font-semibold">
                {title}
            </h1>
            <div className="flex gap-6">
                {children}
            </div>
        </div>
    );
};

export default PageTitle;
