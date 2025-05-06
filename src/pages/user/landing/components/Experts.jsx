import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import SectionHeader from "../../../../components/SectionHeader";
import ExpertCard from "./ExpertCard";
import oluwadara from "../../../../assets/specialists/oluwadara.webp";
import islammiyyah from "../../../../assets/specialists/mia.webp";
import jennifer from "../../../../assets/specialists/jenifer.webp";
import abiola from "../../../../assets/specialists/abiola.webp";
import dora from "../../../../assets/specialists/dora.webp";
import irene from "../../../../assets/specialists/irene.webp";
import bukola from "../../../../assets/specialists/bukola.webp";
import piro from "../../../../assets/specialists/piro.webp";

const expertsData = [
    {
        id: 1,
        image: oluwadara,
        name: "Oluwadara O.",
        cert: "CRNP, PMHNP-BC",
        link: "/experts/1",
        specialization: "Clinical Director",
    },
    {
        id: 2,
        image: islammiyyah,
        name: "Islammiyyah A.",
        cert: "CRNP, PMHNP-BC",
        link: "/experts/2",
        specialization: "Medical Director",
    },
    {
        id: 3,
        image: jennifer,
        name: "Jennifer P.",
        cert: "LCPC",
        link: "/experts/3",
        specialization: "Lead Counselor",
    },
    {
        id: 4,
        image: bukola,
        name: "Bukola A.",
        cert: "CPRP",
        link: "/experts/4",
        specialization: "Rehab Specialist",
    },
    {
        id: 5,
        image: irene,
        name: "Irene N.",
        cert: "LCSW-C",
        link: "/experts/5",
        specialization: "Lead Therapist",
    },
    {
        id: 6,
        image: abiola,
        name: "Abiola T.",
        cert: "",
        link: "/experts/6",
        specialization: "Lead PRP Coordinator",
    },
    {
        id: 7,
        image: dora,
        name: "Dora Rice",
        cert: "MLT, MA, CPT",
        link: "/experts/7",
        specialization: "Business Ops/Compliance Manager",
    },
    {
        id: 8,
        image: piro,
        name: "Jacquiline P.",
        cert: "",
        link: "/experts/8",
        specialization: "Graduate Counselor/Intern",
    },
];

const Experts = () => {
    const prevBtn = useRef();
    const nextBtn = useRef();

    return (
        <section className="py-8 md:py-20 space-y-6">
            <div className="w-full max-w-[1320px] mx-auto">
                <SectionHeader
                    bgTitle="Doctors"
                    primaryTitle="Our Expert Doctors"
                    secondaryTitle="Meet Our Specialists"
                    titleAlignment="center"
                />

                <div className="px-2 sm:mx-auto w-full sm:max-w-[540px] md:max-w-[760px] blg:max-w-[990px] bxl:max-w-[1170px] b2xl:max-w-[1320px]">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        speed={2000}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        onSwiper={(swiper) => {
                            swiper.params.navigation.prevEl = prevBtn.current;
                            swiper.params.navigation.nextEl = nextBtn.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1.5 },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: { slidesPerView: 3 },
                        }}
                        className="group w-full"
                    >
                        {expertsData.map((expert) => (
                            <SwiperSlide key={expert.id}>
                                <ExpertCard
                                    image={expert.image}
                                    name={expert.name}
                                    specialization={expert.specialization}
                                    cert={expert.cert}
                                    link={expert.link}
                                />
                            </SwiperSlide>
                        ))}

                        <div className="hidden md:flex items-center justify-between absolute inset-x-4 inset-y-0 z-50 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button
                                ref={prevBtn}
                                className="prev-button bg-deepGreen hover:bg-originalGreen text-white rounded-full p-4 shadow transition-colors duration-300"
                            >
                                <FaLongArrowAltLeft />
                            </button>
                            <button
                                ref={nextBtn}
                                className="next-button bg-deepGreen hover:bg-originalGreen text-white rounded-full p-4 shadow transition-colors duration-300"
                            >
                                <FaLongArrowAltRight />
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Experts;
