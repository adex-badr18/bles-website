import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchPaginatedData,
    getAdminProfile,
    updateAdminPassword,
    updateAdminProfile,
} from "../api/generalApi";
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
export const useGetAdminProfile = (userId) => {
    return useQuery({
        queryKey: ["profile", userId],
        queryFn: () => getAdminProfile(userId),
        enabled: !!userId, // Ensures the query runs only when id is avaialble
    });
};

// Update admin profile
export const useUpdateAdminProfile = ({returnHome}) => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    return useMutation({
        mutationFn: ({ userId, payload }) =>
            updateAdminProfile(userId, payload),
        onMutate: async ({ userId, payload }) => {
            await queryClient.cancelQueries(["profile", userId]);

            const previousProfile = queryClient.getQueryData([
                "profile",
                userId,
            ]);

            queryClient.setQueryData(["profile", userId], (prev) => ({
                ...prev,
                ...payload,
            }));

            return { previousProfile };
        },
        onError: (error, variables, context) => {
            console.log("OnError data:", data);
            console.log("OnError variables:", variables);
            console.log("OnError context:", context);

            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });

            if (context?.previousProfile) {
                queryClient.setQueryData(
                    ["profile", variables.userId],
                    context.previousProfile
                );
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("OnSuccess data:", data);
            console.log("OnSuccess variables:", variables);
            console.log("OnSuccess context:", context);

            showToast({
                message: "Profile updated successfully!",
                type: "success",
                duration: 5000,
            });

            // Refresh updated profile
            queryClient.invalidateQueries(["profile", data?.id]);

            setTimeout(() => {
                returnHome();
            }, 5000);
        },
    });
};

// Update admin password
export const useUpdateAdminPassword = ({ returnHome }) => {
    const { showToast } = useToast();

    return useMutation({
        mutationFn: ({ userId, payload }) =>
            updateAdminPassword(userId, payload),
        onError: (error, variables, context) => {
            console.log("OnError data:", data);
            console.log("OnError variables:", variables);
            console.log("OnError context:", context);

            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });
        },
        onSuccess: (data, variables, context) => {
            console.log("OnSuccess data:", data);
            console.log("OnSuccess variables:", variables);
            console.log("OnSuccess context:", context);

            showToast({
                message: "Password updated successfully!",
                type: "success",
                duration: 5000,
            });

            setTimeout(() => {
                returnHome();
            }, 5000);
        },
    });
};
