import { Link } from "react-router-dom";
import moreImg from "../../../../assets/behavioral-disorder2.jpg";
import SectionHeader from "../../../../components/SectionHeader";

import { CgChevronDoubleRight } from "react-icons/cg";

import { servicesData } from "../../services/data";

const data = [
    servicesData[0],
    servicesData[1],
    servicesData[5],
    {
        id: 99,
        name: "More Services",
        advertText: "Discover more ways we can support your well-being.",
        imgClass: "bg-more-services-image",
        image: moreImg,
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
                    {data.map((service) => (
                        <div
                            key={service.id}
                            className="relative w-full max-w-sm"
                            data-aos="zoom-in"
                        >
                            <Link
                                to={service.link || `/services/${service.id}`}
                                className=""
                            >
                                <img
                                    src={service.image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </Link>

                            <div className="group font-rubik w-10/12 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white py-5 px-6 space-y-2 text-center shadow-xl z-10">
                                <Link
                                    to={
                                        service.link ||
                                        `/services/${service.id}`
                                    }
                                    className="md:text-[22px] text-darkBlue hover:text-vividRed font-semibold"
                                >
                                    {service.name}
                                </Link>
                                <p className="text-sm md:text-base text-grey">
                                    {service.advertText}
                                </p>
                                <Link
                                    to={
                                        service.link ||
                                        `/services/${service.id}`
                                    }
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
