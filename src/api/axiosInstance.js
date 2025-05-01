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
        console.log("Axios Instance Error", error);

        let errorMessage = "An error occurred. Please try again later.";

        if (error.response) {
            // Server responded with a status outside 2xx

            return Promise.reject(error?.response?.data);
        } else if (error.request) {
            // No response from server
            errorMessage =
                "No response from server. Please check your network.";
            return Promise.reject({
                status: "NO_RESPONSE",
                message: errorMessage,
                orifinal: error,
            });
        } else {
            return Promise.reject({
                status: "REQUEST_SETUP_ERROR",
                message: error?.message || "Request setup error",
                orifinal: error,
            });
        }
    }
);

export default api;
