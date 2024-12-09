import titleLine from "../assets/title-line-1.webp";

const SectionHeader = ({ bgTitle, primaryTitle, secondaryTitle, titleAlignment }) => {
    return (
        <div className={`relative flex flex-col ${titleAlignment === "left" ? "items-center md:items-start" : "items-center"} justify-center font-poppins text-center py-10`}>
            <div className="absolute -top-3 md:-top-20 text-[70px] md:text-[160px] lg:text-[200px] text-transparent font-bold capitalize z-10 bg-clip-text bg-gradient-to-b from-lightGrey from-10% to-70% opacity-15 select-none">
                {bgTitle}
            </div>

            <div className="space-y-6">
                <div className={`space-y-3 md:space-y-5 ${titleAlignment === "left" ? "text-center md:text-left" : "text-center"} `}>
                    <h4 className={`text-vividRed text-xl font-semibold capitalize`}>
                        {secondaryTitle}
                    </h4>
                    <h2 className="text-darkBlue text-3xl md:text-5xl font-bold capitalize">
                        {primaryTitle}
                    </h2>
                </div>

                <div className={`w-[180px] h-[5px] bg-transparent bg-gradient-to-r from-lightGreen rounded ${titleAlignment === "left" ? "mx-auto md:mx-0" : "mx-auto"} `}></div>
            </div>
        </div>
    );
};

export default SectionHeader;
