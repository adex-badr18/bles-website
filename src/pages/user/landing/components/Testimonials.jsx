import { useRef } from "react";

import SectionHeader from "../../../../components/SectionHeader";
import TestimonialCard from "./TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testImage1 from "../../../../assets/testimonial-1.webp";
import testImage2 from "../../../../assets/testimonial-2.webp";
import testImage3 from "../../../../assets/doc3.webp";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const testimonialsData = [
    {
        id: 1,
        name: "John Budapest",
        message:
            "Lorem ipsum is a dolor sitae amet consctet of and the voluptata laboriosam and then null on the ofen delenitie reiciendis as voliuptibu and the laboriosam on and nulla ideleniti and many lore other important quotes.",
        profession: "Architect",
        image: testImage1,
    },
    {
        id: 2,
        name: "Chris Anthony",
        message:
            "Lorem ipsum is a dolor sitae amet consctet of and the voluptata laboriosam and then null on the ofen delenitie reiciendis as voliuptibu and the laboriosam on and nulla ideleniti and many lore other important quotes.",
        profession: "Software Developer",
        image: testImage2,
    },
    {
        id: 3,
        name: "Mike Taylor",
        message:
            "Lorem ipsum is a dolor sitae amet consctet of and the voluptata laboriosam and then null on the ofen delenitie reiciendis as voliuptibu and the laboriosam on and nulla ideleniti and many lore other important quotes.",
        profession: "Surgeon",
        image: testImage3,
    },
];

const Testimonials = () => {
    const prevButton = useRef();
    const nextButton = useRef();

    return (
        <section className={`py-8 md:py-20`}>
            <div className="container">
                <SectionHeader
                    bgTitle="Feedback"
                    primaryTitle="What Patients Say About Our Services"
                    secondaryTitle="Our Testimonials"
                    titleAlignment="center"
                />

                <div className="px-2 space-y-4 sm:mx-auto w-full sm:max-w-[540px] md:max-w-[760px] blg:max-w-[990px] bxl:max-w-[1170px] b2xl:max-w-[1320px]">
                    <div className="hidden md:flex items-center justify-end gap-3">
                        <button
                            ref={prevButton}
                            className="prev-button bg-vividRed hover:bg-lightGreen text-white rounded-full p-4 shadow"
                        >
                            <FaLongArrowAltLeft />
                        </button>
                        <button
                            ref={nextButton}
                            className="next-button bg-vividRed hover:bg-lightGreen text-white rounded-full p-4 shadow"
                        >
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".pagination-wrapper",
                            bulletClass: "pagination-bullet",
                            bulletActiveClass: "pagination-bullet-active",
                        }}
                        spaceBetween={30}
                        onSwiper={(swiper) => {
                            swiper.params.navigation.prevEl =
                                prevButton.current;
                            swiper.params.navigation.nextEl =
                                nextButton.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        speed={2000}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            1000: { slidesPerView: 2 },
                        }}
                        className="group"
                    >
                        {testimonialsData.map((testimony) => (
                            <SwiperSlide key={testimony.id}>
                                <TestimonialCard
                                    name={testimony.name}
                                    image={testimony.image}
                                    profession={testimony.profession}
                                    message={testimony.message}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="pagination-wrapper flex justify-center gap-2 pt-4"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
