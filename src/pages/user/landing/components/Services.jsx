import SectionHeader from "../../../../components/SectionHeader";
import ServiceCard from "./ServiceCard";

import { MdOutlineFamilyRestroom, MdGroups2, MdGroup } from "react-icons/md";
import { GiLifeBar } from "react-icons/gi";

import { PiHeartbeat } from "react-icons/pi";

const Services = () => {
    return (
        <section className={`py-8 md:py-20`}>
            <div className="container">
                <SectionHeader
                    bgTitle="Services"
                    primaryTitle="Supportive Care Services"
                    secondaryTitle="Our Services"
                />

                <div
                    className={`space-y-8 md:space-y-32 md:bg-service-center-image bg-center bg-no-repeat`}
                >
                    <div className="px-5 md:px-10 lg:px-28 xl:px-40 flex flex-col sm:flex-row sm:justify-between gap-8">
                        <ServiceCard
                            icon={
                                <MdGroup className="text-deepGreen text-5xl md:text-7xl" />
                            }
                            title="Individual/Couples Therapy"
                            descr="Offers compassionate support to help you navigate personal challenges & strengthen your relationships."
                            data-aos="fade-down-right"
                            data-aos-delay=""
                        />

                        <ServiceCard
                            icon={
                                <GiLifeBar className="text-deepGreen text-5xl md:text-7xl" />
                            }
                            title="Lifestyle Coaching"
                            descr="Encourages healthy lifestyle (nutrition, exercise, & sleep hygiene) to improve mood and energy levels."
                            data-aos="fade-up-right"
                            data-aos-delay=""
                        />
                    </div>

                    <div className="px-5 md:px-20 lg:px-44 xl:px-60 flex flex-col sm:flex-row sm:justify-between gap-8">
                        <ServiceCard
                            icon={
                                <MdOutlineFamilyRestroom className="text-deepGreen text-5xl md:text-7xl" />
                            }
                            title="Family Counselling"
                            descr="Engages family members in the treatment process, promoting understanding and support."
                            data-aos="fade-down-left"
                            data-aos-delay=""
                        />

                        <ServiceCard
                            icon={
                                <MdGroups2 className="text-deepGreen text-5xl md:text-7xl" />
                            }
                            title="Group Therapy"
                            descr="Offers peer support and connection, reinforcing that you are not alone in your journey."                            
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
