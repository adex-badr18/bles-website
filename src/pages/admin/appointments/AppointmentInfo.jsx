import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import LinkButton from "../../../components/LinkButton";
import FieldItem from "../../../components/FieldItem";
import Modal from "../../../components/Modal";
import SubmitButton from "../../../components/SubmitButton";
import TextField from "../../../components/TextField";
import SelectField from "../../../components/SelectField";
import DateField from "../../../components/DateField";
import TextAreaField from "../../../components/TextAreaField";

import { appointmentStatusOptions, appointments } from "./data";
import { appointmentTypes, insuranceNames, paymentMethods, services } from "../../user/appointment/data";
import {
    fetchAdminUnavailablePeriods,
    fetchBookedAppointmentsPeriods,
    fetchUSHolidays,
} from "../../user/appointment/api";
import { convertToUSDateTime } from "../utils";
import { genderOptions } from "../../user/patientForms/data";

import { MdOutlineHome, MdEdit, MdClose } from "react-icons/md";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { LuShieldCheck } from "react-icons/lu";

export const appointmentLoader = async ({ params }) => {
    const id = params.id;

    const appointment = appointments.filter(
        (appointment) => appointment.id === id
    );

    return appointment.length > 0
        ? appointment[0]
        : {
              status: "error",
              message:
                  "The appointment information you requested could not be found.",
          };
};

