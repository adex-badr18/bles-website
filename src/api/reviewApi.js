import api from "./axiosInstance";

// Fetch a list of reviews (Paginated)
export const fetchReviews = async (page = 1, searchParams) => {
    const response = await api.get(`/reviews?page=${page}`, {
        params: searchParams,
    });
    return response.data;
};

// Search for reviews based on search terms
export const searchReviews = async (searchParams) => {
    const response = await api.get(`/reviews/search`, {
        params: searchParams,
    });

    return response.data;
};

// Fetch a review by ID
export const fetchReviewById = async (reviewId) => {
    const response = await api.get(`/reviews/${reviewId}`);
    return response.data;
};

// Create a new review
export const createReview = async (reviewData) => {
    const response = await api.post("/reviews", reviewData, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log("Response", response)
    return response.data;
};

// Update a review by ID
export const updateReview = async (id) => {
    const response = await api.put(`/reviews/${id}`);
    return response.data;
};
