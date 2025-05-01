export const convertToUSDateTime = (isoString, includeTime) => {
    const date = new Date(isoString);
    return includeTime
        ? date.toLocaleString("en-US", {
              //   timeZone: "America/New_York", // General US Eastern Time (ET)
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
          })
        : date.toLocaleString("en-US", {
              timeZone: "America/New_York", // General US Eastern Time (ET)
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
          });
};

export const convertToISO = (dateTimeString) => {
    if (!dateTimeString) {
        return;
    }

    const date = new Date(dateTimeString);
    return date.toISOString();
};

// Convert camelCase or PascalCase texts to readable string
export const formatTitle = (str) => {
    return str
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase())
        .trim();
};

export const getFormattedKeyValues = (data) => {
    if (!data || data.length === 0) {
        return [];
    }

    return data.map((obj) => {
        return Object.entries(obj).map(([key, value]) => {
            if (key === "id") {
                return;
            }
            const formattedKey = formatTitle(key);
            return { key: formattedKey, value };
        });
    });
};

export const isAllEmptyExceptPatientId = (obj) => {
    return Object.entries(obj).every(([key, value]) => {
        if (key === "patientId") {
            return true;
        }
        
        return value === "" || value === null || value === undefined;
    });
};

export const isFormEmpty = (reqBody) => {
    const dataObj = reqBody.data;

    return Object.values(dataObj).every(
        (value) => value === "" || value === null
    );
};