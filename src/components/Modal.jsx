import { MdClose } from "react-icons/md";

const Modal = ({
    isOpen,
    onClose,
    maxWidth = "w-full max-w-5xl",
    children,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="my-6">{children}</div>
        </div>
    );
};

export default Modal;
