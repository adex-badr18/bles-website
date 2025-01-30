import { useState, useEffect } from "react";
import StepIndicator from "./StepIndicator";
import Modal from "./Modal";

const MultiStepForm = ({
    formData,
    // isStepValid,
    // isFormValid,
    steps,
    stepForms,
    formSize,
    submitHandler,
    optionalFields,
}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    let formSizeClass;

    if (formSize.toLowerCase() === "sm") {
        formSizeClass = "w-full max-w-xl mx-auto";
    } else if (formSize.toLowerCase() === "md") {
        formSizeClass = "w-full max-w-3xl mx-auto";
    } else if (formSize.toLowerCase() === "lg") {
        formSizeClass = "w-full max-w-5xl mx-auto";
    }

    // Scroll to top when step changes
    useEffect(() => {
        window.scrollTo({ top: 130, behavior: "smooth" });
    }, [currentStep]);

    const goToNextStep = () => {
        if (isStepValid()) {
            setCompletedSteps((prev) => [...prev, currentStep]);

            setCurrentStep((prev) => Math.min(prev + 1, steps.length));
        }
    };

    const goToPreviousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const formatToCamelCase = (str) => {
        return `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`.replace(
            " ",
            ""
        );
    };

    // Step Validation logic
    const isStepValid = (step = currentStep) => {
        // const dataObj = formData[formatToCamelCase(steps[step])];
        // // const optionalInsuranceFields = ["insuranceName", "insuranceNumber"];

        // for (const key in dataObj) {
        //     const value = dataObj[key];

        //     if (optionalFields.includes(key)) {
        //         continue;
        //     }

        //     // if (optionalInsuranceFields.includes(key)) {
        //     //     if (dataObj["paymentMethod"].toLowerCase() === "self pay") {
        //     //         continue;
        //     //     }
        //     // }

        //     if (
        //         value === null ||
        //         value === undefined ||
        //         (typeof value === "string" && value.trim() === "") ||
        //         (Array.isArray(value) && value.length === 0)
        //     ) {
        //         return false;
        //     }
        // }

        return true;
    };

    // Form validity logic
    const isFormValid = (obj, optionalFields = []) => {
        // Create helper function to check if a property is optional
        const isOptional = (key) => optionalFields.includes(key);

        const checkProperties = (obj, path = []) => {
            // Loop through the object
            for (const key in obj) {
                // Get the value of the current property
                const value = obj[key];

                // Compute nested object paths e.g. personal.address
                const currentPath = [...path, key].join(".");

                if (typeof value === "object" && value !== null) {
                    // If the current property value is an object and is not null,
                    // recursively check the nested object
                    if (!checkProperties(value, [...path, key])) {
                        return false;
                    }
                } else if (!value && !isOptional(currentPath)) {
                    // If value is empty and the key is not optional, return false
                    return false;
                }
            }

            return true;
        };

        return checkProperties(obj);
    };

    // console.log(isFormValid(formData.personal, ["middleName"]));

    const goToStep = (step) => {
        if (!isStepValid(step)) return;

        setCurrentStep(step);
    };

    const reviewHandler = () => {
        setCompletedSteps((prev) => [...prev, currentStep]);
        setIsReviewModalOpen(true);
    };

    const closeReview = () => {
        setIsReviewModalOpen(false);
    };

    return (
        <div className={`flex flex-col gap-6 md:gap-10 ${formSizeClass}`}>
            {/* Step Indicator */}
            <StepIndicator
                steps={steps}
                currentStep={currentStep}
                isStepValid={isStepValid}
                completedSteps={completedSteps}
                goToStep={goToStep}
            />

            {/* Step Form Component */}
            <div className="w-full bg-white rounded-lg shadow-lg p-6">
                {stepForms.map((form) => {
                    if (currentStep === form.id) {
                        return (
                            <div key={form.id} className="space-y-5">
                                <h1 className="lg:hidden text-darkBlue text-2xl text-center font-semibold">
                                    <span className="mr-2">{`${currentStep}.`}</span>
                                    {form.name}
                                </h1>
                                <div className="">{form.component}</div>
                            </div>
                        );
                    }
                })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-5">
                {currentStep !== 1 && (
                    <button
                        onClick={goToPreviousStep}
                        className="w-full py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300"
                    >
                        Previous
                    </button>
                )}

                {currentStep !== steps.length && (
                    <button
                        onClick={goToNextStep}
                        className={`w-full py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent`}
                        disabled={!isFormValid()}
                    >
                        Next
                    </button>
                )}

                {currentStep === steps.length && (
                    <button
                        onClick={submitHandler}
                        className="w-full py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300 disabled:hover:text-lightGreen disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent"
                        disabled={!isFormValid(formData, [])}
                    >
                        Submit
                    </button>
                )}
            </div>

            {/* Review Modal */}
            {/* <Modal
                isOpen={isReviewModalOpen}
                onClose={closeReview}
                maxWidth="w-full max-w-5xl"
            >
                <div className="">Review</div>
                <ReviewForm
                    formData={formData}
                    onSubmit={submitHandler}
                    onClose={closeReview}
                    onEdit={closeReview}
                />
            </Modal> */}
        </div>
    );
};

export default MultiStepForm;
