import { useRef, useState, useEffect } from "react";
import { useGetPublishedReviews } from "../../../../hooks/useReviews";

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
import Spinner from "../../../../components/Spinner";

const fallbackReviews = [
    {
        id: 1,
        name: "Jamie Lee",
        message:
            "BrightLife Enhancement Services offered me unparalleled support during my recovery. Their dedicated team crafted a personalized plan that truly resonated with me, promoting lasting change. I am grateful for their unwavering commitment to my well-being.",
    },
    {
        id: 2,
        name: "Alex Morgan",
        message:
            "BrightLife Enhancement Services transformed my life! Their compassionate and skilled team helped me navigate my recovery journey with personalized care. I now feel stronger, more confident, and ready to embrace the future. Highly recommend their services to anyone seeking positive change.",
    },
    {
        id: 3,
        name: "Taylor Smith",
        message:
            "BrightLife Enhancement Services provided the guidance and support I needed to reclaim my life. Their team's expertise and genuine care made my recovery journey a transformative experience. I am forever grateful for the hope and resilience they instilled in me.",
    },
];

const Testimonials = () => {
    const prevButton = useRef();
    const nextButton = useRef();

    const [testimonialsData, setTestimonialsData] = useState([]);
    const { data, isLoading, isSuccess, isError, error } =
        useGetPublishedReviews({setTestimonialsData, fallbackReviews});

    // console.log(data);

    useEffect(() => {
        if (data?.reviews.length > 0) {
            const transformedReviews = data?.reviews.map((review, index) => ({
                id: review.id || index,
                name: review.nickname,
                message: review.message,
            }));

            setTestimonialsData(transformedReviews);
        } else {
            setTestimonialsData(fallbackReviews);
        }

        if (isError) {
            setTestimonialsData(fallbackReviews);
        }
    }, [data, isSuccess, isError]);

    return (
        <section className={`py-8 md:py-20`}>
            <div className="container">
                <SectionHeader
                    bgTitle="Feedback"
                    primaryTitle="What Patients Say About Our Services"
                    secondaryTitle="Our Testimonials"
                    titleAlignment="center"
                />

                {isLoading && (
                    <Spinner
                        secondaryText="Loading testimonials"
                        borderClass="border-lightGreen"
                        spinnerSize="w-8 h-8"
                    />
                )}

                {isError && (
                    <div className="text-vividRed">
                        {error.message || "Error loading testimonials."}
                    </div>
                )}

                {testimonialsData.length === 0 && (
                    <div className="text-deepGrey text-center font-medium">
                        No reviews published yet.
                    </div>
                )}

                {isSuccess && testimonialsData.length !== 0 && (
                    <div className="px-2 space-y-4 sm:mx-auto w-full sm:max-w-[540px] md:max-w-[760px] blg:max-w-[990px] bxl:max-w-[1170px] b2xl:max-w-[1320px]">
                        <div className="hidden md:flex items-center justify-end gap-3">
                            <button
                                ref={prevButton}
                                className="prev-button bg-deepGreen hover:bg-originalGreen text-white rounded-full p-4 shadow transition-colors duration-300"
                            >
                                <FaLongArrowAltLeft />
                            </button>
                            <button
                                ref={nextButton}
                                className="next-button bg-deepGreen hover:bg-originalGreen text-white rounded-full p-4 shadow transition-colors duration-300"
                            >
                                <FaLongArrowAltRight />
                            </button>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 10000,
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
                )}
            </div>
        </section>
    );
};

export default Testimonials;
