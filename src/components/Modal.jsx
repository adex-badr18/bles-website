import { MdClose } from "react-icons/md";

const Modal = ({
    isOpen,
    onClose,
    maxWidth = "w-full max-w-2xl",
    children,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto px-4 py-6">
            <div className={`${maxWidth} w-full mx-auto max-h-screen`}>
                <div className="bg-transparent rounded-md shadow-l overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
        // <div
        //     className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
        // >
        //     <div className={`${maxWidth} mx-auto`}>
        //         <div className={`my-6`}>{children}</div>
        //     </div>
        // </div>
    );
};

export default Modal;
