import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {

    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = "success") => {

        const id = Date.now() + Math.random();

        const newToast = {
            id,
            message,
            type
        };

        setToasts((previous) => [...previous, newToast]);

        setTimeout(() => {
            setToasts((previous) =>
                previous.filter((toast) => toast.id !== id)
            );
        }, 3500);

    };

    const removeToast = (id) => {

        setToasts((previous) =>
            previous.filter((toast) => toast.id !== id)
        );

    };

    return (

        <ToastContext.Provider value={{ showToast }}>

            {children}

            <div className="toast-container">

                {toasts.map((toast) => (

                    <div
                        key={toast.id}
                        className={`toast-message toast-${toast.type}`}
                    >

                        <span>{toast.message}</span>

                        <button
                            onClick={() => removeToast(toast.id)}
                            aria-label="Close notification"
                        >
                            ×
                        </button>

                    </div>

                ))}

            </div>

        </ToastContext.Provider>

    );

}

export function useToast() {

    return useContext(ToastContext);

}