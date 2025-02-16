import axios from "axios";

export const fetchAdminUnavailablePeriods = async () => {
    return [
        {
            date: "2025/02/20",
            times: ["10:00", "11:00", "14:00"], // Times in 24/hour format
        },
        {
            date: "2025/02/21",
            times: ["10:00", "11:00", "14:00"], // Times in 24/hour format
        },
        {
            date: "2025/02/22",
            times: ["10:00", "11:00", "14:00"], // Times in 24/hour format
        },
    ];
};

export const fetchBookedAppointmentsPeriods = async () => {
    return [
        {
            date: "2025/02/20",
            times: ["09:00", "13:00"], // Times in 24/hour format
        },
        {
            date: "2025/02/21",
            times: ["09:00", "13:00"], // Times in 24/hour format
        },
        {
            date: "2025/02/22",
            times: ["09:00", "13:00"], // Times in 24/hour format
        },
    ];
};

export const fetchUSHolidays = async () => {
    try {
        const res = await axios.get(
            `https://date.nager.at/api/v3/publicholidays/${new Date().getFullYear()}/US`
        );

        return res.data.map((holiday) => ({
            date: new Date(holiday.date),
            holidayName: holiday.name,
        }));
    } catch (error) {
        console.error("Error fetching US holidays", error);
        return [];
    }
};
