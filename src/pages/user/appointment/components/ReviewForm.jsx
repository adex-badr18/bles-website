import React from "react";

const ReviewForm = ({ formData, onSubmit, onClose, onEdit }) => {
    const { personal, address, appointment, insurance } = formData;

    return (
        // <div className="flex items-center justify-center px-4 overflow-y-auto h-[520px]">
            <div className="max-w-4xl w-full overflow-y-auto h-full md:[550px] bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        Review Your Information
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-600 text-lg"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Personal Information */}
                    <section className="py-2 px-4 border rounded">
                        <h3 className="text-lg font-semibold text-gray-700">
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
                            <p>
                                <span className="font-semibold">Name:</span>{" "}
                                {personal.name || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Date of Birth:
                                </span>{" "}
                                {new Date(personal.dob).toLocaleDateString() || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">Phone:</span>{" "}
                                {personal.phone || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                {personal.email || "N/A"}
                            </p>
                        </div>
                    </section>

                    {/* Address */}
                    <section className="py-2 px-4 border rounded">
                        <h3 className="text-lg font-semibold text-gray-700">
                            Address
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            <p>
                                <span className="font-semibold">
                                    Address 1:
                                </span>{" "}
                                {address.address1 || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Address 2:
                                </span>{" "}
                                {address.address2 || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">City:</span>{" "}
                                {address.city || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">State:</span>{" "}
                                {address.state || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">Zip Code:</span>{" "}
                                {address.zipCode || "N/A"}
                            </p>
                        </div>
                    </section>

                    {/* Appointment */}
                    <section className="py-2 px-4 border rounded">
                        <h3 className="text-lg font-semibold text-gray-700">
                            Appointment
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            <p>
                                <span className="font-semibold">Type:</span>{" "}
                                {appointment.appointmentType || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">Service:</span>{" "}
                                {appointment.service || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Date/Time:
                                </span>{" "}
                                {new Date(appointment.appointmentDateTime).toLocaleString() || "N/A"}
                            </p>
                        </div>
                    </section>

                    {/* Insurance */}
                    <section className="py-2 px-4 border rounded">
                        <h3 className="text-lg font-semibold text-gray-700">
                            Insurance Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            <p>
                                <span className="font-semibold">
                                    Payment Method:
                                </span>{" "}
                                {insurance.paymentMethod || "N/A"}
                            </p>
                            {insurance.paymentMethod !== "self pay" && (
                                <>
                                    <p>
                                        <span className="font-semibold">
                                            Insurance Name:
                                        </span>{" "}
                                        {insurance.insuranceName || "N/A"}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Insurance Number:
                                        </span>{" "}
                                        {insurance.insuranceNumber || "N/A"}
                                    </p>
                                </>
                            )}
                        </div>
                    </section>
                </div>

                {/* Buttons */}
                <div className="flex justify-end items-center space-x-4 mt-6">
                    <button
                        onClick={onEdit}
                        className="px-4 py-2 bg-orange-500 text-white font-medium rounded-lg shadow hover:bg-yellow-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onSubmit}
                        className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700"
                    >
                        Submit
                    </button>
                </div>
            </div>
        // </div>
    );
};

export default ReviewForm;
