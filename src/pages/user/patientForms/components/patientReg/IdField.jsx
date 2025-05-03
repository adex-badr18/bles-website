import { useState, useCallback } from "react";
import { useGeneratePatientId } from "../../../../../hooks/usePatients";
import { useToast } from "../../../../../components/ToastContext";
import { objectToFormData } from "../../../../utils";

import Spinner from "../../../../../components/Spinner";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";

const IdField = ({
    handleFormChange,
    section,
    field,
    isRequired,
    formData,
}) => {
    const { showToast } = useToast();
    // const [selectedFile, setSelectedFile] = useState("");
    const [generateIdError, setGenerateIdError] = useState("");
    const {
        mutate,
        isIdle,
        isPending,
        isSuccess,
        isError,
        error,
        data: responseObj,
    } = useGeneratePatientId({
        handleFormChange,
        section,
        field,
        showToast,
    });

    const generateIdHandler = useCallback((e) => {
        e.preventDefault();
        // const { personal } = formData;

        // setGenerateIdError("");
        // const isDataValid =
        //     personal.firstName && personal.lastName && personal.email;

        // if (!isDataValid) {
        //     setGenerateIdError("First name, last name, and email are required");
        //     showToast({
        //         message: "First name, last name, and email are required",
        //         type: "error",
        //         duration: 5000,
        //     });
        //     return;
        // }

        mutate();
    });

    return (
        <div className="space-y-1">
            <label
                htmlFor={`${section}-${field}`}
                className="block text-deepGrey"
            >
                {"Patient ID"}{" "}
                {isRequired && (
                    <small className="text-vividRed text-lg">*</small>
                )}
            </label>
            <input
                type="text"
                name={field}
                id={`${section}-${field}`}
                className="input bg-gray-100"
                placeholder="Patient ID"
                // value={responseObj?.message || ""}
                defaultValue={formData.identification.patientId}
                readOnly
                required={isRequired}
            />

            {!formData.identification.patientId && (
                <small className="text-xs text-darkBlue">
                    Click Generate ID to get a Patient ID
                </small>
            )}

            <div className="flex items-center gap-2">
                {!formData.identification.patientId && (
                    <button
                        className="py-1 px-2 bg-lightGreen text-white hover:bg-green-700 text-sm font-semibold rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={generateIdHandler}
                        disabled={isPending}
                    >
                        {isPending ? (
                            <Spinner
                                secondaryText="Generating..."
                                spinnerSize="w-3.5 h-3.5"
                                textClass="text-xs"
                            />
                        ) : (
                            "Generate ID"
                        )}
                    </button>
                )}

                {isError && (
                    <p className="flex items-center gap-1 text-xs text-vividRed">
                        <MdError />
                        <span className="">
                            {error?.message || "Could not generate ID!"}
                        </span>
                    </p>
                )}

                {(isSuccess || formData.identification.patientId) && (
                    <p className="flex items-center gap-1 text-sm text-lightGreen">
                        <BsExclamationTriangleFill />
                        <span className="">Copy and store your ID for future reference.</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default IdField;
