import { useEffect, useState } from "react";

import Dropdown from "../../../../components/Dropdown";
import { appointmentTypes, services } from "../data";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = ({ formData, handleInputChange }) => {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());

    useEffect(() => {
        handleInputChange("appointment", "appointmentDateTime", selectedDateTime);
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
                            Service:
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
                        <label htmlFor="appointmentDateTime" className="block text-grey">
                            Select appointment date & time
                        </label>
                        <DatePicker
                            id="appointmentDateTime"
                            name="appointmentDateTime"
                            selected={selectedDateTime}
                            onChange={handleDateTimeChange}
                            showTimeSelect
                            dateFormat={`MMMM d, yyyy h:mm aa`}
                            className="input"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
