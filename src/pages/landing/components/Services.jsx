import SectionHeader from "../../../components/SectionHeader";
import ServiceCard from "./ServiceCard";
import sectionBg from "../../../assets/section-bg.jpg";

import bgImage from "../../../assets/service-center-image.webp";

import { GiBrain } from "react-icons/gi";

const Services = () => {
    console.log(bgImage);
    return (
        <section
            className={`py-8 md:py-20 h-full bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url("${sectionBg}")` }}
        >
            <div className="container">
                <SectionHeader
                    bgTitle="Services"
                    primaryTitle="Services We Provide"
                    secondaryTitle="Our Services"
                />

                <div
                    className={`space-y-8 md:space-y-20 md:bg-service-center-image bg-center bg-no-repeat`}
                >
                    <div className="px-5 md:px-10 lg:px-28 xl:px-40 flex flex-col sm:flex-row sm:justify-between gap-8">
                        <ServiceCard
                            icon={
                                <GiBrain className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="Outpatient Health"
                            descr="Professional mental health or substance use treatment."
                            link="/services/outpatient"
                            data-aos="fade-down-right"
                            data-aos-delay=""
                        />
                        <ServiceCard
                            icon={
                                <GiBrain className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="Intensive Outpatient"
                            descr="More severe challenges with mental health or addiction."
                            link="/services/iop"
                            data-aos="fade-down-left"
                            data-aos-delay=""
                        />
                    </div>

                    <div className="px-5 md:px-20 lg:px-44 xl:px-60 flex flex-col sm:flex-row sm:justify-between gap-8">
                        <ServiceCard
                            icon={
                                <GiBrain className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="Partial Hospitalization"
                            descr="Treatment for individuals who need extensive care."
                            link="/services/php"
                            data-aos="fade-up-right"
                            data-aos-delay=""
                        />
                        <ServiceCard
                            icon={
                                <GiBrain className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="Residential Program"
                            descr="Structured environment for patients needing intensive care."
                            link="/services/neuro"
                            data-aos="fade-up-left"
                            data-aos-delay=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
