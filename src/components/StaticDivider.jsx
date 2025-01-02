import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const StaticDivider = ({ titleAlignment, ...rest }) => {
    return (
        <div
            className={`w-[180px] h-[5px] bg-transparent bg-gradient-to-r from-lightGreen rounded ${
                titleAlignment === "left" ? "mx-auto md:mx-0" : "mx-auto"
            } `}
            {...rest}
        ></div>
    );
};

export default StaticDivider;
