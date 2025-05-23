import { useState } from "react";

import { Link } from "react-router-dom";
import SectionHeader from "../../../../components/SectionHeader";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaUserDoctor } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { GiLaurelCrown } from "react-icons/gi";
import { LiaUsersSolid, LiaUserNurseSolid } from "react-icons/lia";
import { RiSendPlaneLine } from "react-icons/ri";
import { TbSend } from "react-icons/tb";
import { MdOutlineScheduleSend } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import LinkButton from "../../../../components/LinkButton";

const statsData = [
    {
        id: 1,
        title: "Professional Specialists",
        val: 25,
        icon: <FaUserDoctor className="text-originalGreen text-[80px]" />,
    },
    {
        id: 2,
        title: "Satisfied Patients",
        val: 1030,
        icon: <LiaUsersSolid className="text-originalGreen text-[80px]" />,
    },
    {
        id: 3,
        title: "Years of Experience",
        val: 15,
        icon: <GrAchievement className="text-originalGreen text-[80px]" />,
    },
    {
        id: 4,
        title: "Acclaimed Recognition",
        val: 178,
        icon: <GiLaurelCrown className="text-originalGreen text-[80px]" />,
    },
];

const StatsAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <section ref={ref} className="py-8 md:py-20">
            <div className="bg-deepGreen py-6 px-4">
                <div className="w-full max-w-[1320px] mx-auto">
                    <div className="flex items-center justify-center">
                        <p className="text-lg font-poppins font-semibold text-white text-center">
                            Ready to get our medical care? We're always
                            available to serve you,{" "}
                            <Link
                                to="https://mentalhealthchart.com/book-appointment/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlckhlYWx0aGllSWQiOiI4Nzk4NjYiLCJsb2NhdGlvbkhlYWx0aGllSWQiOiI2MzYyOSIsInByYWN0aWNlTmFtZSI6IkJyaWdodExpZmUgRW5oYW5jZW1lbnQgU2VydmljZXMiLCJwcmFjdGljZUlkIjoxMDIyMywicHJvdmlkZXJGdWxsTmFtZSI6Ik1pYSBBbCIsInRlbmFudElkIjoiMTY5NDY4NDUtNzYwNy00MGU0LTkxOTItMjBkYzU3N2I0NTgwIiwicHJlc2NyZWVuaW5nRm9ybSI6dHJ1ZSwiY3VzdG9tRm9ybUlkIjoiNDhjNmEzYzgtMjJlYi00ZjRmLWIwN2UtMTRmNmE4MjFlNTE1IiwicmVhc29uRm9yVmlzaXQiOnRydWUsIm1haW5QcmFjdGljZUlkIjoxMDIyMywic21zRW5hYmxlZCI6dHJ1ZSwic21zUmVtaW5kZXJzRW5hYmxlZCI6ZmFsc2UsImlhdCI6MTc0NTI2ODgwNn0.g3TWHfRuZ03RPvRq25WuE34Wot-h6hJoDuoj3hP8JFs"
                                target="_blank"
                                className="underline underline-offset-2"
                            >
                                Make an Appointment
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-darkBlue">
                <div className="container relative pt-8 md:pt-16">
                    <SectionHeader bgTitle="Statistics" bgTitleOnly={true} />

                    <div className="flex flex-col items-start blg:flex-row blg:justify-center gap-10 blg:gap-14 -mt-28 px-5 py-10 md:py-20 b2xl:px-0 relative z-20">
                        <div className="stats grid grid-cols-1 bsm:grid-cols-2 gap-10">
                            {statsData.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="flex flex-col gap-6"
                                >
                                    {stat.icon}
                                    <div className="space-y-3">
                                        {inView && (
                                            <p className="text-[35px] md:text-[45px] leading-[35px] lg:text-[55px] font-medium text-white font-poppins">
                                                <CountUp
                                                    start={0}
                                                    end={stat.val}
                                                    duration={4}
                                                    separator=","
                                                />
                                                <span className="">+</span>
                                            </p>
                                        )}
                                        <p className="text-[20px] leading-[28px] text-[#FFFFFFA6] font-rubik">
                                            {stat.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="font-poppins bg-white text-deepGrey p-6 lg:px-[50px] blg:-mt-10 w-full blg:w-[470px] relative">
                            <h2 className="text-3xl font-semibold mb-5">
                                <span className="text-lg block text-originalGreen">
                                    Make an
                                </span>
                                <span className="">Appointment</span>
                            </h2>
                            <LiaUserNurseSolid className="absolute right-0 bottom-0 md:-right-14 md:-bottom-10 text-[200px] md:text-[300px] text-lightGrey opacity-20" />

                            <div className="py-4 flex flex-col gap-6 md:gap-8 relative">
                                <h3 className="text-lg md:text-xxl font-medium">
                                    Start your journey with{" "}
                                    <span className="font-bol text-originalGreen">
                                        BrightLife Enhacement Services
                                    </span>{" "}
                                    today.
                                </h3>
                                <p className="md:text-lg font-medium text-justify">
                                    <em className="">
                                        "Every day is a new opportunity for
                                        change. Together, we can build a{" "}
                                        <span className="text-originalGreen">
                                            brighter
                                        </span>{" "}
                                        future filled with hope and resilience."
                                    </em>
                                </p>
                                <LinkButton
                                    name="Schedule Now"
                                    to="https://mentalhealthchart.com/book-appointment/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlckhlYWx0aGllSWQiOiI4Nzk4NjYiLCJsb2NhdGlvbkhlYWx0aGllSWQiOiI2MzYyOSIsInByYWN0aWNlTmFtZSI6IkJyaWdodExpZmUgRW5oYW5jZW1lbnQgU2VydmljZXMiLCJwcmFjdGljZUlkIjoxMDIyMywicHJvdmlkZXJGdWxsTmFtZSI6Ik1pYSBBbCIsInRlbmFudElkIjoiMTY5NDY4NDUtNzYwNy00MGU0LTkxOTItMjBkYzU3N2I0NTgwIiwicHJlc2NyZWVuaW5nRm9ybSI6dHJ1ZSwiY3VzdG9tRm9ybUlkIjoiNDhjNmEzYzgtMjJlYi00ZjRmLWIwN2UtMTRmNmE4MjFlNTE1IiwicmVhc29uRm9yVmlzaXQiOnRydWUsIm1haW5QcmFjdGljZUlkIjoxMDIyMywic21zRW5hYmxlZCI6dHJ1ZSwic21zUmVtaW5kZXJzRW5hYmxlZCI6ZmFsc2UsImlhdCI6MTc0NTI2ODgwNn0.g3TWHfRuZ03RPvRq25WuE34Wot-h6hJoDuoj3hP8JFs"
                                    target="_blank"
                                    icon={<RiCalendarScheduleLine />}
                                    classAttrs=""
                                    bgColor="green"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsAppointment;
