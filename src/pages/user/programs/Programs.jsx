import SectionHeader from "../../../components/SectionHeader";
import sectionBg from "../../../assets/section-bg.jpg";
import ServiceCard from "../landing/components/ServiceCard";
import { FaBrain } from "react-icons/fa";
import { programsData } from "./data";
import ProgramCard from "./components/ProgramCard";

const Programs = () => {
    return (
        <section
            className={`py-8 md:py-20 px-6 b2xl:px-0 h-full bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url("${sectionBg}")` }}
        >
            <div className="wrapper space-y-6 md:space-y-12">
                <SectionHeader
                    bgTitle="Programs"
                    primaryTitle="Supportive Care Programs"
                    secondaryTitle="Our Programs"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center justify-items-center gap-x-4 gap-y-24 md:gap-x-8 md:gap-y-32">
                    {programsData.map((program) => (
                        <ProgramCard    
                            key={program.id}
                            name={program.name}
                            link={`/programs/${program.id}`}
                            image={program.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
