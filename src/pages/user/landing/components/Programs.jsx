import SectionHeader from "../../../../components/SectionHeader";
import ServiceCard from "./ServiceCard";
import sectionBg from "../../../../assets/section-bg.jpg";

import { MdOutlineHealthAndSafety, MdOutlineScheduleSend, MdOutlineBedroomParent } from "react-icons/md";
import { PiHeartbeat } from "react-icons/pi";



const Programs = () => {
    return (
        <section
            className={`py-8 md:py-20 h-full bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url("${sectionBg}")` }}
        >
            <div className="container">
                <SectionHeader
                    bgTitle="Programs"
                    primaryTitle="Supportive Care Programs"
                    secondaryTitle="Our Programs"
                />

                <div
                    className={`space-y-8 md:space-y-32 md:bg-service-center-image bg-center bg-no-repeat`}
                >
                    <div className="px-5 md:px-10 lg:px-28 xl:px-40 flex flex-col sm:flex-row sm:justify-between gap-8">
                        <ServiceCard
                            icon={
                                <MdOutlineHealthAndSafety className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="OMHC, Medication Management & Therapy & Counselling Services"
                            descr=""
                            link="/programs/1"
                            data-aos="fade-down-right"
                            data-aos-delay=""
                        />
                        <ServiceCard
                            icon={
                                <PiHeartbeat className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="Low Intensity Residential Housing 3.1"
                            descr=""
                            link="/programs/2"
                            data-aos="fade-down-left"
                            data-aos-delay=""
                        />
                    </div>

                    <div className="px-5 md:px-20 lg:px-44 xl:px-60 flex flex-col sm:flex-row sm:justify-between gap-8">
                        <ServiceCard
                            icon={
                                <MdOutlineScheduleSend className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="Psychiatric Rehabilitation Program (PRP)"
                            descr=""
                            link="/programs/3"
                            data-aos="fade-up-right"
                            data-aos-delay=""
                        />
                        <ServiceCard
                            icon={
                                <MdOutlineBedroomParent className="text-vividRed text-5xl md:text-7xl" />
                            }
                            title="Coming Soon: IOP, PHP"
                            descr=""
                            link="/programs/4"
                            data-aos="fade-up-left"
                            data-aos-delay=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
