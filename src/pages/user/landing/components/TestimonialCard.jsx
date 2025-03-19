import { MdOutlineFormatQuote } from "react-icons/md";

const TestimonialCard = ({ image, message, name, profession }) => {    
    return (
        <div className="flex items-start gap-6">
            {/* <div className="hidden md:block flex-shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-[150px] h-[150px] rounded-full object-cover"
                />
            </div> */}

            <div className="content-wrapper flex-1 space-y-4">
                <p className="text-deepGrey text-base leading-[28px] font-rubik">
                    {message}
                </p>

                <div className="flex items-start gap-2">
                    <MdOutlineFormatQuote className="text-vividRed text-[35px]" />
                    <div className="">
                        <h3 className="text-darkBlue text-xl font-semibold leading-[32px]">
                            {name}
                        </h3>
                        {/* <p className="text-grey font-rubik leading-[28px]">
                            {profession}
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
