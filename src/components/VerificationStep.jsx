import { useState, useEffect } from "react";
import TextField from "./TextField";
import DateField from "./DateField";
import SelectField from "./SelectField";
import StaticDivider from "./StaticDivider";
import FieldItem from "./FieldItem"
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
        onChange("verification", "middleName", "");
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
                dob: new Date("01/10/1990").toLocaleDateString(),
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
                            <FieldItem label="First Name" value={verificationResponse.data.firstName} />
                            <FieldItem label="Middle Name" value={verificationResponse.data.middleName} />
                            <FieldItem label="Last Name" value={verificationResponse.data.lastName} />                            
                            <FieldItem label="Phone Number" value={verificationResponse.data.phone} />
                            <FieldItem label="Email" value={verificationResponse.data.email} />                            
                            <FieldItem label="Date of Birth" value={verificationResponse.data.dob} />
                            <FieldItem label="Street Address" value={verificationResponse.data.address.streetName} />
                            <FieldItem label="City" value={verificationResponse.data.address.city} />
                            <FieldItem label="State" value={verificationResponse.data.address.state} />
                            <FieldItem label="Zip Code" value={verificationResponse.data.address.zipCode} />
                            <FieldItem label="Date" value={new Date().toLocaleDateString() || "N/A"} />                        
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
