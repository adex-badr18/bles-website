import React from "react";
import Modal from "../../../../components/Modal";
import { LuShieldCheck } from "react-icons/lu";

const SubmitSuccessModal = ({ isSubmitModalOpen, returnHome }) => {
    return (
        <Modal isOpen={isSubmitModalOpen}>
            <div className="w-full max-w-xl p-4 rounded-lg bg-white text-deepGrey relative">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <LuShieldCheck className="text-5xl text-lightGreen" />

                    <div className="flex flex-col items-center">
                        <h3 className="text-lg text-center font-bold mb-5">
                            Appointment Updated!
                        </h3>

                        <div className="space-y-2 text-center text-deepGrey">
                            <p className="">
                                Appointment information has been successfully
                                updated.
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
    );
};

export default SubmitSuccessModal;
