import { MdClose } from "react-icons/md";
import Spinner from "../../../../components/Spinner";

const ReviewForm = ({ formData, onSubmit, onClose, onEdit, isSubmitting }) => {
    const { personal, address, appointment, insurance } = formData;

    return (
        // <div className="flex items-center justify-center px-4 overflow-y-auto h-[520px]">
        <div className="w-full overflow-y-auto h-[90vh] bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                    Review Your Information
                </h2>
                <button
                    onClick={onClose}
                    className="text-deepGrey hover:text-vividRed text-2xl"
                    aria-label="Close"
                >
                    <MdClose />
                </button>
            </div>

            <div className="space-y-4">
                {/* Personal Information */}
                <div className="py-2 px-4 border rounded space-y-1">
                    <h3 className="text-lg font-semibold text-darkBlue">
                        Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
                        <p>
                            <span className="font-medium text-deepGrey">
                                First Name:
                            </span>{" "}
                            {personal.firstName || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Middle Name:
                            </span>{" "}
                            {personal.middleName || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Last Name:
                            </span>{" "}
                            {personal.lastName || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Gender:
                            </span>{" "}
                            {personal.gender || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Date of Birth:
                            </span>{" "}
                            {new Date(personal.dob).toLocaleDateString() ||
                                "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Phone:
                            </span>{" "}
                            {personal.phone || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Email:
                            </span>{" "}
                            {personal.email || "N/A"}
                        </p>
                    </div>
                </div>

                {/* Address */}
                <div className="py-2 px-4 border rounded space-y-1">
                    <h3 className="text-lg font-semibold text-darkBlue">
                        Address
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        <p>
                            <span className="font-medium text-deepGrey">
                                Street:
                            </span>{" "}
                            {address.street || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                City:
                            </span>{" "}
                            {address.city || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                State:
                            </span>{" "}
                            {address.state || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Zip Code:
                            </span>{" "}
                            {address.zipCode || "N/A"}
                        </p>
                    </div>
                </div>

                {/* Appointment */}
                <div className="py-2 px-4 border rounded space-y-1">
                    <h3 className="text-lg font-semibold text-darkBlue">
                        Appointment
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        <p>
                            <span className="font-medium text-deepGrey">
                                Type:
                            </span>{" "}
                            {appointment.appointmentType || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Service:
                            </span>{" "}
                            {appointment.service || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium text-deepGrey">
                                Date/Time:
                            </span>{" "}
                            {new Date(
                                appointment.appointmentDateTime
                            ).toLocaleString() || "N/A"}
                        </p>
                    </div>
                </div>

                {/* Insurance */}
                <div className="py-2 px-4 border rounded space-y-1">
                    <h3 className="text-lg font-semibold text-darkBlue">
                        Insurance Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        <p>
                            <span className="font-medium text-deepGrey">
                                Payment Method:
                            </span>{" "}
                            {insurance.paymentMethod || "N/A"}
                        </p>
                        {insurance.paymentMethod !== "self pay" && (
                            <>
                                <p>
                                    <span className="font-medium text-deepGrey">
                                        Insurance Name:
                                    </span>{" "}
                                    {insurance.insuranceName || "N/A"}
                                </p>
                                <p>
                                    <span className="font-medium text-deepGrey">
                                        Insurance Number:
                                    </span>{" "}
                                    {insurance.insuranceNumber || "N/A"}
                                </p>
                            </>
                        )}
                    </div>
                </div>
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
                    className="bg-lightGreen hover:bg-green-600 px-4 py-2 text-white rounded-lg"
                    onClick={onSubmit}
                >
                    {isSubmitting ? (
                        <Spinner secondaryText="Submitting..." />
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
        </div>
        // </div>
    );
};

export default ReviewForm;
