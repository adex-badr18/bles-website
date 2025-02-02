import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import SectionHeader from "../../../components/SectionHeader";
import ExpertCard from "./ExpertCard";
import islammiyyah from "../../../assets/specialists/islammiyyah-al-ameen.jpeg";
import jennifer from "../../../assets/specialists/jennifer-pierce.jpeg";
import isoken from "../../../assets/specialists/isoken-e.png";
import opanin from "../../../assets/specialists/placeholder-male.png";
import irene from "../../../assets/specialists/female-placeholder.png";
import bukola from "../../../assets/specialists/female-placeholder.png";

const expertsData = [
    {
        id: 1,
        image: islammiyyah,
        name: "Islammiyyah Al-Ameen",
        link: "/experts/1",
        specialization: "Provider",
    },
    {
        id: 2,
        image: jennifer,
        name: "Jennifer Pierce",
        link: "/experts/2",
        specialization: "Lead Counselor",
    },
    // {
    //     id: 3,
    //     image: isoken,
    //     name: "Isoken E.",
    //     link: "/experts/3",
    //     specialization: "PRP Coordinator",
    // },
    // {
    //     id: 4,
    //     image: opanin,
    //     name: "Opanin Ba Fosu",
    //     link: "/experts/4",
    //     specialization: "Medical Director",
    // },
    {
        id: 5,
        image: irene,
        name: "Irene Nabalamba",
        link: "/experts/4",
        specialization: "Lead Therapist",
    },
    {
        id: 6,
        image: bukola,
        name: "Bukola Almaroof",
        link: "/experts/4",
        specialization: "Rehab Specialist",
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
                                    link={expert.link}
                                />
                            </SwiperSlide>
                        ))}

                        <div className="hidden md:flex items-center justify-between absolute inset-x-4 inset-y-0 z-50 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button
                                ref={prevBtn}
                                className="prev-button bg-vividRed hover:bg-lightGreen text-white rounded-full p-4 shadow"
                            >
                                <FaLongArrowAltLeft />
                            </button>
                            <button
                                ref={nextBtn}
                                className="next-button bg-vividRed hover:bg-lightGreen text-white rounded-full p-4 shadow"
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
