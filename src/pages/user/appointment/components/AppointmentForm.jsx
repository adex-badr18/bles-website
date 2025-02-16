import { useEffect, useMemo, useState } from "react";

import Dropdown from "../../../../components/Dropdown";
import { appointmentTypes, services } from "../data";
import {
    fetchAdminUnavailablePeriods,
    fetchBookedAppointmentsPeriods,
    fetchUSHolidays,
} from "../api";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = ({ formData, handleInputChange }) => {
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [holidays, setHolidays] = useState([]);
    const [excludedTimes, setExcludedTimes] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const [adminPeriods, bookedPeriods, holidays] = await Promise.all([
                fetchAdminUnavailablePeriods(),
                fetchBookedAppointmentsPeriods(),
                fetchUSHolidays(),
            ]);

            // Create a map of dates to excluded times
            const excludedDatesTimesMap = {};

            const processExclusions = (list) => {
                list.forEach((period) => {
                    const dateKey = new Date(period.date).toLocaleDateString();
                    if (!excludedDatesTimesMap[dateKey])
                        excludedDatesTimesMap[dateKey] = [];
                    excludedDatesTimesMap[dateKey].push(...period.times);
                });
            };

            // Map all admin-set times
            processExclusions(adminPeriods);

            // Map all booked appointment times
            processExclusions(bookedPeriods);

            setExcludedTimes(excludedDatesTimesMap);
            setHolidays(holidays);
        };

        fetchData();
    }, []);

    // Function to filter dates
    const isDateExcluded = (date) => {
        // Exclude weekends
        const day = new Date(date).getDay();
        return day !== 0 && day !== 6;
    };

    // Function to filter times
    const isTimeExcluded = (time) => {
        if (!selectedDateTime) return false;
        const dateKey = selectedDateTime.toLocaleDateString();
        const timeString = time.toTimeString().substring(0, 5);

        return !excludedTimes[dateKey]?.includes(timeString);
    };

    // const getMinTime = useMemo(() => {
    //     const today = new Date();
    //     if (!selectedDateTime) return today;

    //     const selectedDate = new Date(selectedDateTime);

    //     const allTimes = Array.from({ length: 24 }, (_, i) =>
    //         selectedDateTime.setHours(i, 0, 0, 0)
    //     );

    //     const allowedTimes = allTimes
    //         .filter((time) => {
    //             const hour = new Date(time).getHours();
    //             return hour >= 9 && hour <= 16;
    //         })
    //         .map((time) => new Date(time));

    //     console.log(allowedTimes);
    // });

    useEffect(() => {
        handleInputChange(
            "appointment",
            "appointmentDateTime",
            selectedDateTime
        );
    }, [selectedDateTime]);

    const handleDateTimeChange = (date) => {
        setSelectedDateTime(date);
    };

    return (
        <div className="space-y-6">
            <form className="space-y-8 divide-y-2 divide-lightGray">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                        What are your appointment requirements?
                    </h3>

                    <div className="space-y-1">
                        <label
                            htmlFor="appointmentType"
                            className="block text-grey"
                        >
                            Appointment Type:
                        </label>
                        <Dropdown
                            id="appointmentType"
                            name="appointmentType"
                            selectClass=""
                            title="-- Select an option --"
                            data={appointmentTypes}
                            value={formData.appointment.appointmentType}
                            onChange={(e) =>
                                handleInputChange(
                                    "appointment",
                                    "appointmentType",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label
                            htmlFor="appointmentType"
                            className="block text-grey"
                        >
                            Purpose:
                        </label>
                        <Dropdown
                            id="service"
                            name="service"
                            selectClass=""
                            title="-- Select an option --"
                            data={services}
                            value={formData.appointment.service}
                            onChange={(e) =>
                                handleInputChange(
                                    "appointment",
                                    "service",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label
                            htmlFor="appointmentDateTime"
                            className="block text-grey"
                        >
                            Select appointment date & time
                        </label>
                        <DatePicker
                            id="appointmentDateTime"
                            name="appointmentDateTime"
                            selected={selectedDateTime}
                            onChange={handleDateTimeChange}
                            showTimeSelect
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            dateFormat={`MM/dd/yyyy HH:mm`}
                            placeholderText="MM/dd/yyyy HH:mm"
                            className="input"
                            holidays={holidays}
                            filterDate={isDateExcluded}
                            filterTime={isTimeExcluded}
                            minDate={new Date()}
                            minTime={new Date(0, 0, 0, 9)}
                            maxTime={new Date(0, 0, 0, 16)}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
