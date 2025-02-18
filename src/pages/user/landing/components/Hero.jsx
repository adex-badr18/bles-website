import { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import AOS from "aos";
// import "aos/dist/aos.css";

import {
    MdOutlineMedicalServices,
    MdOutlineMedicalInformation,
} from "react-icons/md";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import HeroSlide from "./HeroSlide";

import homeSlider1 from "../../../../assets/home-slider-1.webp";
import homeSlider2 from "../../../../assets/home-slider-2.webp";
import miaSlider from "../../../../assets/mia.jpeg"

const slidesData = [
    {
        id: 1,
        bgImage: homeSlider1,
        bgTitle: "Mental Health",
        topSmallText: "Welcome to BrightLife Enhancement Services",
        bottomSmallText: "We've 15 years of experience in Behavioral Health.",
        primaryText: "Behavioral/Mental Health & Recovery Solutions.",
        ctaText: "Our Services",
        ctaLink: "/services",
        ctaIcon: <MdOutlineMedicalServices size="16" />,
    },
    {
        id: 2,
        bgTitle: "Recovery",
        bgImage: homeSlider2,
        topSmallText: "Welcome to BrightLife Enhancement Services",
        bottomSmallText: "We've 15 years of experience in Health Care.",
        primaryText: "Behavioral/Mental Health & Recovery Solutions.",
        ctaText: "About Us",
        ctaLink: "/about",
        ctaIcon: <MdOutlineMedicalInformation size="16" />,
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevButton = useRef();
    const nextButton = useRef();

    // useEffect(() => {
    //     AOS.init({
    //         duration: 800,
    //         easing: "ease-in-out-cubic",
    //         once: false,
    //     });
    // }, []);

    // const onSlideChange = () => {
    //     AOS.refresh();
    // };

    return (
        <section className="md:h-screen w-full">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                onSwiper={(swiper) => {
                    swiper.params.navigation.prevEl = prevButton.current;
                    swiper.params.navigation.nextEl = nextButton.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="relative h-full group"
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlide
                            bgImage={slide.bgImage}
                            bgTitle={slide.bgTitle}
                            primaryText={slide.primaryText}
                            topSmallText={slide.topSmallText}
                            bottomSmallText={slide.bottomSmallText}
                            ctaText={slide.ctaText}
                            ctaLink={slide.ctaLink}
                            ctaIcon={slide.ctaIcon}
                            isActiveSlide={activeIndex === index}
                        />
                    </SwiperSlide>
                ))}

                <div className="hidden md:flex items-center justify-between absolute inset-x-4 inset-y-0 z-50 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
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
            </Swiper>
        </section>
    );
};

export default Hero;
