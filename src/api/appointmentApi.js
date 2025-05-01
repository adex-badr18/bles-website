import { objectToFormData } from "../pages/utils";
import api from "./axiosInstance";

// Fetch a list of appointments (Paginated)
export const fetchAppointments = async (page = 1, searchParams) => {
    const response = await api.get(`/appointments?page=${page}`, {
        params: searchParams,
    });
    return response;
};

// Search for appointments based on search terms
export const searchAppointments = async (searchParams) => {
    const response = await api.get(`/appointments/search`, {
        params: searchParams,
    });

    return response;
};

// Fetch a appointment by ID
export const getAppointmentById = async (appointmentId) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/appointments/${appointmentId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
    });
    return response.data;
};

// Toggle appointment status
export const toggleAppointmentStatus = async ({ appointmentId, payload }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
    };

    const response = await api.post(
        `/appointments/status/${appointmentId}`,
        objectToFormData(payload),
        options
    );

    return response.data;
};

// Fetch a appointment by ID
export const fetchBookedAppointments = async () => {
    const response = await api.get(`/appointments/slots`);
    return response.data;
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
    const response = await api.post("/appointments", appointmentData, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log("Response", response);
    return response.data;
};

// Update a appointment by ID
export const updateAppointment = async (payload) => {
    console.log("Appointment Payload", payload)
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.put(
        `/appointments/update`,
        objectToFormData(payload),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        }
    );
    console.log("Response Data In API:", response.data)
    return response.data;
};
