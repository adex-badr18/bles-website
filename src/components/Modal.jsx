import { MdClose } from "react-icons/md";

const Modal = ({
    isOpen,
    onClose,
    maxWidth = "w-full max-w-2xl",
    children,
}) => {
    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
        >
            <div className={`${maxWidth} mx-auto`}>
                <div className={`my-6`}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
