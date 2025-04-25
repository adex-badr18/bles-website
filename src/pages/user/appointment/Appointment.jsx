import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import SectionHeader from "../../../components/SectionHeader";
import StepIndicator from "./components/StepIndicator";
import PersonalInfoForm from "./components/PersonalInfoForm";
import AddressForm from "./components/AddressForm";
import AppointmentForm from "./components/AppointmentForm";
import InsuranceForm from "./components/InsuranceForm";
import Modal from "../../../components/Modal";
import ReviewForm from "./components/ReviewForm";
import { isFormValid } from "./utils";

import { LuShieldCheck } from "react-icons/lu";

import { useToast } from "../../../components/ToastContext";
import {
    useCreateAppointment,
    useFetchBookedAppointments,
} from "../../../hooks/useAppointments";
import { objectToFormData, convertToBoolean } from "../../utils";

const Appointment = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const {
        mutate,
        isPending: isSubmitting,
        error,
        data,
    } = useCreateAppointment({
        openModal: openSuccessModal,
        showToast,
    });
    const [successModalData, setSuccessModalData] = useState({});
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    // const [bookedAppointments, setBookedAppointments] = useState([]);
    // const {
    //     refetch,
    //     isLoading,
    //     isError,
    //     error: bookedAppointmentsError,
    // } = useFetchBookedAppointments();
    const [formData, setFormData] = useState({
        personal: {
            isNew: "",
            verificationStatus: "",
            patientId: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            phone: "",
            email: "",
            address: {
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
        },
        appointment: {
            appointmentType: "",
            service: "",
            appointmentDateTime: "",
            purpose: "",
        },
        insurance: {
            paymentMethod: "",
            insuranceName: "",
            insuranceNumber: "",
        },
    });

    // console.log(formData);
    // console.log(bookedAppointments);

    // Fetch booked appointments
    // useEffect(() => {
    //     const fetchBookedSlots = async () => {
    //         const response = await refetch();

    //         if (response.data) {
    //             setBookedAppointments(response.data.slots);
    //         }
    //     };

    //     fetchBookedSlots();
    // }, []);

    // Scroll to top when the step value changes
    useEffect(() => {
        window.scrollTo({ top: 200, behavior: "smooth" });

        isStepsValid();
    }, [currentStep]);

    useEffect(() => {
        if (formData.insurance.paymentMethod.toLowerCase() === "self pay") {
            handleFormElementChange("insurance", "insuranceName", "");
            handleFormElementChange("insurance", "insuranceNumber", "");
        }

        if (
            formData.insurance.paymentMethod.toLowerCase() ===
                "insurance card" &&
            (!formData.insurance.insuranceName ||
                !formData.insurance.insuranceNumber)
        ) {
            setCompletedSteps((prev) => prev.filter((step) => step !== 3));
        }

        isStepsValid();
    }, [formData.insurance.paymentMethod]);

    const steps = ["Personal", "Appointment", "Insurance"];

    // Function to open modal
    function openSuccessModal(data) {
        setSuccessModalData(data);
        setIsSuccessModalOpen(true);
    }

    // Handle form element change
    function handleFormElementChange(section, fieldPath, value) {
        setFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    }

    const formatToCamelCase = (str) => {
        return `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`.replace(
            " ",
            ""
        );
    };

    const isStepValid = (step = currentStep) => {
        const dataObj = formData[formatToCamelCase(steps[step])];
        const nonRequiredProps = ["id", "verificationStatus", "middleName"];
        const optionalInsuranceFields = ["insuranceName", "insuranceNumber"];

        for (const key in dataObj) {
            const value = dataObj[key];

            if (nonRequiredProps.includes(key)) {
                continue;
            }

            if (optionalInsuranceFields.includes(key)) {
                if (dataObj["paymentMethod"].toLowerCase() === "self pay") {
                    continue;
                }
            }

            if (
                value === null ||
                value === undefined ||
                (typeof value === "string" && value.trim() === "") ||
                (Array.isArray(value) && value.length === 0)
            ) {
                return false;
            }
        }

        for (const key in formData.address) {
            const value = formData.address[key];

            if (!value) {
                return false;
            }
        }

        // for (const key in formData.appointment) {
        //     const value = formData.appointment[key]

        //     if (!value) {
        //         return false
        //     }
        // }

        return true;
    };
    // Step Validation logic
    const isStepsValid = (step = currentStep) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            // "dob",
            "maritalStatus",
            "phone",
            "email",
            "address",
            "patientId",
            "appointmentType",
            "purpose",
            "service",
            "appointmentDateTime",
        ];

        if (step === 0 || step === 1) {
            const dataObj =
                step === 0 ? formData.personal : formData.appointment;

            for (const key in dataObj) {
                const value = dataObj[key];

                if (!requiredFields.includes(key)) {
                    continue;
                }

                if (value !== null && typeof value === "object") {
                    for (const key in value) {
                        const nestedValue = value[key];
                        if (nestedValue === "" || nestedValue === null) {
                            return false;
                        }
                    }
                }

                if (value === "" || value === null || value === undefined) {
                    return false;
                }
            }

            return true;
        }

        if (step === 2) {
            const dataObj = formData.insurance;

            if (!formData.insurance.paymentMethod) {
                return false;
            }

            if (
                formData.insurance.paymentMethod.toLowerCase() ===
                "insurance card"
            ) {
                if (
                    !formData.insurance.insuranceName ||
                    !formData.insurance.insuranceNumber
                ) {
                    return false;
                }
                // for (const key in dataObj) {
                //     const value = dataObj[key];

                //     if (value === "" || value === null || value === undefined) {
                //         return false;
                //     }
                // }
            }

            return true;
        }
    };

    const goToNextStep = () => {
        if (isStepsValid()) {
            setCompletedSteps((prev) => [...prev, currentStep]);

            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        }

        // setCompletedSteps((prev) => [...prev, currentStep]);

        // setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const goToPreviousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const submitHandler = async () => {
        const data = {
            id: "",
            patientId: formData.personal.patientId,
            isNew: convertToBoolean(formData.personal.isNew),
            verificationStatus: formData.personal.verificationStatus,
            firstName: formData.personal.firstName,
            middleName: formData.personal.middleName,
            lastName: formData.personal.lastName,
            gender: formData.personal.gender,
            dob: formData.personal.dob,
            phone: formData.personal.phone,
            email: formData.personal.email,
            address: {
                id: "",
                streetName: formData.personal.address.streetName,
                city: formData.personal.address.city,
                state: formData.personal.address.state,
                zipCode: formData.personal.address.zipCode,
            },
            appointmentType: formData.appointment.appointmentType,
            service: formData.appointment.service,
            appointmentDateTime: formData.appointment.appointmentDateTime,
            purpose: formData.appointment.purpose,
            paymentMethod: formData.insurance.paymentMethod,
            insuranceName: formData.insurance.insuranceName,
            insuranceNumber: formData.insurance.insuranceNumber,
        };

        const payload = objectToFormData(data);

        // TODO: book an appointment
        mutate(payload);
    };

    const reviewHandler = () => {
        setCompletedSteps((prev) => [...prev, currentStep]);
        setIsReviewModalOpen(true);
    };

    const closeReview = () => {
        setIsReviewModalOpen(false);
    };

    const goToStep = (step) => {
        if (isStepsValid(step)) {
            setCompletedSteps((prev) => [...prev, step]);
            setCurrentStep(step);
        }

        // if (!isStepValid(step)) return;
    };

    const editHandler = () => {
        setIsReviewModalOpen(false);
    };

    const returnHome = () => {
        setIsSubmitModalOpen(false);
        navigate("/");
    };

    return (
        <section className="pt-8 md:pt-20">
            <SectionHeader
                bgTitle="Schedule"
                primaryTitle="Schedule An Appointment"
                secondaryTitle="Book Now"
                titleAlignment="center"
                bgTitleOnly={false}
            />
            <div className="bg-darkBlue py-8">
                <div className="wrapper px-4 2xl:px-0 space-y-8 md:space-y-12">
                    <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto">
                        {/* Step Indicator */}
                        <StepIndicator
                            steps={steps}
                            currentStep={currentStep}
                            isStepValid={isStepsValid}
                            completedSteps={completedSteps}
                            goToStep={goToStep}
                        />

                        {/* Panels */}
                        <div className="w-full bg-white rounded-lg shadow-lg p-6">
                            {currentStep === 0 && (
                                <PersonalInfoForm
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleInputChange={handleFormElementChange}
                                />
                            )}
                            {currentStep === 1 && (
                                <AppointmentForm
                                    formData={formData}
                                    handleInputChange={handleFormElementChange}
                                />
                            )}
                            {currentStep === 2 && (
                                <InsuranceForm
                                    formData={formData}
                                    handleInputChange={handleFormElementChange}
                                />
                            )}
                        </div>

                        <div className="flex justify-between items-center gap-5">
                            {currentStep !== 0 && (
                                <button
                                    onClick={goToPreviousStep}
                                    className="w-full py-2 px-4 font-medium text-center border border-lightGreen rounded-lg text-white hover:bg-lightGreen transition duration-300"
                                >
                                    Previous
                                </button>
                            )}

                            {currentStep !== steps.length - 1 && (
                                <button
                                    onClick={goToNextStep}
                                    className={`w-full py-2 px-4 font-medium text-center border border-lightGreen rounded-lg text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent`}
                                    disabled={!isStepsValid()}
                                >
                                    Next
                                </button>
                            )}

                            {currentStep === steps.length - 1 && (
                                <button
                                    onClick={reviewHandler}
                                    className="w-full py-2 px-4 font-medium text-center border border-lightGreen rounded-lg text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent"
                                    disabled={!isStepsValid()}
                                >
                                    Review
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Modal */}
            <Modal
                isOpen={isReviewModalOpen}
                onClose={closeReview}
                maxWidth="w-full max-w-2xl"
            >
                {/* <div className="">Placeholder</div> */}
                <ReviewForm
                    formData={formData}
                    onSubmit={submitHandler}
                    onClose={closeReview}
                    onEdit={editHandler}
                    isSubmitting={isSubmitting}
                />
            </Modal>

            {/* Submission Response */}
            <Modal isOpen={isSubmitModalOpen}>
                <div className="w-full max-w-xl p-4 rounded-lg bg-white text-deepGrey relative">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <LuShieldCheck className="text-5xl text-lightGreen" />

                        <div className="flex flex-col items-center">
                            <h3 className="text-lg text-center font-bold mb-3">
                                Appointment Confirmed!
                            </h3>

                            {(successModalData.message ||
                                successModalData.success) && (
                                <p className="font-semibold mb-5">
                                    {successModalData?.message ||
                                        successModalData?.success}
                                </p>
                            )}

                            <div className="text-center text-deepGrey">
                                <p className="">
                                    Your appointment has been successfully
                                    booked.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-1">
                            <button
                                className="w-full bg-lightGreen hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                                onClick={returnHome}
                            >
                                Return to Home
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default Appointment;
