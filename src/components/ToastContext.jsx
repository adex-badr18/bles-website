import { createContext, useContext, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "./Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback(({ message, type, duration = 5000 }) => {
        const id = uuidv4(); // Generate unique id for each toast
        setToasts((prev) => [...prev, { id, message, type, duration }]);

        // Remove toast after duration
        setTimeout(() => {
            removeToast(id);
        }, duration);
    });

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    });

    return (
        <ToastContext.Provider value={{showToast, toasts}}>
            {children}

            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md flex flex-col gap-3">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        toast={toast}
                        removeToast={removeToast}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }

    return context;
};
