import SectionHeader from "../../../components/SectionHeader";
import sectionBg from "../../../assets/section-bg.jpg";
import ServiceCard from "../landing/components/ServiceCard";
import { FaBrain } from "react-icons/fa";
import { supportiveServicesData, conditionsData } from "./data";
import StaticDivider from "../../../components/StaticDivider";

const Services = () => {
    return (
        <section
            className={`py-8 md:py-20 px-6 b2xl:px-0 h-full bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url("${sectionBg}")` }}
        >
            <div className="wrapper space-y-6 md:space-y-14">
                <SectionHeader
                    bgTitle="Services"
                    primaryTitle="Services we Provide"
                    secondaryTitle="Our Services"
                />

                <div className="space-y-6 md:space-y-14 w-full max-w-5xl mx-auto">
                    <div className="space-y-5 md:space-y-10">
                        <h3 className="text-originalGreen text-2xl font-semibold">
                            Our Supportive Care Services
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                            {supportiveServicesData.map((service, index) => {
                                return index ===
                                    supportiveServicesData.length - 1 ? (
                                    <ServiceCard
                                        key={service.id}
                                        icon={service.icon}
                                        title={service.name}
                                        descr={service.descr}
                                        id="conditions"
                                    />
                                ) : (
                                    <ServiceCard
                                        key={service.id}
                                        icon={service.icon}
                                        title={service.name}
                                        descr={service.descr}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <StaticDivider />

                    <div className="space-y-5 md:space-y-10">
                        <h3 className="text-originalGreen text-2xl font-semibold">
                            Conditions We Treat
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                            {conditionsData.map((condition) => {
                                return (
                                    <ServiceCard
                                        key={condition.id}
                                        icon={condition.icon}
                                        title={condition.name}
                                        link={`/conditions/${condition.id}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
