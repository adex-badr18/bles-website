import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { programsData } from "./data";

import LinkButton from "../../../components/LinkButton";
import Breadcrumb from "../../../components/Breadcrumb";
import StickySideNav from "../../../components/StickySideNav";
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

            <div className="relative wrapper py-5 md:py-20">
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
                                to="/contact#appointment"
                                icon={
                                    <MdOutlineScheduleSend className="text-lg" />
                                }
                                bgColor="red"
                            />
                        </div>
                    </div>

                    <StickySideNav data={programsData} widgetTitle="Programs" />
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
