import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPaginatedData, getAdminProfile, updateAdminProfile } from "../api/generalApi";
import { useAuth } from "../pages/admin/components/auth/AuthProvider";
import { useToast } from "../components/ToastContext";
import { loginUser, getDashboardData } from "../api/generalApi";

export const usePaginatedList = ({ queryKey, endpoint, page, payload }) => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    return useQuery({
        queryKey: [...queryKey, page, payload], // payload affects cache keys too
        queryFn: () =>
            fetchPaginatedData({
                endpoint,
                pageParam: page,
                payload,
            }),
        keepPreviousData: true,
        staleTime: 5 * 60 * 1000,
        retry: 2,
        onSuccess: (response) => {
            const { data } = response;
            if (data.currentPage < data.totalPages) {
                queryClient.prefetchQuery({
                    queryKey: [...queryKey, page + 1, payload],
                    queryFn: () =>
                        fetchPaginatedData({
                            endpoint,
                            pageParam: page + 1,
                            payload,
                        }),
                });
            }
        },
        onError: (error) => {
            showToast({
                message:
                    error.message ||
                    `Error loading ${queryKey[0]}. Please try again.`,
                type: "error",
                duration: 5000,
            });
        },
    });
};

export const useLogin = ({ onSuccess }) => {
    const { showToast } = useToast();

    return useMutation({
        mutationFn: loginUser,
        retry: false,
        onSuccess,
        onError: (error) => {
            showToast({
                message: error?.message || `Authentication failed!`,
                type: "error",
                duration: 5000,
            });
        },
    });
};

export const useGetDashboardData = () => {
    return useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboardData,
        staleTime: 1 * 1000 * 60,
        retry: 2,
    });
};


// Get Admin Profile
export const useGetAdminProfile = (id) => {
    return useQuery({
        queryKey: ["profile", id],
        queryFn: () => getAdminProfile(id),
        enabled: !!id, // Ensures the query runs only when id is avaialble
    });
};

// Update a patient
export const useUpdateAdminProfile = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    return useMutation({
        mutationFn: ({ patientId, payload, endpoint }) =>
            updateRegInfo({payload, endpoint}),
        onMutate: async ({ patientId, payload }) => {
            await queryClient.cancelQueries(["patient", patientId]);

            const previousPatient = queryClient.getQueryData(["patient", patientId]);

            queryClient.setQueryData(["patient", patientId], (prev) => ({
                ...prev,
                ...payload,
            }));

            return { previousPatient };
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

            if (context?.previousPatient) {
                queryClient.setQueryData(
                    ["patient", variables.patientId],
                    context.previousPatient
                );
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("OnSuccess data:", data);
            console.log("OnSuccess variables:", variables);
            console.log("OnSuccess context:", context);

            showToast({
                message: "Patient information updated successfully!",
                type: "success",
                duration: 5000,
            });
            queryClient.invalidateQueries(["patients"]); // Refresh patient list
            queryClient.invalidateQueries([
                "patient",
                data?.patientId,
            ]); // Refresh updated patient

            // Navigate to patient details page after 5secs
            // setTimeout(() => {
            //     navigate(`/admin/patients/${data?.patientId}`)
            // }, 5500);
        },
    });
};