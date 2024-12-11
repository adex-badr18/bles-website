import { useState } from "react";

import { Link } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaUserDoctor } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { GiLaurelCrown } from "react-icons/gi";
import { LiaUsersSolid, LiaUserNurseSolid } from "react-icons/lia";
import { RiSendPlaneLine } from "react-icons/ri";
import { TbSend } from "react-icons/tb";

const statsData = [
    {
        id: 1,
        title: "Professional Specialists",
        val: 25,
        icon: <FaUserDoctor className="text-lightGreen text-[80px]" />,
    },
    {
        id: 1,
        title: "Satisfied Patients",
        val: 1030,
        icon: <LiaUsersSolid className="text-lightGreen text-[80px]" />,
    },
    {
        id: 1,
        title: "Years of Experience",
        val: 15,
        icon: <GrAchievement className="text-lightGreen text-[80px]" />,
    },
    {
        id: 1,
        title: "Acclaimed Recognition",
        val: 178,
        icon: <GiLaurelCrown className="text-lightGreen text-[80px]" />,
    },
];

const StatsAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <section className="py-8 md:py-20">
            <div className="bg-vividRed py-6 px-4">
                <div className="w-full max-w-[1320px] mx-auto">
                    <div className="flex items-center justify-center">
                        <p className="text-lg font-poppins font-semibold text-white text-center">
                            Ready to get our medical care? We're always
                            available to serve you,{" "}
                            <Link
                                to="/appointment"
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
                                        <p className="text-[35px] md:text-[45px] leading-[35px] lg:text-[55px] font-medium text-white font-poppins">{`${stat.val}+`}</p>
                                        <p className="text-[20px] leading-[28px] text-[#FFFFFFA6] font-rubik">
                                            {stat.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="font-poppins bg-lightGreen text-white p-[30px] lg:px-[50px] w-full blg:w-[470px] relative">
                            <h2 className="text-3xl font-semibold mb-5">
                                <span className="text-lg block">Make an</span>
                                <span className="">Appointment</span>
                            </h2>
                            <LiaUserNurseSolid className="absolute right-0 bottom-0 md:-right-14 md:-bottom-10 text-[200px] md:text-[300px] text-lightGrey opacity-20" />

                            <form className="py-4 flex flex-col gap-6 md:gap-8 relative">
                                <div className="">
                                    <select
                                        name="service"
                                        id=""
                                        className="text-lg bg-transparent border-b border-white outline-none w-full"
                                    >
                                        <option
                                            value=""
                                            className="text-darkBlue text-base"
                                        >
                                            Choose a Service
                                        </option>
                                        <option
                                            value="anxiety"
                                            className="text-darkBlue text-base"
                                        >
                                            Anxiety
                                        </option>
                                        <option
                                            value="psychotic disorder"
                                            className="text-darkBlue text-base"
                                        >
                                            Psychotic Disorder
                                        </option>
                                        <option
                                            value="depression"
                                            className="text-darkBlue text-base"
                                        >
                                            Depression
                                        </option>
                                        <option
                                            value="other"
                                            className="text-darkBlue text-base"
                                        >
                                            Other
                                        </option>
                                    </select>
                                </div>

                                <div className="">
                                    <select
                                        name="program"
                                        id=""
                                        className="text-lg bg-transparent border-b border-white outline-none w-full"
                                    >
                                        <option
                                            value=""
                                            className="text-darkBlue text-base"
                                        >
                                            Choose a Program
                                        </option>
                                        <option
                                            value="Outpatient"
                                            className="text-darkBlue text-base"
                                        >
                                            Outpatient
                                        </option>
                                        <option
                                            value="Intensive Outpatient"
                                            className="text-darkBlue text-base"
                                        >
                                            Intensive Outpatient
                                        </option>
                                        <option
                                            value="Partial Hospitalization"
                                            className="text-darkBlue text-base"
                                        >
                                            Partial Hospitalization
                                        </option>
                                        <option
                                            value="Residential Program"
                                            className="text-darkBlue text-base"
                                        >
                                            Residential Program
                                        </option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="" className="md:text-lg">
                                        Date and Time
                                    </label>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        dateFormat={`MMMM d, yyyy h:mm aa`}
                                        className="bg-transparent border px-2 py-1 rounded w-full md:text-lg"
                                    />
                                </div>

                                {/* <div className="flex flex-col gap-1">
                                    <label htmlFor="" className="md:text-lg">
                                    Message
                                    </label>
                                    
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="md:text-lg outline-none bg-transparent border border-white rounded px-3 py-2 placeholder:text-[#FFFFFFA6]"
                                        placeholder="Compose message..."
                                        ></textarea>
                                    </div> */}

                                <div className="pt-2">
                                    <button
                                        className={`ml-auto rounded-full bg-transparent hover:bg-white border-2 border-white px-[35px] py-2 flex items-center gap-2 divide-x-2 divide-white hover:divide-lightGreen text-white hover:text-lightGreen font-poppins font-semibold text-nowrap transition duration-500 hover:`}
                                    >
                                        <span className="uppercase text-sm">
                                            Submit Now
                                        </span>
                                        <TbSend className="text-2xl pl-2" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsAppointment;
