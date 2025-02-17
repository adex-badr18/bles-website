import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import LinkButton from "../../../components/LinkButton";
import FieldItem from "../../../components/FieldItem";
import { appointments } from "./data";
import { MdOutlineHome } from "react-icons/md";
import { convertToUSDateTime } from "../utils";

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
    const appointment = useLoaderData();

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
                        to="/"
                        bgColor="green"
                        icon={<MdOutlineHome className="text-xl" />}
                    />
                </div>
            </section>
        );
    }

    return (
        <section>
            <PageTitle title={`Appointment Details`} />

            <div className="space-y-6 md:space-y-8">
                <div className="p-8 border rounded-lg bg-offWhite space-y-4 shadow-lg">
                    <h4 className="text-xl font-medium text-darkBlue">
                        Personal Information
                    </h4>

                    <div className="grid sm:grid-cols-2 lg:grid-cols- gap-8">
                        <FieldItem
                            label="First Name"
                            value={appointment.firstName}
                        />
                        <FieldItem
                            label="Middle Name"
                            value={appointment.middleName}
                        />
                        <FieldItem
                            label="Last Name"
                            value={appointment.lastName}
                        />
                        <FieldItem label="Gender" value={appointment.gender} />
                        <FieldItem
                            label="Date of Birth"
                            value={convertToUSDateTime(appointment.dob)}
                        />
                        <FieldItem label="Email" value={appointment.email} />
                        <FieldItem label="Phone" value={appointment.phone} />
                        <FieldItem
                            label="Street Address"
                            value={appointment.streetAddress}
                        />
                        <FieldItem label="City" value={appointment.city} />
                        <FieldItem label="State" value={appointment.state} />
                        <FieldItem
                            label="Zip Code"
                            value={appointment.zipCode}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="p-8 border rounded-lg bg-offWhite space-y-4 w-full shadow-lg">
                        <h4 className="text-xl font-medium text-darkBlue">
                            Appointment
                        </h4>

                        <div className="space-y-8">
                            <FieldItem
                                label="Appointment Type"
                                value={appointment.appointmentType}
                            />
                            <FieldItem
                                label="Service"
                                value={appointment.service}
                            />
                            <FieldItem
                                label="Appointment Date"
                                value={`${convertToUSDateTime(
                                    appointment.dateTime,
                                    true
                                )} ET`}
                            />
                            <FieldItem
                                label="Status"
                                value={appointment.status}
                            />
                            <FieldItem
                                label="Purpose"
                                value={appointment.purpose}
                            />
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg bg-offWhite space-y-4 w-full shadow-lg">
                        <h4 className="text-xl font-medium text-darkBlue">
                            Payment
                        </h4>

                        <div className="space-y-8">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentInfo;
