export const formatToCamelCase = (str) => {
    return `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`.replace(" ", "");
};

export const clearObjectValues = (obj) => {
    // Iterate through each key in the object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Check if the value is an object
            if (
                typeof obj[key] === "object" &&
                obj[key] !== null &&
                !Array.isArray(obj[key])
            ) {
                // Recursively clear nested objects
                clearObjectValues(obj[key]);
            } else if (Array.isArray(obj[key])) {
                // Clear arrays by setting them to empty
                obj[key] = [];
            } else {
                // Clear primitive values
                obj[key] = "";
            }
        }
    }
    // return obj;
};

export const formatCamelCase = (text) => {
    if (!text) return "";

    // Add space between the words
    const spacedText = text.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Split text into words
    const words = spacedText.split(" ");

    // Capitalize each word
    const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    return capitalizedWords.join(" ");
};

// Handle form element change
export const handleFormElementChange = (section, fieldPath, value) => {
    setFormData((prev) => {
        const keys = fieldPath.split(".");

        const updateNestedField = (obj, keys, value) => {
            if (keys.length === 1) {
                return {
                    ...obj,
                    [keys[0]]: value,
                };
            }

            return {
                ...obj,
                [keys[0]]: updateNestedField(
                    obj[keys[0]],
                    keys.slice(1),
                    value
                ),
            };
        };

        return {
            ...prev,
            [section]: updateNestedField(prev[section], keys, value),
        };
    });
};
