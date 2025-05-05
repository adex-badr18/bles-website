import { Link } from "react-router-dom";
import SectionHeader from "../../../../components/SectionHeader";

import moreImg from "../../../../assets/behavioral-disorder2.jpg";
import substanceImg from "../../../../assets/substance-use.webp";
import bipolarImg from "../../../../assets/bipolar.webp";

import sectionBg from "../../../../assets/section-bg.jpg";

import { CgChevronDoubleRight } from "react-icons/cg";

import { servicesData } from "../../services/data";
import { programsData } from "../../programs/data";
import ProgramCard from "../../programs/components/ProgramCard";

const data = [
    {
        id: 1,
        name: "Medication Management",
        image: substanceImg,
    },
    {
        id: 2,
        name: "Family/Group Therapy/Counselling",
        image: moreImg,
    },
    {
        id: 3,
        name: "Psychiatric Rehabilitation Program",
        image: bipolarImg,
    },
];

const Programs = () => {
    return (
        <section
            className="py-8 md:py-20 h-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${sectionBg}")` }}
        >
            <div className="w-full max-w-[1320px] mx-auto px-4 pb-10">
                <SectionHeader
                    bgTitle="Programs"
                    primaryTitle="Supportive Care Programs"
                    secondaryTitle="Our Programs"
                    titleAlignment="center"
                />

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-28">
                    {[programsData[0], programsData[1], programsData[3]].map(
                        (program) => (
                            <ProgramCard
                                key={program.id}
                                name={program.name}
                                link={`/programs/${program.id}`}
                                image={program.image}
                            />
                        )
                    )}
                </div>
            </div>

            <div className="mt-16">
                <Link
                    to={`/programs`}
                    className="flex items-center justify-center gap-1 text-originalGreen font-poppins font-semibold text-base animate-bounce duration-500"
                >
                    <span className="">More Programs</span>
                    <CgChevronDoubleRight className="text-lg" />
                </Link>
            </div>
        </section>
    );
};

export default Programs;
