import {
    fetchAdminUnavailablePeriods,
    fetchBookedAppointmentsPeriods,
    fetchUSHolidays,
} from "../../../user/appointment/api";

const AppointmentTab = ({ formData, onChange }) => {
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

    useEffect(() => {
        onChange("appointment", "dateTime", selectedDateTime);
    }, [selectedDateTime]);

    const handleDateTimeChange = (date) => {
        setSelectedDateTime(date);
    };

    return (
        <div className="space-y-6">
            <form className="space-y-8 divide-y-2 divide-lightGray">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                        Set an unavailable time
                    </h3>

                    <div className="space-y-1">
                        <label htmlFor="dateTime" className="block text-grey">
                            Select date & time
                        </label>
                        <DatePicker
                            id="dateTime"
                            name="dateTime"
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

export default AppointmentTab;
