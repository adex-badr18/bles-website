export const convertToUSDateTime = (isoString, includeTime) => {
    const date = new Date(isoString);
    return includeTime
        ? date.toLocaleString("en-US", {
              timeZone: "America/New_York", // General US Eastern Time (ET)
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
    const date = new Date(dateTimeString);
    return date.toISOString();
};
