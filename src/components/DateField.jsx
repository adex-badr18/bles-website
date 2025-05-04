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
    isRequired,
    ...rest
}) => {
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (
            defaultDate instanceof Date &&
            (!selectedDate || selectedDate.getTime() !== defaultDate.getTime())
        ) {
            setSelectedDate(defaultDate);
        }
    }, [defaultDate]);

    useEffect(() => {
        if (selectedDate) {
            handleFormElementChange(
                section,
                field,
                new Date(selectedDate).toLocaleDateString()
            );
        }
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="space-y-1">
            <label
                htmlFor={`${section}-${name}`}
                className="block text-deepGrey"
            >
                {label}{" "}
                {isRequired && (
                    <small className="text-vividRed text-lg">*</small>
                )}
            </label>
            <DatePicker
                id={`${section}-${name}`}
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
