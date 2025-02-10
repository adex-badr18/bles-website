import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import StaticDivider from "../../../../components/StaticDivider";

const PersonalInfoForm = ({ formData, handleInputChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        handleInputChange("personal", "dob", selectedDate);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-1 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-darkBlue">
                    Welcome to BrightLife
                </h3>
                <p className=" text-deepGrey">
                    Let us help you take the first step toward healing and
                    renewed purpose.
                </p>
            </div>

            <form className="space-y-10">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                        Tell us a little about you
                    </h3>
                    <div className="space-y-1">
                        <label htmlFor="name" className="block text-grey">
                            Your full legal name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input"
                            placeholder="Your full name"
                            value={formData.personal.name}
                            onChange={(e) =>
                                handleInputChange(
                                    "personal",
                                    "name",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="dob" className="block text-grey">
                            Date of birth
                        </label>
                        <DatePicker
                            id="dob"
                            name="dob"
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat={`MMMM d, yyyy`}
                            className="input"
                        />
                    </div>
                </div>

                <StaticDivider />

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                        Your contact Information
                    </h3>
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-grey">
                            Email address:
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="input"
                            placeholder="rodrig@example.com"
                            value={formData.personal.email}
                            onChange={(e) =>
                                handleInputChange(
                                    "personal",
                                    "email",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="phone" className="block text-grey">
                            Mobile number:
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="input"
                            placeholder="(444) 789-1011"
                            value={formData.personal.phone}
                            onChange={(e) =>
                                handleInputChange(
                                    "personal",
                                    "phone",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfoForm;
