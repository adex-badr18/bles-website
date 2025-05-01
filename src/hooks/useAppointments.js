import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import {
    searchAppointments,
    getAppointmentById,
    fetchAppointments,
    createAppointment,
    updateAppointment,
    fetchBookedAppointments,
} from "../api/appointmentApi";
import { useToast } from "../components/ToastContext";

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
export const useGetAppointment = (appointmentId) => {
    return useQuery({
        queryKey: ["appointment", appointmentId],
        queryFn: () => getAppointmentById(appointmentId),
        enabled: !!appointmentId, // Ensures the query runs only when id is avaialble
        retry: 1,
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
export const useUpdateAppointment = ({
    setIsAppointmentEditable,
    setIsConfirmModalOpen,
}) => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    return useMutation({
        mutationFn: ({ id, payload }) => updateAppointment(payload),
        onMutate: async ({ id, payload }) => {
            await queryClient.cancelQueries(["appointment", id]);

            const previousAppointment = queryClient.getQueryData([
                "appointment",
                id,
            ]);

            queryClient.setQueryData(["appointment", id], (prev) => ({
                ...prev,
                ...payload,
            }));

            return { previousAppointment };
        },
        onError: (error, variables, context) => {
            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });

            if (context?.previousAppointment) {
                queryClient.setQueryData(
                    ["appointment", variables.id],
                    context.previousAppointment
                );
            }
        },
        onSuccess: (updatedAppointment) => {
            setIsAppointmentEditable(false);
            setIsConfirmModalOpen(false);
            console.log("OnSuccess", updatedAppointment)
            showToast({
                message: "Appointment Successfully updated.",
                type: "success",
                duration: 5000,
            });
            queryClient.invalidateQueries(["appointments"]); // Refresh appointment list
            queryClient.invalidateQueries([
                "appointment",
                updatedAppointment.id,
            ]); // Refresh updated appointment
        },
    });
};

// Update a appointment
export const useToggleAppointmentStatus = ({ setIsConfirmModalOpen }) => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    return useMutation({
        mutationFn: ({ appointmentId, payload }) => updateAppointment(appointmentId, payload),
        onMutate: async ({ appointmentId, payload }) => {
            await queryClient.cancelQueries(["appointment", appointmentId]);

            const previousAppointment = queryClient.getQueryData([
                "appointment",
                appointmentId,
            ]);

            queryClient.setQueryData(["appointment", appointmentId], (prev) => ({
                ...prev,
                ...payload,
            }));

            return { previousAppointment };
        },
        onError: (error, variables, context) => {
            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });

            if (context?.previousAppointment) {
                queryClient.setQueryData(
                    ["appointment", variables.id],
                    context.previousAppointment
                );
            }
        },
        onSuccess: (updatedAppointment) => {
            setIsAppointmentEditable(false);
            setIsConfirmModalOpen(false);

            showToast({
                message: "Appointment Successfully updated.",
                type: "success",
                duration: 5000,
            });
            queryClient.invalidateQueries(["appointments"]); // Refresh appointment list
            queryClient.invalidateQueries([
                "appointment",
                updatedAppointment.id,
            ]); // Refresh updated appointment
        },
    });
};
