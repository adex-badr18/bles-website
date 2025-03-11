import api from "./axiosInstance";

// Fetch a list of patients (Paginated)
export const fetchPatients = async (page = 1, searchParams) => {
    const response = await api.get(`/patients?page=${page}`, {
        params: searchParams
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
export const fetchPatientById = async (id) => {
    const response = await api.get(`/patients/${id}`);
    return response.data;
};

// Craete a new patient
export const createPatient = async (patientData) => {
    const response = await api.post("/patients", patientData);
    return response.data;
};

// Update a patient by ID
export const updatePatient = async (id) => {
    const response = await api.put(`/patients/${id}`);
    return response.data;
};
