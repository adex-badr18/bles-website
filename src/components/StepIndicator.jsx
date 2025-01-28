import { IoCheckmarkDoneSharp } from "react-icons/io5";

const StepIndicator = ({ steps, currentStep, goToStep, completedSteps }) => {
    return (
        <div className="flex items-center gap-4 lg:gap-0 rounded divide-x">
            {steps.map((step, index) => {
                const isCompleted = completedSteps.includes(index + 1);
                const isCurrent = index + 1 === currentStep;

                return (
                    <button
                        key={index}
                        className={`flex-1 flex items-center justify-center gap-1 py-2 px-[2px] sm:px-2 md:px-4 text-xs sm:text-sm md:text-base capitalize text-nowrap ${
                            isCurrent || isCompleted
                                ? "bg-lightGreen text-white"
                                : "bg-lightGray text-grey"
                        } ${isCurrent && "font-bold"} ${
                            index + 1 === 1 ? "rounded-s" : "rounded-none"
                        } ${index + 1 === steps.length ? "rounded-e" : ""}`}
                        onClick={() => goToStep(index + 1)}
                    >
                        <span className="hidden lg:block">{step}</span>
                        {isCompleted && (
                            <IoCheckmarkDoneSharp className="hidden lg:block lg:text-sm" />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default StepIndicator;

// export const StepInd = () => {
//     return (
//         <div key={index} className="flex items-center w-full">
//             <div className="flex flex-row gap-5">
//                 <div className="flex flex-col items-center">
//                     {/* {currentStep === 0 && (
//                                             <div
//                                                 className={`flex-1 w-2 min-h-4 rounded-t-full -my-[1px] z-0 ${
//                                                     index < currentStep
//                                                         ? "bg-vividRed"
//                                                         : "bg-lightGrey"
//                                                 }`}
//                                             ></div>
//                                         )} */}
//                     <button
//                         className={`w-5 h-5 rounded-full flex items-center justify-center z-10 ${
//                             index <= currentStep
//                                 ? "bg-vividRed text-white"
//                                 : "bg-lightGrey text-darkBlue"
//                         }`}
//                     >
//                         {/* {index + 1} */}
//                     </button>
//                     {index < steps.length - 1 && (
//                         <div
//                             className={`flex-1 w-2 min-h-10 -my-[1px] z-0 ${
//                                 index < currentStep
//                                     ? "bg-vividRed"
//                                     : "bg-lightGrey"
//                             }`}
//                         ></div>
//                     )}
//                     {/* {index === steps.length - 1 && (
//                                             <div
//                                                 className={`flex-1 w-2 min-h-4 rounded-b-full -my-[1px] z-0 ${
//                                                     index < currentStep
//                                                         ? "bg-vividRed"
//                                                         : "bg-lightGrey"
//                                                 }`}
//                                             ></div>
//                                         )} */}
//                 </div>
//                 <span className={``}>{step}</span>
//             </div>
//         </div>
//     );
// };
