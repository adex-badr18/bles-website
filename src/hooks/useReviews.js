import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import {
    fetchReviews,
    fetchReviewById,
    createReview,
    updateReview,
    searchReviews,
} from "../api/reviewApi";

// Fetch list of reviews
export const useFetchReviews = (page = 1, searchParams) => {
    return useQuery({
        queryKey: ["reviews", page, searchParams],
        queryFn: () => fetchReviews(page, searchParams),
        placeholderData: keepPreviousData,
        staleTime: 5 * 1000 * 60, // Cache data for 5 minutes
        retry: 2, // retry failed request twice
        enabled: Object.keys(searchParams).length > 0, // // Runs query only when searchTerm exists
    });
};

// Search reviews based on search terms
export const useSearchReviews = (searchParams) => {
    return useQuery({
        queryKey: ["searchReviews", searchParams],
        queryFn: () => searchReviews(searchParams),
        enabled: Object.keys(searchParams).length > 0, // Runs query only when searchTerm exists
    });
};

// Fetch a review by ID
export const useFetchReview = (id) => {
    return useQuery({
        queryKey: ["review", id],
        queryFn: () => fetchReviewById(id),
        enabled: !!id, // Ensures the query runs only when id is avaialble
    });
};

// Create a new review (Optimistic UI Update)
export const useCreateReview = ({ openModal, showToast }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createReview,
        onSuccess: async (response) => {
            console.log("OnSuccess:", response?.data)
            openModal(response.data);
            queryClient.invalidateQueries(["reviews"]);
        },
        onError: async (error, variables, context) => {
            showToast({
                message:
                    error?.message ||
                    error ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Update a review
export const useUpdateReview = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updatedData }) => updateReview(id, updatedData),
        onMutate: async ({ id, updatedData }) => {
            await queryClient.cancelQueries(["review", id]);

            const previousReview = queryClient.getQueryData(["review", id]);

            queryClient.setQueryData(["review", id], (prev) => ({
                ...prev,
                ...updatedData,
            }));

            return { previousReview };
        },
        onError: (error, variables, context) => {
            if (context?.previousReview) {
                queryClient.setQueryData(
                    ["review", variables.id],
                    context.previousReview
                );
            }
        },
        onSuccess: (updatedReview) => {
            queryClient.invalidateQueries(["reviews"]); // Refresh review list
            queryClient.invalidateQueries(["review", updatedReview.id]); // Refresh updated review
        },
    });
};
