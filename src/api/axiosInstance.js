import axios from "axios";

const API_BASEURL = import.meta.env.VITE_API_BASEURL;

const api = axios.create({
    baseURL: API_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor: Attach Authorization Token if available
api.interceptors.request.use(
    (config) => {
        const token = JSON.parse(sessionStorage.getItem("user"));

        if (token && config.requiresAuth !== false) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Global error handling interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorObj =
            error.response?.data ||
            error.message ||
            "An error occurred. Please try again later.";
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(errorObj);
    }
);

export default api;
