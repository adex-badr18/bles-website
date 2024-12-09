import SectionHeader from "../../../components/SectionHeader";
import aboutImage from "../../../assets/three-image.png";
import LinkButton from "../../../components/LinkButton";

import { CgChevronDoubleRight } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";

import { LiaCapsulesSolid } from "react-icons/lia";
import { LuStethoscope, LuBrainCircuit } from "react-icons/lu";
import { RiPsychotherapyLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiStethoscope } from "react-icons/pi";


const servicesData = [
    {
        id: 1,
        text: "Medicine & Health care",
        icon: (
            <LiaCapsulesSolid className="text-vividRed text-6xl md:text-[80px]" />
        ),
    },
    {
        id: 2,
        text: "Doctor & Nurse Service",
        icon: <PiStethoscope className="text-vividRed text-6xl md:text-[80px]" />,
    },
    {
        id: 3,
        text: "Behavioral Care Service",
        icon: (
            <RiPsychotherapyLine className="text-vividRed text-6xl md:text-[80px]" />
        ),
    },
    {
        id: 4,
        text: "Health Care Facility",
        icon: (
            <MdOutlineHealthAndSafety className="text-vividRed text-6xl md:text-[80px]" />
        ),
    },
];

const About = () => {
    return (
        <section className="p-8 md:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 w-full min-w-0  max-w-[1320px] mx-auto">
                <div className="">
                    <img src={aboutImage} alt="" className="object-cover" />
                </div>

                <div className="">
                    <SectionHeader
                        bgTitle="About"
                        primaryTitle="Read About BrightLife Enhancement Services"
                        secondaryTitle="About BrightLife"
                        titleAlignment="left"
                    />

                    <div className="space-y-10">
                        <div className="space-y-5">
                            <p className="font-rubik text-grey leading-[28px] text-justify">
                                <span className="text-vividRed font-bold">
                                    BrightLife Enhancement Services
                                </span>{" "}
                                was created with the goal of helping more people
                                receive quality behavioral health services. As a
                                practice, we adopt a supportive approach.
                                Meaning, each of our clients is our partner in
                                addressing their unique needs. We are also open
                                to working with other care providers for our
                                clients to promote their holistic well-being.
                            </p>

                            <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center gap-5">
                                <LinkButton
                                    name="Learn More"
                                    to="/about"
                                    bgColor="red"
                                    icon={
                                        <CgChevronDoubleRight className="text-base" />
                                    }
                                />

                                <div className="flex items-center gap-5">
                                    <FiPhoneCall className="text-vividRed text-[40px]" />
                                    <span className="text-darkBlue text-[20px] font-medium font-rubik">
                                        +012 (345) 6789
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {servicesData.map((service) => (
                                <div
                                    key={service.id}
                                    className="flex flex-col gap-3"
                                >
                                    {service.icon}
                                    <span className="text-darkBlue font-poppins font-semibold">
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
