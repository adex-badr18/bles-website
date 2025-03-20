import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import {
    fetchPatients,
    fetchPatientById,
    createPatient,
    updatePatient,
    searchPatients,
} from "../api/patientApi";

// Fetch list of patients
export const usePatients = (page = 1, searchParams) => {
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
export const usePatient = (id) => {
    return useQuery({
        queryKey: ["patient", id],
        queryFn: () => fetchPatientById(id),
        enabled: !!id, // Ensures the query runs only when id is avaialble
    });
};

// Create a new patient (Optimistic UI Update)
export const useCreatePatient = ({ openModal, showToast }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPatient,
        onSuccess: (newPatient) => {
            openModal(newPatient);
            queryClient.invalidateQueries(["patients"]);
        },
        onError: (error) => {
            console.error("Error creating patient", error);
            showToast({
                message:
                    error?.message || "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Update a patient
export const useUpdatepatient = () => {
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
