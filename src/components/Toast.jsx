import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const toastVariants = {
    success: {
        container: "bg-green-200 text-lightGreen",
        progress: "bg-lightGreen",
    },
    error: { container: "bg-red-200 text-vividRed", progress: "bg-vividRed" },
    warning: {
        container: "bg-yellow-200 text-yellow-600",
        progress: "bg-yellow-600",
    },
    info: { container: "bg-blue-200 text-blue-600", progress: "bg-blue-600" },
};

const Toast = ({ toast, removeToast }) => {
    const { id, message, type, duration } = toast;
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) =>
                prev > 0 ? prev - 100 / (duration / 100) : 0
            );
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [duration]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`relative w-full p-4 rounded-lg shadow-lg ${toastVariants[type].container}`}
        >
            <button
                className="absolute top-0 right-0 p-1 text-xl text-darkBlue"
                onClick={() => removeToast(id)}
            >
                <MdClose />
            </button>
            <span>{message}</span>

            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-1 ${toastVariants[type].progress} rounded-lg`}
                style={{ width: `${progress}%` }}
            />
        </motion.div>
    );
};

export default Toast;
