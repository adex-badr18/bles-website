import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { programsData } from "./data";

import LinkButton from "../../components/LinkButton";
import Breadcrumb from "../../components/Breadcrumb";
import { CheckMarkIcon } from "./components/icons";

import {
    MdOutlineHome,
    MdCheckCircleOutline,
    MdOutlineScheduleSend,
} from "react-icons/md";
import { BiChevronsRight } from "react-icons/bi";

export const programLoader = async ({ params }) => {
    const id = Number(params.id);

    const programInfo = programsData.filter((program) => program.id === id);

    return programInfo.length > 0
        ? programInfo[0]
        : {
              status: "error",
              message:
                  "The program information you requested could not be found.",
          };
};

const ProgramDetails = () => {
    const programInfo = useLoaderData();

    if (programInfo.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {programInfo.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {programInfo.message}
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
            <Breadcrumb obj={programInfo} page="programs" />

            <div className="wrapper py-5 md:py-20">
                <div className="flex flex-col md:flex-row px-5 gap-10 w-full max-w-[1024px] mx-auto">
                    <div className="flex-1">
                        <div className="space-y-5">
                            <h1 className="text-2xl md:text-4xl font-bold font-poppins text-darkBlue">
                                {programInfo.name}
                            </h1>

                            <p className="text-grey font-rubik leading-[28px]">
                                {programInfo.descr1}
                            </p>

                            <div className="">
                                <img
                                    src={programInfo.image}
                                    alt={programInfo.name}
                                    className=""
                                />
                            </div>

                            <p className="text-grey font-rubik leading-[28px]">
                                {programInfo.descr2}
                            </p>

                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                    Benefits
                                </h3>

                                <p className="text-grey font-rubik leading-[28px]">
                                    {programInfo.benefitInfo}
                                </p>

                                <ul className="space-y-3">
                                    {programInfo.benefits.map((benefit) => (
                                        <li
                                            key={benefit.id}
                                            className="flex items-start gap-4 group"
                                        >
                                            <CheckMarkIcon className="" />

                                            <span className="text-grey font-rubik leading-[28px]">
                                                <span className="text-darkBlue font-semibold">
                                                    {`${benefit.title}: `}
                                                </span>
                                                {benefit.descr}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                    Services
                                </h3>

                                <p className="text-grey font-rubik leading-[28px]">
                                    This program offers a high level of
                                    supervision, treatment, and accountability
                                    in a personalized manner. Some of the
                                    services included might entail:
                                </p>

                                <ul className="space-y-3">
                                    {programInfo.services.map((service) => (
                                        <li
                                            key={service.id}
                                            className="flex items-start gap-4 group"
                                        >
                                            <CheckMarkIcon className="" />

                                            <span className="text-grey font-rubik leading-[28px]">
                                                <span className="text-darkBlue font-semibold">
                                                    {`${service.title}: `}
                                                </span>
                                                {service.descr}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
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
                                Other Programs
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4 px-4 md:px-8 py-5 md:py-10 bg-[#F4F9FC]">
                            {programsData.map((program) => (
                                <NavLink
                                    key={program.id}
                                    to={`/programs/${program.id}`}
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
                                            {program.name.length > 23
                                                ? program.shortName
                                                : program.name}
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

export default ProgramDetails;
