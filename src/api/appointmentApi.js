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
export const fetchAppointmentById = async (appointmentId) => {
    const response = await api.get(`/appointments/${appointmentId}`);
    return response;
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
    const response = await api.post("/appointments", appointmentData, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log("Response", response)
    return response;
};

// Update a appointment by ID
export const updateAppointment = async (id) => {
    const response = await api.put(`/appointments/${id}`);
    return response;
};
