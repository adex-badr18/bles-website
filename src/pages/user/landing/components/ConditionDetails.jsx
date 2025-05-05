import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { conditionsData } from "../../services/data";
import { conditionsFastLinks } from "../../services/data";

import LinkButton from "../../../../components/LinkButton";
import StickySideNav from "../../../../components/StickySideNav";
import Breadcrumb from "../../../../components/Breadcrumb";

import {
    MdOutlineHome,
    MdCheckCircleOutline,
    MdOutlineScheduleSend,
} from "react-icons/md";

export const conditionLoader = async ({ params }) => {
    const id = Number(params.id);

    const conditionInfo = conditionsData.filter(
        (condition) => condition.id === id
    );

    return conditionInfo.length > 0
        ? conditionInfo[0]
        : {
              status: "error",
              message:
                  "The condition information you requested could not be found.",
          };
};

const ConditionDetails = () => {
    const conditionInfo = useLoaderData();

    // console.log(conditionsData)
    console.log(conditionInfo);

    if (conditionInfo.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {conditionInfo.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {conditionInfo.message}
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
            <Breadcrumb obj={conditionInfo} page="conditions" />

            <div className="wrapper py-5 md:py-20">
                <div className="flex flex-col md:flex-row px-5 gap-10 w-full max-w-[1024px] mx-auto">
                    <div className="flex-1">
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-2xl md:text-4xl font-bold font-poppins text-darkBlue">
                                {conditionInfo.name}
                            </h1>
                            <p className="text-deepGrey font-rubik leading-[28px]">
                                {conditionInfo.descr1}
                            </p>
                            <div className="">
                                <img
                                    src={conditionInfo.image}
                                    alt={conditionInfo.name}
                                    className=""
                                />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                    Symptoms
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {conditionInfo.symptoms.map(
                                        (symptom, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3"
                                            >
                                                <MdCheckCircleOutline className="text-deepGreen text-xl flex-shrink-0" />
                                                <span className="text-deepGrey font-medium font-rubik leading-[28px]">
                                                    {symptom}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                    Approach and Benefits
                                </h3>
                                <p className="text-deepGrey  font-rubik leading-[28px]">
                                    At{" "}
                                    <span className="text-originalGreen font-semibold">
                                        BrightLife Enhancement Services
                                    </span>{" "}
                                    {conditionInfo.descr2}
                                </p>
                            </div>

                            {conditionInfo.personalizedTherapy?.length > 0 && (
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                        Personalized Therapy
                                    </h3>
                                    {conditionInfo.personalizedTherapy.map(
                                        (therapy) => (
                                            <div
                                                key={therapy.id}
                                                className="flex gap-3"
                                            >
                                                <MdCheckCircleOutline className="text-deepGreen text-xl flex-shrink-0 mt-1" />
                                                <p className="text-deepGrey font-rubik leading-[28px]">
                                                    <span className="font-medium">
                                                        {therapy.title}
                                                    </span>{" "}
                                                    {therapy.descr}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}

                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-bold font-poppins text-darkBlue">
                                    Take the First Step
                                </h3>
                                <p className="text-deepGrey font-rubik leading-[28px]">
                                    {conditionInfo.diagnosis}
                                </p>
                            </div>
                        </div>

                        <div className="justify-self-start mt-6">
                            <LinkButton
                                name="Start your journey now"
                                to="/appointment"
                                icon={
                                    <MdOutlineScheduleSend className="text-lg" />
                                }
                                bgColor="green"
                            />
                        </div>
                    </div>

                    <StickySideNav
                        data={conditionsFastLinks}
                        widgetTitle="Conditions"
                    />
                </div>
            </div>
        </section>
    );
};

export default ConditionDetails;
