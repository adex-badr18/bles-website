import StaticDivider from "./StaticDivider";

const SectionHeader = ({
    bgTitle,
    bgTitleOnly,
    primaryTitle,
    secondaryTitle,
    titleAlignment,
    ...rest
}) => {
    return (
        <div
            className={`relative flex flex-col ${
                titleAlignment === "left"
                    ? "items-center md:items-start"
                    : "items-center"
            } justify-center font-poppins text-center py-10`}
            {...rest}
        >
            <div
                data-aos="fade-up"
                className="absolute -top-3 md:-top-20 text-[70px] md:text-[160px] lg:text-[200px] text-transparent font-bold capitalize z-10 bg-clip-text bg-gradient-to-b from-lightGrey from-10% to-70% opacity-15 select-none"
            >
                {bgTitle}
            </div>

            <div className={`${bgTitleOnly ? "hidden" : "block"} space-y-6`}>
                <div
                    className={`space-y-3 md:space-y-5 ${
                        titleAlignment === "left"
                            ? "text-center md:text-left"
                            : "text-center"
                    } `}
                >
                    <h4
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className={`text-vividRed text-xl font-semibold capitalize`}
                    >
                        {secondaryTitle}
                    </h4>
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="800"
                        className="text-darkBlue text-3xl md:text-5xl font-bold capitalize"
                    >
                        {primaryTitle}
                    </h2>
                </div>

                {/* <div
                    data-aos="fade-up" data-aos-delay="1000" className={`w-[180px] h-[5px] bg-transparent bg-gradient-to-r from-lightGreen rounded ${
                        titleAlignment === "left"
                            ? "mx-auto md:mx-0"
                            : "mx-auto"
                    } `}
                ></div> */}
                <StaticDivider
                    titleAlignment={titleAlignment}
                    data-aos="fade-up"
                    data-aos-delay="1000"
                />
            </div>
        </div>
    );
};

export default SectionHeader;
