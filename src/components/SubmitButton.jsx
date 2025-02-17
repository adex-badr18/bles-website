import { useState } from "react";
import Spinner from "./Spinner";

const SubmitButton = ({
    submitText,
    loadingText,
    onSubmit,
    xtraClass,
    isSubmitting,
}) => {
    return (
        <button
            className={`w-full bg-lightGreen hover:bg-lighterGreen px-4 py-2 text-white font-medium rounded-lg transition-colors duration-300 ${xtraClass}`}
            onClick={onSubmit}
        >
            {isSubmitting ? (
                <Spinner secondaryText={loadingText} />
            ) : (
                <span className="">{submitText}</span>
            )}
        </button>
    );
};

export default SubmitButton;
