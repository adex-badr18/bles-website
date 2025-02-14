import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import LinkButton from "../../../components/LinkButton";
import FieldItem from "../../../components/FieldItem";
import GeneralTab from "./components/GeneralTab";
import { patients, patientsList } from "./data";
import { MdOutlineHome } from "react-icons/md";
import { convertToUSDateTime } from "../utils";
import FormsTab from "./components/FormsTab";
import AppointmentsTab from "./components/AppointmentsTab";

import { MdOutlineEdit } from "react-icons/md";

export const patientLoader = async ({ params }) => {
    const id = params.id;

    const patient = patientsList.filter((patient) => patient.id === id);

    return patient.length > 0
        ? patient[0]
        : {
              status: "error",
              message:
                  "The patient information you requested could not be found.",
          };
};

const Patient = () => {
    const patient = useLoaderData();
    const [tabIndex, setTabIndex] = useState(1);

    // console.log(patient);

    const changeTabHandler = (tabIndex) => {
        setTabIndex(tabIndex);
    };

    const tabButtons = [
        { id: 1, tabName: "General" },
        { id: 2, tabName: "Patient Forms" },
        { id: 3, tabName: "Appointments" },
    ];

    if (patient.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {patient.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {patient.message}
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
            <PageTitle
                title={`${patient.personal.firstName} ${patient.personal.middleName} ${patient.personal.lastName}`}
            >
                <LinkButton
                    name="Update Patient Details"
                    to={`/admin/patients/${patient.id}/update`}
                    bgColor="green"
                    icon={<MdOutlineEdit className="text-xl" />}
                />
            </PageTitle>

            <div className="flex items-center justify-between gap-4 mb-4 md:mb-8">
                <div className="flex items-center gap-6">
                    {tabButtons.map((button, index) => (
                        <button
                            key={button.id}
                            className="flex items-center gap-2"
                            onClick={() => changeTabHandler(button.id)}
                        >
                            <span
                                className={`font-lato pb-1 ${
                                    tabIndex === button.id
                                        ? "border-b-4 border-lightGreen text-lightGreen font-medium"
                                        : "text-deepGray"
                                }`}
                            >
                                {button.tabName}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {tabIndex === 1 && <GeneralTab patient={patient} />}

            {tabIndex === 2 && <FormsTab />}

            {tabIndex === 3 && <AppointmentsTab />}
        </section>
    );
};

export default Patient;
