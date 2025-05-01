import Modal from "../../../../components/Modal";
import SubmitButton from "../../../../components/SubmitButton";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

const ConfirmStatusUpdateModal = ({
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    handleSubmit,
    isSubmitting,
}) => {
    return (
        <Modal isOpen={isConfirmModalOpen}>
            <div className="w-full max-w-xl rounded-lg bg-white text-deepGrey border-t-8 border-t-yellow-600 relative">
                <div className="flex flex-col divide-y divide-lightGrey">
                    <div className="flex items-center gap-4 md:gap-8 p-4 md:p-6">
                        <BsFillQuestionDiamondFill className="flex-shrink-0 text-4xl md:text-6xl text-yellow-600" />

                        <div className="space-y-2 text-deepGrey">
                            <h3 className="text-lg font-semibold">
                                Confirm Review Status Update
                            </h3>
                            <p className="">
                                Are you sure you want to change the status of
                                this review?
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 p-3 md:p-4">
                        <button
                            className="w-full bg-transparent hover:bg-vividRed border border-vividRed px-4 py-[7px] text-vividRed hover:text-white font-medium tracking-widest rounded-lg transition-colors duration-300"
                            onClick={() => setIsConfirmModalOpen(false)}
                        >
                            Cancel
                        </button>

                        <SubmitButton
                            submitText="Update Status"
                            loadingText="Updating..."
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            xtraClass="self-end"
                            isDisabled={isSubmitting}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmStatusUpdateModal;
