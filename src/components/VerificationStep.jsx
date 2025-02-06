import { useState, useEffect } from "react";
import TextField from "./TextField";
import DateField from "./DateField";
import SelectField from "./SelectField";
import StaticDivider from "./StaticDivider";
import { MdEmail } from "react-icons/md";

const VerificationStep = ({ formData, onChange }) => {
    const [verificationResponse, setVerificationResponse] = useState({
        status: "",
        msg: "",
        data: {},
    });
    const [patientId, setPatientId] = useState("PAT000001");

    // Fetch patient info by Id
    const verifyId = async (e) => {
        e.preventDefault();

        // TODO: Fetch Patient data by id

        onChange("verification", "id", "PAT000001");
        onChange("verification", "firstName", "Badrudeen");
        onChange("verification", "middleName", "Adewumi");
        onChange("verification", "lastName", "Abdul-hameed");
        onChange("verification", "phone", "+1234567890");
        onChange("verification", "email", "tukstom12@gmail.com");
        onChange("verification", "dob", new Date("01/10/1990"));
        onChange("verification", "address.streetName", "23 Hagers Town")
        onChange("verification", "address.city", "Middlesbrough")
        onChange("verification", "address.state", "London")
        onChange("verification", "address.zipCode", "123456")
        onChange("verification", "date", new Date().toLocaleDateString())

        // Success
        setVerificationResponse({
            status: "success",
            msg: "",
            data: {
                firstName: "Badrudeen",
                middleName: "Adewumi",
                lastName: "Abdul-hameed",
                phone: "+23456879012",
                email: "tukstom@gmail.com",
                dob: "01/10/1990",
                address: { streetName: "Crescent Close", city: "Hagers Town", state: "Sheffield", zipCode: "123456" },
                date: new Date().toLocaleDateString()
            },
        });

        // Error
        // setVerificationResponse({
        //     status: "error",
        //     msg: "The requested patient ID could not be found.",
        //     data: {},
        // });
    };

    // console.log(formData);

    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h2 className="text-lg font-medium text-darkBlue">
                    Enter your patient ID below to fetch your basic information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="space-y-1 col-span-2">
                        <label htmlFor="patientId" className="block text-grey">
                            Patient ID
                        </label>
                        <input
                            type="text"
                            id="patientId"
                            name="patientId"
                            className="input"
                            placeholder="Patient ID"
                            value={patientId}
                            onChange={(e) => setPatientId(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={verifyId}
                        className="place-self-end bg-lightGreen hover:bg-emerald-500 text-white font-semibold py-2 px-3 rounded-md w-full transition-colors duration-300"
                    >
                        Verify ID
                    </button>
                </div>

                {verificationResponse.status === "success" && (
                    <div className="space-y-10">
                        <StaticDivider />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    First Name
                                </label>
                                <div id="firstName" className="input">
                                    {verificationResponse.data.firstName}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="middleName"
                                    className="block text-grey"
                                >
                                    Middle Name
                                </label>
                                <div id="middleName" className="input">
                                    {verificationResponse.data.middleName}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="lastName"
                                    className="block text-grey"
                                >
                                    Last Name
                                </label>
                                <div id="lastName" className="input">
                                    {verificationResponse.data.lastName}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="phone"
                                    className="block text-grey"
                                >
                                    Phone Number
                                </label>
                                <div id="phone" className="input">
                                    {verificationResponse.data.phone}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    Email
                                </label>
                                <div id="firstName" className="input">
                                    {verificationResponse.data.email}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    Date of Birth
                                </label>
                                <div id="dob" className="input">
                                    {verificationResponse.data.dob}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    Street Address
                                </label>
                                <div id="streetName" className="input">
                                    {verificationResponse.data.address.streetName}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    City
                                </label>
                                <div id="city" className="input">
                                    {verificationResponse.data.address.city}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    State
                                </label>
                                <div id="state" className="input">
                                    {verificationResponse.data.address.state}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    Zip Code
                                </label>
                                <div id="zipCode" className="input">
                                    {verificationResponse.data.address.zipCode}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    htmlFor="firstName"
                                    className="block text-grey"
                                >
                                    Date
                                </label>
                                <div id="zipCode" className="input">
                                    {verificationResponse.data.date}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {verificationResponse.status === "error" && (
                    <div className="text-vividRed font-medium text-center">
                        {verificationResponse.msg}
                    </div>
                )}
            </div>
        </form>
    );
};

export default VerificationStep;
