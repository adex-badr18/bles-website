import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./pages/admin/components/auth/AuthProvider.jsx";
import { ToastProvider } from "./components/ToastContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <ToastProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ToastProvider>
        </AuthProvider>
    </StrictMode>
);
