import api from "./axiosInstance";

// Fetch a list of patients (Paginated)
export const fetchPatients = async (page = 1, searchParams) => {
    const response = await api.get(`/patients?page=${page}`, {
        params: searchParams,
    });
    return response.data;
};

// Search for patients based on search terms
export const searchPatients = async (searchParams) => {
    const response = await api.get(`/patients/search`, {
        params: searchParams,
    });

    return response.data;
};

// Fetch a patient by ID
export const fetchPatientById = async (patientId) => {
    const response = await api.get(`/patients/${patientId}`);
    return response.data;
};

// Create a new patient
export const createPatient = async (patientData, requireAuth) => {
    let options = {};

    if (requireAuth) {
        const token = JSON.parse(sessionStorage.getItem("user"));
        options = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };
    } else {
        options = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
    }

    const response = await api.post(
        "/patients/forms/register",
        patientData,
        options
    );

    console.log(response);
    return response.data;
};

// Update a patient by ID
export const updatePatient = async (id) => {
    const response = await api.put(`/patients/${id}`);
    return response.data;
};
