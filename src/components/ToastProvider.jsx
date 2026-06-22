import { useCallback, useMemo, useState } from "react";
import { ToastContext } from "./ToastContext.js";

let nextToastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback((message, type) => {
    const id = nextToastId++;
    setToasts((current) => [...current, { id, message, type }]);
    setTimeout(() => dismiss(id), 3000);
  }, [dismiss]);

  const value = useMemo(() => ({
    success: (message) => show(message, "success"),
    error: (message) => show(message, "error"),
  }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>{toast.message}</div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
