import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../../../components/TextField";
import SubmitButton from "../../../../components/SubmitButton";
import Modal from "../../../../components/Modal";

import { LuShieldCheck } from "react-icons/lu";

const SecurityTab = ({ formData, onChange }) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

    const returnHome = () => {
        setIsSubmitModalOpen(false);
        navigate("/admin/dashboard");
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitModalOpen(true);
            setIsSubmitting(false);
        }, 4000);
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

                    <SubmitButton
                        submitText="Update Password"
                        loadingText="Updating..."
                        onSubmit={submitHandler}
                        isSubmitting={isSubmitting}
                        xtraClass="self-end w-auto"
                    />
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
        </div>
    );
};

export default SecurityTab;
