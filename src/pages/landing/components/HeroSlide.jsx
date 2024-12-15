// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"
import { useState, useEffect } from "react";

import LinkButton from "../../../components/LinkButton";

const HeroSlide = ({
    bgTitle,
    primaryText,
    topSmallText,
    bottomSmallText,
    ctaText,
    ctaLink,
    ctaIcon,
    bgImage,
    isActiveSlide,
}) => {
    const [visibleTextIndex, setVisibleTextIndex] = useState(0);

    useEffect(() => {
        if (isActiveSlide) {
            const delays = [1000, 1500, 2000, 2500];
            delays.forEach((delay) =>
                setTimeout(() => setVisibleTextIndex((prev) => prev + 1), delay)
            );
        }

        return () => {
            setVisibleTextIndex(0);
        };
    }, [isActiveSlide]);

    return (
        <div
            className="relative h-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${bgImage}")` }}
        >
            <div className="relative z-10 mx-1 md:mx-14 px-3 py-10 flex flex-col  w-full max-w-[1320px] lg:mx-auto h-full md:h-auto justify-center gap-3 md:gap-5 font-poppins">
                <div
                    className={`${
                        isActiveSlide ? "animate-fade-up" : "opacity-0"
                    } absolute top-0 md:-top-0 text-[70px] md:text-[120px] lg:text-[160px] text-transparent font-bold capitalize -z-10 bg-clip-text bg-gradient-to-b from-white from-10% to-70% select-none`}
                >
                    {bgTitle}
                </div>

                <div className="flex flex-col items-start gap-6 mt-6 pl-[10px] md:mt-24">
                    <div className="space-y-3 md:space-y-5 w-2/3 md:w-[512px]">
                        <h4
                            className={`text-sm md:text-base text-[#66737D] font-medium ${
                                visibleTextIndex > 0
                                    ? "animate-fade-up"
                                    : "opacity-0"
                            }`}
                        >
                            {topSmallText}
                        </h4>
                        <h1
                            className={`text-2xl sm:text-3xl md:text-7xl text-darkBlue font-semibold md:font-bold capitalize ${
                                visibleTextIndex > 1
                                    ? "animate-fade-up"
                                    : "opacity-0"
                            }`}
                        >
                            {primaryText}
                        </h1>
                        <p
                            className={`text-[#66737D] text-sm md:text-base font-rubik font-medium ${
                                visibleTextIndex > 2
                                    ? "animate-fade-up"
                                    : "opacity-0"
                            }`}
                        >
                            {bottomSmallText}
                        </p>
                    </div>

                    <div
                        className={`${
                            visibleTextIndex > 3
                                ? "animate-fade-up"
                                : "opacity-0"
                        }`}
                    >
                        <LinkButton
                            name={ctaText}
                            to={ctaLink}
                            bgColor="red"
                            icon={ctaIcon}
                            classAttrs="shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
