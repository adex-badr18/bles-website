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
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import HeroSlide from "./HeroSlide";

import homeSlider1 from "../../../../assets/mia-hero-bg-3.png";
import homeSlider2 from "../../../../assets/mia-hero-bg.png";
// import homeSlider1 from "../../../../assets/home-slider-1.webp";
// import homeSlider2 from "../../../../assets/home-slider-2.webp";
import miaSlider from "../../../../assets/mia.jpeg"

const slidesData = [
    {
        id: 1,
        bgImage: homeSlider1,
        bgTitle: "Recovery",
        topSmallText: "Welcome to BrightLife Enhancement Services",
        bottomSmallText: "Discover personalized pathways to recovery with BrightLife Enhancement Services.",
        primaryText: "Renew Hope for a Brighter Tomorrow",
        ctaText: "Get Started",
        ctaLink: "https://mentalhealthchart.com/book-appointment/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlckhlYWx0aGllSWQiOiI4Nzk4NjYiLCJsb2NhdGlvbkhlYWx0aGllSWQiOiI2MzYyOSIsInByYWN0aWNlTmFtZSI6IkJyaWdodExpZmUgRW5oYW5jZW1lbnQgU2VydmljZXMiLCJwcmFjdGljZUlkIjoxMDIyMywicHJvdmlkZXJGdWxsTmFtZSI6Ik1pYSBBbCIsInRlbmFudElkIjoiMTY5NDY4NDUtNzYwNy00MGU0LTkxOTItMjBkYzU3N2I0NTgwIiwicHJlc2NyZWVuaW5nRm9ybSI6dHJ1ZSwiY3VzdG9tRm9ybUlkIjoiNDhjNmEzYzgtMjJlYi00ZjRmLWIwN2UtMTRmNmE4MjFlNTE1IiwicmVhc29uRm9yVmlzaXQiOnRydWUsIm1haW5QcmFjdGljZUlkIjoxMDIyMywic21zRW5hYmxlZCI6dHJ1ZSwic21zUmVtaW5kZXJzRW5hYmxlZCI6ZmFsc2UsImlhdCI6MTc0NTI2ODgwNn0.g3TWHfRuZ03RPvRq25WuE34Wot-h6hJoDuoj3hP8JFs",
        ctaIcon: <RiCalendarScheduleLine size="16" />,
    },
    {
        id: 2,
        bgTitle: "Mental Health",
        bgImage: homeSlider2,
        topSmallText: "Welcome to BrightLife Enhancement Services",
        bottomSmallText: "Our compassionate team guides you towards lasting wellness with tailored support and professional care.",
        primaryText: "Behavioral/Mental Health & Recovery Solutions.",
        ctaText: "Get Started",
        ctaLink: "https://mentalhealthchart.com/book-appointment/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlckhlYWx0aGllSWQiOiI4Nzk4NjYiLCJsb2NhdGlvbkhlYWx0aGllSWQiOiI2MzYyOSIsInByYWN0aWNlTmFtZSI6IkJyaWdodExpZmUgRW5oYW5jZW1lbnQgU2VydmljZXMiLCJwcmFjdGljZUlkIjoxMDIyMywicHJvdmlkZXJGdWxsTmFtZSI6Ik1pYSBBbCIsInRlbmFudElkIjoiMTY5NDY4NDUtNzYwNy00MGU0LTkxOTItMjBkYzU3N2I0NTgwIiwicHJlc2NyZWVuaW5nRm9ybSI6dHJ1ZSwiY3VzdG9tRm9ybUlkIjoiNDhjNmEzYzgtMjJlYi00ZjRmLWIwN2UtMTRmNmE4MjFlNTE1IiwicmVhc29uRm9yVmlzaXQiOnRydWUsIm1haW5QcmFjdGljZUlkIjoxMDIyMywic21zRW5hYmxlZCI6dHJ1ZSwic21zUmVtaW5kZXJzRW5hYmxlZCI6ZmFsc2UsImlhdCI6MTc0NTI2ODgwNn0.g3TWHfRuZ03RPvRq25WuE34Wot-h6hJoDuoj3hP8JFs",
        ctaIcon: <RiCalendarScheduleLine size="16" />,
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
                autoplay={{ delay: 10000, disableOnInteraction: false }}
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
                        className="prev-button bg-deepGreen hover:bg-originalGreen text-white rounded-full p-4 shadow-2xl transition-colors duration-300"
                    >
                        <FaLongArrowAltLeft />
                    </button>
                    <button
                        ref={nextButton}
                        className="next-button bg-deepGreen hover:bg-originalGreen text-white rounded-full p-4 shadow-2xl transition-colors duration-300"
                    >
                        <FaLongArrowAltRight />
                    </button>
                </div>
            </Swiper>
        </section>
    );
};

export default Hero;
