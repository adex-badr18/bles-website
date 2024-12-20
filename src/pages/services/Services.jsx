import SectionHeader from "../../components/SectionHeader";
import sectionBg from "../../assets/section-bg.jpg";
import ServiceCard from "../landing/components/ServiceCard";
import { FaBrain } from "react-icons/fa";
import { servicesData } from "./data";

const Services = () => {
    return (
        <section
            className={`py-8 md:py-20 px-6 b2xl:px-0 h-full bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url("${sectionBg}")` }}
        >
            <div className="wrapper space-y-6 md:space-y-12">
                <SectionHeader
                    bgTitle="Services"
                    primaryTitle="Services we Provide"
                    secondaryTitle="Our Services"
                />

                <div className="flex flex-col justify-center md:flex-row md:items-start flex-wrap gap-4 md:gap-8">
                    {servicesData.map((service) => {
                        console.log(typeof service.name.length)
                        const title = service.name.length 
                        return (
                            <ServiceCard
                            key={service.id}
                                icon={service.icon}
                                title={
                                    service.name.length > 16
                                        ? service.shortName
                                        : service.name
                                }
                                descr={service.summary}
                                link={`/services/${service.id}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
