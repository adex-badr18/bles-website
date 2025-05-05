import { Link } from "react-router-dom";
import SectionHeader from "../../../../components/SectionHeader";
import ServiceCard from "./ServiceCard";

import sectionBg from "../../../../assets/section-bg.jpg";

import moreImg from "../../../../assets/behavioral-disorder2.jpg";
import substanceImg from "../../../../assets/substance-use.webp";
import bipolarImg from "../../../../assets/bipolar.webp";

import { CgChevronDoubleRight } from "react-icons/cg";

import { servicesData } from "../../services/data";
import { conditionsData } from "../../services/data";

const Conditions = () => {
    return (
        <section
            className="py-8 md:py-20 h-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${sectionBg}")` }}
        >
            <div className="w-full max-w-[1320px] mx-auto px-4 pb-10">
                <SectionHeader
                    bgTitle="Conditions"
                    primaryTitle="Behavioral & Mental Conditions We Treat"
                    secondaryTitle="Conditions we Treat"
                    titleAlignment="center"
                />

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-11">
                    {conditionsData.map((condition) => (
                        <ServiceCard
                            key={condition.id}
                            icon={condition.icon}
                            title={condition.name}
                            link={`/conditions/${condition.id}`}
                        />
                    ))}

                    {/* <Link
                        to={`/services`}
                        className="flex items-center gap-1 text-vividRed font-poppins font-semibold text-base animate-bounce duration-500"
                    >
                        <span className="">More Services</span>
                        <CgChevronDoubleRight className="text-lg" />
                    </Link> */}
                </div>
            </div>
        </section>
    );
};

export default Conditions;
