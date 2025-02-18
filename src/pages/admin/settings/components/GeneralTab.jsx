import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "../../../../components/TextField";
import FieldItem from "../../../../components/FieldItem";
import SubmitButton from "../../../../components/SubmitButton";
import Modal from "../../../../components/Modal";

import { LuShieldCheck } from "react-icons/lu";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { MdEdit, MdClose } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const GeneralTab = ({ formData, onChange }) => {
    const navigate = useNavigate();
    const [isProfileEditable, setIsProfileEditable] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const returnHome = () => {
        setIsSubmitModalOpen(false);
        navigate("/admin/dashboard");
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsConfirmModalOpen(false);
            setIsSubmitModalOpen(true);
            setIsSubmitting(false);
        }, 4000);
    };

    const handleProfileEdit = (e) => {
        e.preventDefault();

        setIsProfileEditable(true);
    };

    const confirmHandler = (e) => {
        e.preventDefault();

        setIsConfirmModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <form className="space-y-8 divide-y-2 divide-lightGray">
                <div className="space-y-4 md:space-y-8">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                            Admin Profile
                        </h3>

                        <button
                            onClick={handleProfileEdit}
                            className={`bg-lightGreen hover:bg-lighterGreen rounded-lg px-4 md:px-6 py-3 flex items-center justify-center gap-2 divide-x-2 divide-white text-white font-poppins font-semibold text-nowrap transition duration-500`}
                        >
                            <span className="">
                                {isProfileEditable ? "Cancel" : "Edit Profile"}
                            </span>
                            {isProfileEditable ? (
                                <MdClose className="pl-2 text-3xl" />
                            ) : (
                                <MdEdit className="pl-2 text-3xl" />
                            )}
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-6 border border-lightGrey rounded-lg">
                        <RxAvatar className="text-7xl md:text-9xl self-center text-darkBlue" />
                        {isProfileEditable ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <TextField
                                    type="text"
                                    label="First Name"
                                    name="firstName"
                                    placeholder="First Name"
                                    section="profile"
                                    field="firstName"
                                    value={formData.profile.firstName}
                                    handleInputChange={onChange}
                                    autoFocus
                                />

                                <TextField
                                    type="text"
                                    label="Middle Name"
                                    name="middleName"
                                    placeholder="Middle Name"
                                    section="profile"
                                    field="middleName"
                                    value={formData.profile.middleName}
                                    handleInputChange={onChange}
                                />

                                <TextField
                                    type="text"
                                    label="Last Name"
                                    name="lastName"
                                    placeholder="Last Name"
                                    section="profile"
                                    field="lastName"
                                    value={formData.profile.lastName}
                                    handleInputChange={onChange}
                                />

                                <TextField
                                    type="email"
                                    label="Email"
                                    name="email"
                                    placeholder="Email"
                                    section="profile"
                                    field="email"
                                    value={formData.profile.email}
                                    handleInputChange={onChange}
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <FieldItem
                                    label="First Name"
                                    value={formData.profile.firstName}
                                />
                                <FieldItem
                                    label="Middle Name"
                                    value={formData.profile.middleName}
                                />
                                <FieldItem
                                    label="Last Name"
                                    value={formData.profile.lastName}
                                />
                                <FieldItem
                                    label="Email"
                                    value={formData.profile.email}
                                />
                            </div>
                        )}
                        {isProfileEditable && (
                            <button
                                onClick={confirmHandler}
                                className="self-end w-auto bg-lightGreen hover:bg-lighterGreen px-4 py-2 text-white font-medium rounded-lg"
                            >
                                Update Profile
                            </button>
                        )}
                    </div>
                </div>
            </form>

            {/* Submission Response */}
            <Modal isOpen={isSubmitModalOpen}>
                <div className="w-full max-w-xl p-4 rounded-lg bg-white text-deepGrey relative">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <LuShieldCheck className="text-5xl text-lightGreen" />

                        <div className="flex flex-col items-center">
                            <h3 className="text-lg text-center font-bold mb-5">
                                Profile Updated!
                            </h3>

                            <div className="space-y-2 text-center text-deepGrey">
                                <p className="">
                                    Your profile has been successfully updated.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-1">
                            <button
                                className="w-full bg-lightGreen hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                                onClick={returnHome}
                            >
                                Return Home
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Confirm */}
            <Modal isOpen={isConfirmModalOpen}>
                <div className="w-full max-w-xl rounded-lg bg-white text-deepGrey border-t-8 border-t-yellow-600 relative">
                    <div className="flex flex-col divide-y divide-lightGrey">
                        <div className="flex items-center gap-4 md:gap-8 p-4 md:p-6">
                            <BsFillQuestionDiamondFill className="flex-shrink-0 text-4xl md:text-6xl text-yellow-600" />

                            <div className="space-y-2 text-deepGrey">
                                <h3 className="text-lg font-semibold">
                                    Confirm Profile Update
                                </h3>
                                <p className="">
                                    Are you sure you want to save these changes
                                    to your profile?
                                    <span className="block">
                                        Ensure all details are accurate before
                                        proceeding.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-4 p-3 md:p-4">
                            <button
                                className="bg-transparent hover:bg-lightGreen border border-lightGreen px-4 py-[7px] text-lightGreen hover:text-white font-medium tracking-widest rounded-lg transition-colors duration-300"
                                onClick={() => setIsConfirmModalOpen(false)}
                            >
                                Cancel
                            </button>

                            <SubmitButton
                                submitText="Save Changes"
                                loadingText="Saving..."
                                onSubmit={submitHandler}
                                isSubmitting={isSubmitting}
                                xtraClass="self-end w-auto"
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default GeneralTab;
