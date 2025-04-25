import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import {
    searchAppointments,
    fetchAppointmentById,
    fetchAppointments,
    createAppointment,
    updateAppointment,
    fetchBookedAppointments
} from "../api/appointmentApi";

// Fetch list of appointments
export const useFetchAppointments = (page = 1, searchParams) => {
    return useQuery({
        queryKey: ["appointments", page, searchParams],
        queryFn: () => fetchAppointments(page, searchParams),
        placeholderData: keepPreviousData,
        staleTime: 5 * 1000 * 60, // Cache data for 5 minutes
        retry: 2, // retry failed request twice
        enabled: Object.keys(searchParams).length > 0, // // Runs query only when searchTerm exists
    });
};

// Search appointments based on search terms
export const useSearchAppointments = (searchParams) => {
    return useQuery({
        queryKey: ["searchAppointments", searchParams],
        queryFn: () => searchAppointments(searchParams),
        enabled: Object.keys(searchParams).length > 0, // Runs query only when searchTerm exists
    });
};

// Fetch a appointment by ID
export const useFetchAppointment = (id, options = {}) => {
    return useQuery({
        queryKey: ["appointments", id],
        queryFn: () => fetchAppointmentById(id),
        enabled: !!id, // Ensures the query runs only when id is avaialble
        ...options,
    });
};

// Fetch a basic appointment by ID
export const useFetchBookedAppointments = () => {
    return useQuery({
        queryKey: ["bookedAppointments"],
        queryFn: () => fetchBookedAppointments(),
        enabled: true, // enables automatic fetch
        retry: 3,
    });
};

// Create a new appointment record (Optimistic UI Update)
export const useCreateAppointment = ({ openModal, showToast }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createAppointment,
        onSuccess: (response) => {
            openModal(response.data);
            queryClient.invalidateQueries(["appointments"]);
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

// Update a appointment
export const useUpdateAppointment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updatedData }) => updateAppointment(id, updatedData),
        onMutate: async ({ id, updatedData }) => {
            await queryClient.cancelQueries(["appointment", id]);

            const previousAppointment = queryClient.getQueryData(["appointment", id]);

            queryClient.setQueryData(["appointment", id], (prev) => ({
                ...prev,
                ...updatedData,
            }));

            return { previousAppointment };
        },
        onError: (error, variables, context) => {
            if (context?.previousAppointment) {
                queryClient.setQueryData(
                    ["appointment", variables.id],
                    context.previousAppointment
                );
            }
        },
        onSuccess: (updatedAppointment) => {
            queryClient.invalidateQueries(["appointments"]); // Refresh appointment list
            queryClient.invalidateQueries(["appointment", updatedAppointment.id]); // Refresh updated appointment
        },
    });
};
