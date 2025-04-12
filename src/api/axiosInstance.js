import axios from "axios";

const API_BASEURL = import.meta.env.VITE_API_BASEURL;

const api = axios.create({
    baseURL: API_BASEURL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

// Request Interceptor: Attach Authorization Token if available
// api.interceptors.request.use(
//     (config) => {
//         const token = JSON.parse(sessionStorage.getItem("user"));
//          console.log("Token: ", token)
//         if (token && config.requiresAuth) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => {
//         console.error(error);
//         return Promise.reject(error);
//     }
// );

// Request interceptor: Attach content-type
// api.interceptors.request.use((config) => {
//     config.headers["Content-Type"] = config.contentType || "application/json";
// });

// Global error handling interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error Value", error);
        const errorObj =
            error.response?.data ||
            error.message ||
            error ||
            "An error occurred. Please try again later.";
        console.error(
            "API Error:",
            error.response?.data || error.message || error
        );
        return Promise.reject(errorObj);
    }
);

export default api;
