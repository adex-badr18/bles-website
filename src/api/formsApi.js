// Create adhd form
export const createForm = async (formData, endpoint) => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.post(endpoint, formData, options);

    return response;
};
