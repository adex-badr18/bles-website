export const objectToFormData = (
    obj,
    formData = new FormData(),
    parentKey = ""
) => {
    if (!obj || typeof obj !== "object") {
        return formData;
    }

    Object.entries(obj).forEach(([key, value]) => {
        const fieldName = parentKey ? `${parentKey}[${key}]` : key; // Bracket notation for nesting

        if (value instanceof File || value instanceof Blob) {
            // File uploads
            formData.append(fieldName, value);
        } else if (Array.isArray(value)) {
            // If value is an array of strings or objects
            value.forEach((item, index) => {
                if (typeof item === "object" && item !== null) {
                    // Array of objects
                    objectToFormData(item, formData, `${fieldName}[${index}]`);
                } else {
                    // Array of strings
                    formData.append(`${fieldName}[${index}]`, item);
                }
            });
        } else if (typeof value === "object" && value !== null) {
            // recursively handle nested objects
            objectToFormData(value, formData, fieldName);
        } else {
            // simple key-value pair
            formData.append(fieldName, value);
        }
    });

    return formData;
};

export const convertToBoolean = (value) => {
    return value.toLowerCase() === "yes" ? true : false;
};
