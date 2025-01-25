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
