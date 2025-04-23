import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import {
    fetchPatients,
    fetchPatientById,
    fetchBasicPatientById,
    createPatient,
    updatePatient,
    searchPatients,
    uploadFile,
    registerPatient,
    createForm,
} from "../api/patientApi";

// Fetch list of patients
export const useFetchPatients = (page = 1, searchParams) => {
    return useQuery({
        queryKey: ["patients", page, searchParams],
        queryFn: () => fetchPatients(page, searchParams),
        placeholderData: keepPreviousData,
        staleTime: 5 * 1000 * 60, // Cache data for 5 minutes
        retry: 2, // retry failed request twice
        enabled: Object.keys(searchParams).length > 0, // // Runs query only when searchTerm exists
    });
};

// Search patients based on search terms
export const useSearchPatients = (searchParams) => {
    return useQuery({
        queryKey: ["searchPatients", searchParams],
        queryFn: () => searchPatients(searchParams),
        enabled: Object.keys(searchParams).length > 0, // Runs query only when searchTerm exists
    });
};

// Fetch a patient by ID
export const useFetchPatient = (id, options = {}) => {
    return useQuery({
        queryKey: ["patients", id],
        queryFn: () => fetchPatientById(id),
        enabled: !!id, // Ensures the query runs only when id is avaialble
        ...options,
    });
};

// Fetch a basic patient by ID
export const useFetchBasicPatient = (id) => {
    return useQuery({
        queryKey: ["patients", id],
        queryFn: () => fetchBasicPatientById(id),
        enabled: false, // Disables automatic fetch
    });
};

// Upload patient file
export const useRegisterPatient = ({
    handleFormChange,
    section,
    field,
    showToast,
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: registerPatient,
        onSuccess: (response) => {
            handleFormChange(section, field, response.data.patientId);
            queryClient.invalidateQueries(["patients"]);
            console.log(response);
        },
        onError: (error) => {
            // console.error("Error creating patient", error);
            showToast({
                message:
                    `${error?.message}` ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Create a new patient record (Optimistic UI Update)
export const useCreatePatient = ({ openModal, showToast }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPatient,
        onSuccess: (response) => {
            openModal(response.data);
            queryClient.invalidateQueries(["patients"]);
        },
        onError: (error) => {
            showToast({
                message:
                    `${error?.message}` ||
                    error ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Update a patient
export const useUpdatePatient = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updatedData }) => updatePatient(id, updatedData),
        onMutate: async ({ id, updatedData }) => {
            await queryClient.cancelQueries(["patient", id]);

            const previousPatient = queryClient.getQueryData(["patient", id]);

            queryClient.setQueryData(["patient", id], (prev) => ({
                ...prev,
                ...updatedData,
            }));

            return { previousPatient };
        },
        onError: (error, variables, context) => {
            if (context?.previousPatient) {
                queryClient.setQueryData(
                    ["patient", variables.id],
                    context.previousPatient
                );
            }
        },
        onSuccess: (updatedPatient) => {
            queryClient.invalidateQueries(["patients"]); // Refresh patient list
            queryClient.invalidateQueries(["patient", updatedPatient.id]); // Refresh updated patient
        },
    });
};

// Upload patient file
export const useUploadFile = ({
    handleFormChange,
    section,
    field,
    showToast,
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: uploadFile,
        onSuccess: (response) => {
            handleFormChange(section, field, response.data.fileUrl);
            queryClient.invalidateQueries(["patients"]);
        },
        onError: (error) => {
            showToast({
                message:
                    `${error?.message}` ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Upload patient file
export const useCreateForm = (options = {}) => {
    return useMutation({
        mutationFn: createForm,
        ...options,
    });
};
