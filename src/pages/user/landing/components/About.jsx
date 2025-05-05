import SectionHeader from "../../../../components/SectionHeader";
import aboutImage from "../../../../assets/logo-mark.png";
// import aboutImage from "../../../../assets/three-image.png";
import LinkButton from "../../../../components/LinkButton";

import { CgChevronDoubleRight } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";

import { LiaCapsulesSolid } from "react-icons/lia";
import { LuStethoscope, LuBrainCircuit } from "react-icons/lu";
import { RiPsychotherapyLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiStethoscope } from "react-icons/pi";
import { Link } from "react-router-dom";

const servicesData = [
    {
        id: 1,
        text: "Medication Management",
        icon: (
            <LiaCapsulesSolid className="text-originalGreen text-6xl md:text-[80px]" />
        ),
    },
    {
        id: 2,
        text: "Group/Individual Therapy",
        icon: (
            <PiStethoscope className="text-originalGreen text-6xl md:text-[80px]" />
        ),
    },
    {
        id: 3,
        text: "Psychiatric Rehabilitation",
        icon: (
            <RiPsychotherapyLine className="text-originalGreen text-6xl md:text-[80px]" />
        ),
    },
    {
        id: 4,
        text: "SUD Program",
        icon: (
            <MdOutlineHealthAndSafety className="text-originalGreen text-6xl md:text-[80px]" />
        ),
    },
];

const About = () => {
    return (
        <section className="p-8 md:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center gap-20 w-full min-w-0  max-w-[1320px] mx-auto">
                <div className="hidden lg:block">
                    <img src={aboutImage} alt="" className="object-cover" />
                </div>

                <div className="">
                    <SectionHeader
                        bgTitle="About"
                        primaryTitle="BrightLife Enhancement Services (BLES)"
                        secondaryTitle="About Us"
                        titleAlignment=""
                    />

                    <div className="space-y-10">
                        <div className="space-y-5">
                            <p className="font-rubik text-grey leading-[28px] text-justify">
                                <span className="text-originalGreen font-bold">
                                    BrightLife Enhancement Services
                                </span>{" "}
                                was founded by Mia (Islammiyyah Al-Ameen) with a
                                clear mission: to break the cycle and empower
                                individuals to lead functional, fulfilling lives
                                within their communities. She believed that true
                                healing happens beyond hospital walls—within
                                supportive environments where people are guided,
                                heard, and valued.
                            </p>

                            <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center gap-5">
                                <LinkButton
                                    name="Learn More"
                                    to="/about"
                                    bgColor="green"
                                    icon={
                                        <CgChevronDoubleRight className="text-base" />
                                    }
                                />

                                <div className="flex items-center gap-5">
                                    <FiPhoneCall className="text-deepGreen text-[40px]" />
                                    <Link
                                        to="tel:4109882655"
                                        className="text-darkBlue text-[20px] font-medium font-rubik"
                                    >
                                        +1(410)-988-2655
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {servicesData.map((service) => (
                                <div
                                    key={service.id}
                                    className="flex flex-col gap-3 items-center"
                                >
                                    {service.icon}
                                    <span className="text-darkBlue text-center font-poppins font-semibold">
                                        {service.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
