import { Link } from "react-router-dom";
import anxietyImg from "../../../assets/anxiety.jpg";
import psycoticImg from "../../../assets/behavioral-disorder.jpg";
import moreImg from "../../../assets/behavioral-disorder2.jpg";
import depressionImg from "../../../assets/depression.jpg";
import SectionHeader from "../../../components/SectionHeader";

import { CgChevronDoubleRight } from "react-icons/cg";

const servicesData = [
    {
        id: 1,
        title: "Anxiety Disorder",
        descr: "Find peace with our effective anxiety treatments.",
        imgClass: "bg-anxiety-service-image",
        img: anxietyImg,
        link: "/services/#",
    },
    {
        id: 2,
        title: "Psychotic Disorder",
        descr: "Reconnect with reality through our compassionate care.",
        imgClass: "bg-psychotic-service-image",
        img: psycoticImg,
        link: "/services/#",
    },
    {
        id: 3,
        title: "Depression",
        descr: "Rediscover joy with our supportive depression programs.",
        imgClass: "bg-depression-service-image",
        img: depressionImg,
        link: "/services/#",
    },
    {
        id: 4,
        title: "More Services",
        descr: "Discover more ways we can support your well-being.",
        imgClass: "bg-more-services-image",
        img: moreImg,
        link: "/services",
    },
];

const Services = () => {
    return (
        <section className="py-8 md:py-20">
            <div className="w-full max-w-[1320px] mx-auto px-4 pb-10">
                <SectionHeader
                    bgTitle="Services"
                    primaryTitle="Services We Provide"
                    secondaryTitle="Our Services"
                    titleAlignment="center"
                />

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-28">
                    {servicesData.map((service) => (
                        <div key={service.id} className="relative w-full max-w-sm" data-aos="zoom-in">
                            <Link to={service.link} className="">
                                <img src={service.img} alt="" className="w-full h-full object-cover" />
                            </Link>

                            <div className="group font-rubik w-10/12 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white py-5 px-6 space-y-2 text-center shadow-xl z-10">
                                <Link to={service.link} className="md:text-[22px] text-darkBlue hover:text-vividRed font-semibold">
                                    {service.title}
                                </Link>
                                <p className="text-sm md:text-base text-grey">{service.descr}</p>
                                <Link
                                    to={service.link}
                                    className="text-vividRed text-sm md:text-base font-semibold font-poppins hidden md:group-hover:inline-flex items-center gap-1"
                                >
                                    <span className="">Read More</span>
                                    <CgChevronDoubleRight className="" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
