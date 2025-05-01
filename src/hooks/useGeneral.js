import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPaginatedData } from "../api/generalApi";
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
