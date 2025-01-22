import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField = ({
    label,
    name,
    section,
    field,
    dateFormat,
    placeholder,
    defaultDate,
    handleFormElementChange,
    ...rest
}) => {
    const [selectedDate, setSelectedDate] = useState(defaultDate || null);

    useEffect(() => {
        handleFormElementChange(section, field, selectedDate);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="space-y-1">
            <label htmlFor={name} className="block text-grey">
                {label}
            </label>
            <DatePicker
                id={name}
                name={name}
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat={dateFormat}
                className="input"
                placeholderText={placeholder}
                {...rest}
            />
        </div>
    );
};

export default DateField;
