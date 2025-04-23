import api from "./axiosInstance";

// Fetch a list of patients (Paginated)
export const fetchPatients = async (page = 1, searchParams) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/patients?page=${page}`, {
        params: searchParams,
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

// Search for patients based on search terms
export const searchPatients = async (searchParams) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/patients/search`, {
        params: searchParams,
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

    return response;
};

// Fetch a patient by ID
export const fetchPatientById = async (patientId) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/patients/${patientId}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

// Fetch a basic patient info by ID
export const fetchBasicPatientById = async (patientId) => {
    const response = await api.get(`/patients/validate/${patientId}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response?.data;
};

// Create patient record
export const createPatient = async (patientData) => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.post(
        "/patients/forms/register",
        patientData,
        options
    );

    return response;
};

// Create register a new patient
export const registerPatient = async (patientData, test) => {
    console.log(test)
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.post(
        "/patients/register/id",
        patientData,
        options
    );

    return response;
};

// Update a patient by ID
export const updatePatient = async (id) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.put(`/patients/${id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

// Patient File Upload
export const uploadFile = async (payload) => {
    const options = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    const response = await api.post(
        "/file/upload",
        payload,
        options
    );

    return response;
};

// Create patient form
export const createForm = async ({payload, endpoint}) => {
    console.log(endpoint)
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.post(endpoint, payload, options);

    return response;
};