const AppointmentInfo = () => {
    const navigate = useNavigate();
    const appointment = useLoaderData();
    const [isAppointmentEditable, setIsAppointmentEditable] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [holidays, setHolidays] = useState([]);
    const [excludedTimes, setExcludedTimes] = useState({});
    const [formData, setFormData] = useState({
        personal: {
            patientId: appointment.patientId || "",
            firstName: appointment.firstName || "",
            middleName: appointment.middleName || "",
            lastName: appointment.lastName || "",
            gender: appointment.gender || "",
            dob: new Date(appointment.dob) || "",
            phone: appointment.phone || "",
            email: appointment.email || "",
        },
        address: {
            street: appointment.streetAddress || "",
            city: appointment.city || "",
            state: appointment.state || "",
            zipCode: appointment.zipCode || "",
        },
        appointment: {
            appointmentType: appointment.appointmentType || "",
            service: appointment.service || "",
            appointmentDateTime: new Date(appointment.dateTime) || "",
            purpose: appointment.purpose || "",
            status: appointment.status || "",
        },
        insurance: {
            paymentMethod: appointment.paymentMethod || "",
            insuranceName: appointment.insuranceName || "",
            insuranceNumber: appointment.insuranceNumber || "",
        },
    });

    console.log(formData);

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
        const selectedDateTime = new Date(
            formData.appointment.appointmentDateTime
        );

        if (!selectedDateTime) return false;

        const dateKey = selectedDateTime.toLocaleDateString();
        const timeString = time.toTimeString().substring(0, 5);

        return !excludedTimes[dateKey]?.includes(timeString);
    };

    // Handle form element change
    const handleFormElementChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    const handleAppointmentEdit = (e) => {
        setIsAppointmentEditable(!isAppointmentEditable);
    };

    const returnHome = () => {
        setIsSubmitModalOpen(false);
        navigate("/admin/appointments");
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsConfirmModalOpen(false);
            setIsSubmitModalOpen(true);
            setIsSubmitting(false);
        }, 4000);
    };

    const confirmHandler = (e) => {
        e.preventDefault();

        setIsConfirmModalOpen(true);
    };

    if (appointment.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {appointment.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {appointment.message}
                    </p>
                    <LinkButton
                        name="Home"
                        to="/admin/dashboard"
                        bgColor="green"
                        icon={<MdOutlineHome className="text-xl" />}
                    />
                </div>
            </section>
        );
    }

    return (
        <section>
            <PageTitle title={`Appointment Details`}>
                <button
                    onClick={handleAppointmentEdit}
                    className={`${
                        isAppointmentEditable
                            ? "bg-vividRed hover:bg-red-700"
                            : "bg-lightGreen hover:bg-lighterGreen"
                    } rounded-lg px-4 md:px-6 py-3 flex items-center justify-center gap-2 divide-x-2 divide-white text-white font-poppins font-semibold text-nowrap transition duration-500`}
                >
                    <span className="">
                        {isAppointmentEditable ? "Cancel" : "Edit Appointment"}
                    </span>
                    {isAppointmentEditable ? (
                        <MdClose className="pl-2 text-3xl" />
                    ) : (
                        <MdEdit className="pl-2 text-3xl" />
                    )}
                </button>
            </PageTitle>

            <div className="flex flex-col gap-6 md:gap-8">
                <div className="p-8 border rounded-lg bg-offWhite space-y-4 shadow-lg">
                    <h4 className="text-xl font-medium text-darkBlue">
                        Personal Information
                    </h4>

                    {isAppointmentEditable ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols- gap-8">
                            <TextField
                                type="text"
                                label="First Name"
                                name="firstName"
                                placeholder="First Name"
                                section="personal"
                                field="firstName"
                                value={formData.personal.firstName}
                                handleInputChange={handleFormElementChange}
                                autoFocus
                            />

                            <TextField
                                type="text"
                                label="Middle Name"
                                name="middleName"
                                placeholder="Middle Name"
                                section="personal"
                                field="middleName"
                                value={formData.personal.middleName}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="Last Name"
                                name="lastName"
                                placeholder="Last Name"
                                section="personal"
                                field="lastName"
                                value={formData.personal.lastName}
                                handleInputChange={handleFormElementChange}
                            />

                            <SelectField
                                label="Gender"
                                name="gender"
                                title="-- Select an option --"
                                data={genderOptions}
                                value={formData.personal.gender}
                                section="personal"
                                field="gender"
                                handleSelectChange={handleFormElementChange}
                            />

                            <DateField
                                label="Date of Birth"
                                name="dob"
                                field="dob"
                                section="personal"
                                placeholder="MM/DD/YYYY"
                                handleFormElementChange={
                                    handleFormElementChange
                                }
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                defaultDate={new Date(formData.personal.dob)}
                            />

                            <TextField
                                type="text"
                                label="Phone"
                                name="phone"
                                placeholder="Phone"
                                section="personal"
                                field="phone"
                                value={formData.personal.phone}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="email"
                                label="Email"
                                name="email"
                                placeholder="Email"
                                section="personal"
                                field="email"
                                value={formData.personal.email}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="Street Address"
                                name="street"
                                placeholder="Street Address"
                                section="personal"
                                field="street"
                                value={formData.address.street}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="City"
                                name="city"
                                placeholder="City"
                                section="address"
                                field="city"
                                value={formData.address.city}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="State"
                                name="state"
                                placeholder="State"
                                section="address"
                                field="state"
                                value={formData.address.state}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="Zip Code"
                                name="zipCode"
                                placeholder="Zip Code"
                                section="address"
                                field="zipCode"
                                value={formData.address.zipCode}
                                handleInputChange={handleFormElementChange}
                            />
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols- gap-8">
                            <FieldItem
                                label="First Name"
                                value={appointment.firstName || "N/A"}
                            />
                            <FieldItem
                                label="Middle Name"
                                value={appointment.middleName || "N/A"}
                            />
                            <FieldItem
                                label="Last Name"
                                value={appointment.lastName || "N/A"}
                            />
                            <FieldItem
                                label="Gender"
                                value={appointment.gender || "N/A"}
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={
                                    convertToUSDateTime(appointment.dob) ||
                                    "N/A"
                                }
                            />
                            <FieldItem
                                label="Email"
                                value={appointment.email || "N/A"}
                            />
                            <FieldItem
                                label="Phone"
                                value={appointment.phone || "N/A"}
                            />
                            <FieldItem
                                label="Street Address"
                                value={appointment.street || "N/A"}
                            />
                            <FieldItem
                                label="City"
                                value={appointment.city || "N/A"}
                            />
                            <FieldItem
                                label="State"
                                value={appointment.state || "N/A"}
                            />
                            <FieldItem
                                label="Zip Code"
                                value={appointment.zipCode || "N/A"}
                            />
                        </div>
                    )}
                </div>

                <div className={`space-y-6 md:space-y-8`}>
                    <div className="p-8 border rounded-lg bg-offWhite space-y-4 w-full shadow-lg">
                        <h4 className="text-xl font-medium text-darkBlue">
                            Appointment
                        </h4>

                        {isAppointmentEditable ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <DateField
                                    label="Date & Time"
                                    name="appointmentDateTime"
                                    field="appointmentDateTime"
                                    section="appointment"
                                    handleFormElementChange={
                                        handleFormElementChange
                                    }
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    defaultDate={
                                        new Date(
                                            formData.appointment.appointmentDateTime
                                        )
                                    }
                                    showTimeSelect
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

                                <SelectField
                                    label="Status"
                                    name="status"
                                    title="-- Select an option --"
                                    data={appointmentStatusOptions}
                                    value={formData.appointment.status}
                                    section="appointment"
                                    field="status"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <SelectField
                                    label="Type"
                                    name="appointmentType"
                                    title="-- Select an option --"
                                    data={appointmentTypes}
                                    value={formData.appointment.appointmentType}
                                    section="appointment"
                                    field="appointmentType"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <SelectField
                                    label="Service"
                                    name="service"
                                    title="-- Select an option --"
                                    data={services}
                                    value={formData.appointment.service}
                                    section="appointment"
                                    field="service"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <TextAreaField
                                    label="Purpose of Visit"
                                    name="purpose"
                                    placeholder="Write detailed description here"
                                    section="appointment"
                                    field="purpose"
                                    value={formData.appointment.purpose}
                                    handleFormElementChange={
                                        handleFormElementChange
                                    }
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <FieldItem
                                    label="Type"
                                    value={appointment.appointmentType || "N/A"}
                                />
                                <FieldItem
                                    label="Service"
                                    value={appointment.service || "N/A"}
                                />
                                <FieldItem
                                    label="Date & Time"
                                    value={
                                        `${convertToUSDateTime(
                                            appointment.dateTime,
                                            true
                                        )}` || "N/A"
                                    }
                                />
                                <FieldItem
                                    label="Status"
                                    value={appointment.status || "N/A"}
                                />
                                <FieldItem
                                    label="Purpose"
                                    value={appointment.purpose || "N/A"}
                                />
                            </div>
                        )}
                    </div>

                    <div className="p-8 border rounded-lg bg-offWhite space-y-4 w-full shadow-lg">
                        <h4 className="text-xl font-medium text-darkBlue">
                            Payment
                        </h4>

                        {isAppointmentEditable ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">                                
                                <SelectField
                                    label="Payment Method"
                                    name="paymentMethod"
                                    title="-- Select an option --"
                                    data={paymentMethods}
                                    value={formData.insurance.paymentMethod}
                                    section="insurance"
                                    field="paymentMethod"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <SelectField
                                    label="Insurance Name"
                                    name="insuranceName"
                                    title="-- Select an option --"
                                    data={insuranceNames}
                                    value={formData.insurance.insuranceName}
                                    section="insurance"
                                    field="insuranceName"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <TextField
                                    type="text"
                                    label="Insurance Number"
                                    name="insuranceNumber"
                                    placeholder="Insurance Number"
                                    section="insurance"
                                    field="insuranceNumber"
                                    value={formData.insurance.insuranceNumber}
                                    handleInputChange={handleFormElementChange}
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <FieldItem
                                    label="Payment Method"
                                    value={appointment.paymentMethod || "N/A"}
                                />
                                <FieldItem
                                    label="Insurance Name"
                                    value={appointment.insuranceName || "N/A"}
                                />
                                <FieldItem
                                    label="Insurance Number"
                                    value={appointment.insuranceNumber || "N/A"}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {isAppointmentEditable && (
                    <button
                        onClick={confirmHandler}
                        className="self-end w-auto bg-lightGreen hover:bg-lighterGreen px-4 py-2 text-white font-medium rounded-lg"
                    >
                        Update Appointment
                    </button>
                )}
            </div>

            {/* Submission Response */}
            <Modal isOpen={isSubmitModalOpen}>
                <div className="w-full max-w-xl p-4 rounded-lg bg-white text-deepGrey relative">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <LuShieldCheck className="text-5xl text-lightGreen" />

                        <div className="flex flex-col items-center">
                            <h3 className="text-lg text-center font-bold mb-5">
                                Appointment Updated!
                            </h3>

                            <div className="space-y-2 text-center text-deepGrey">
                                <p className="">
                                    Appointment information has been
                                    successfully updated.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-1">
                            <button
                                className="w-full bg-lightGreen hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                                onClick={returnHome}
                            >
                                Return Home
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Confirm */}
            <Modal isOpen={isConfirmModalOpen}>
                <div className="w-full max-w-xl rounded-lg bg-white text-deepGrey border-t-8 border-t-yellow-600 relative">
                    <div className="flex flex-col divide-y divide-lightGrey">
                        <div className="flex items-center gap-4 md:gap-8 p-4 md:p-6">
                            <BsFillQuestionDiamondFill className="flex-shrink-0 text-4xl md:text-6xl text-yellow-600" />

                            <div className="space-y-2 text-deepGrey">
                                <h3 className="text-lg font-semibold">
                                    Confirm Appointment Update
                                </h3>
                                <p className="">
                                    Are you sure you want to save these changes?
                                    <span className="block">
                                        Ensure all details are accurate before
                                        proceeding.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-4 p-3 md:p-4">
                            <button
                                className="w-full bg-transparent hover:bg-vividRed border border-vividRed px-4 py-[7px] text-vividRed hover:text-white font-medium tracking-widest rounded-lg transition-colors duration-300"
                                onClick={() => setIsConfirmModalOpen(false)}
                            >
                                Cancel
                            </button>

                            <SubmitButton
                                submitText="Save Changes"
                                loadingText="Saving..."
                                onSubmit={submitHandler}
                                isSubmitting={isSubmitting}
                                xtraClass="self-end"
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default AppointmentInfo;
