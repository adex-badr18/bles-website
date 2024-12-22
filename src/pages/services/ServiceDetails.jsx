import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { servicesData } from "./data";
import { servicesFastLinks } from "./data";
import LinkButton from "../../components/LinkButton";

import Breadcrumb from "../../components/Breadcrumb";

import {
    MdOutlineHome,
    MdCheckCircleOutline,
    MdOutlineScheduleSend,
} from "react-icons/md";
import { BiChevronsRight } from "react-icons/bi";

export const serviceLoader = async ({ params }) => {
    const id = Number(params.id);

    const serviceInfo = servicesData.filter((service) => service.id === id);

    return serviceInfo.length > 0
        ? serviceInfo[0]
        : {
              status: "error",
              message:
                  "The service information you requested could not be found.",
          };
};

const ServiceDetails = () => {
    const serviceInfo = useLoaderData();

    if (serviceInfo.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {serviceInfo.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {serviceInfo.message}
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
        <section className="">
            <Breadcrumb obj={serviceInfo} page="services" />

            <div className="wrapper py-5 md:py-20">
                <div className="flex flex-col md:flex-row px-5 gap-10 w-full max-w-[1024px] mx-auto">
                    <div className="flex-1">
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-4xl font-bold font-poppins text-darkBlue">
                                {serviceInfo.name}
                            </h1>
                            <p className="text-grey font-rubik leading-[28px]">
                                {serviceInfo.descr1}
                            </p>
                            <div className="">
                                <img
                                    src={serviceInfo.image}
                                    alt={serviceInfo.name}
                                    className=""
                                />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                    Symptoms
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {serviceInfo.symptoms.map((symptom) => (
                                        <div className="flex items-center gap-3">
                                            <MdCheckCircleOutline className="text-vividRed text-xl" />
                                            <span className="text-darkBlue font-medium font-rubik leading-[28px]">
                                                {symptom}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                    Approach and Benefits
                                </h3>
                                <p className="text-grey font-rubik leading-[28px]">
                                    At{" "}
                                    <span className="text-vividRed font-semibold">
                                        BrightLife Enhancement Services
                                    </span>{" "}
                                    {serviceInfo.descr2}
                                </p>
                            </div>
                        </div>

                        <div className="justify-self-start mt-6">
                            <LinkButton
                                name="Schedule an Appointment Now"
                                to="/appointment"
                                icon={
                                    <MdOutlineScheduleSend className="text-lg" />
                                }
                                bgColor="red"
                            />
                        </div>
                    </div>

                    <div className="w-full max-w-[360px]">
                        <div className="px-5 py-3 md:px-10 bg-vividRed rounded-t-md">
                            <h3 className="text-white text-lg md:text-2xl font-bold">
                                Other Services
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4 px-4 md:px-8 py-5 md:py-10 bg-[#F4F9FC]">
                            {servicesFastLinks.map((service) => (
                                <NavLink
                                    key={service.id}
                                    to={service.to}
                                    className={({ isActive }) =>
                                        [
                                            isActive
                                                ? "bg-vividRed text-white"
                                                : "bg-white text-deepBlue",
                                            "border border-[#dddddd8f] rounded-md p-4 font-rubik hover:bg-vividRed hover:text-white transition duration-300",
                                        ].join(" ")
                                    }
                                >
                                    <div className="flex gap-2 items-center">
                                        <BiChevronsRight className="" />
                                        <span className="font-medium">
                                            {service.name}
                                        </span>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
