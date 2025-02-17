import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../../../components/TextField";
import SubmitButton from "../../../../components/SubmitButton";
import Modal from "../../../../components/Modal";

import { LuShieldCheck } from "react-icons/lu";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

const SecurityTab = ({ formData, onChange }) => {
    const navigate = useNavigate();
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

    const confirmHandler = (e) => {
        e.preventDefault();

        setIsConfirmModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <form className="space-y-4 md:space-y-8">
                <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                    Change Password
                </h3>

                <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-6 border border-lightGrey rounded-lg">
                    <TextField
                        type="password"
                        label="Current Password"
                        name="currentPassword"
                        placeholder="Current Password"
                        section="login"
                        field="currentPassword"
                        value={formData.login.currentPassword}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="password"
                        label="New Password"
                        name="newPassword"
                        placeholder="New Password"
                        section="login"
                        field="newPassword"
                        value={formData.login.newPassword}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="password"
                        label="Confirm New Password"
                        name="confirmNewPassword"
                        placeholder="Confirm New Password"
                        section="login"
                        field="confirmNewPassword"
                        value={formData.login.confirmNewPassword}
                        handleInputChange={onChange}
                    />

                    <button
                        onClick={confirmHandler}
                        className="self-end w-auto bg-lightGreen hover:bg-lighterGreen px-4 py-2 text-white font-medium rounded-lg"
                    >
                        Change Password
                    </button>
                </div>
            </form>

            {/* Submission Response */}
            <Modal isOpen={isSubmitModalOpen}>
                <div className="w-full max-w-xl p-4 rounded-lg bg-white text-deepGrey relative">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <LuShieldCheck className="text-5xl text-lightGreen" />

                        <div className="flex flex-col items-center">
                            <h3 className="text-lg text-center font-bold mb-5">
                                Password Changed!
                            </h3>

                            <div className="space-y-2 text-center text-deepGrey">
                                <p className="">
                                    Your password has been successfully changed.
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
                            <BsFillQuestionDiamondFill className="text-4xl md:text-6xl text-yellow-600" />

                            <div className="space-y-2 text-deepGrey">
                                <h3 className="text-lg font-semibold">
                                    Confirm Password Change
                                </h3>
                                <p className="">
                                    Are you sure you want to change your
                                    password?
                                    <span className="block">
                                        You will need to use the new password to
                                        log in next time.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-4 p-3 md:p-4">
                            <button
                                className="bg-transparent hover:bg-lightGreen border border-lightGreen px-4 py-[7px] text-lightGreen hover:text-white font-medium tracking-widest rounded-lg transition-colors duration-300"
                                onClick={() => setIsConfirmModalOpen(true)}
                            >
                                Cancel
                            </button>

                            <SubmitButton
                                submitText="Update"
                                loadingText="Updating..."
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

export default SecurityTab;
