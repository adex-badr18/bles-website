import axios from "axios";

const API_BASEURL = import.meta.env.VITE_API_BASEURL;

const api = axios.create({
    baseURL: API_BASEURL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

// Global error handling interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorObj =
            error.response?.data ||
            error.message ||
            error ||
            "An error occurred. Please try again later.";
        // console.error(
        //     "API Error:",
        //     error.response?.data || error.message || error
        // );
        return Promise.reject(errorObj);
    }
);

export default api;
