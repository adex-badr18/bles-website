import { Link } from "react-router-dom";

const ExpertCard = ({ image, name, specialization, link }) => {
    return (
        <div className="w-full max-w-80 flex flex-col items-center gap-5">
            <div className="image-wrapper group">
                <div to={link} className="relative">
                    <div className="">
                        <img src={image} alt="" className="rounded h-[300px] object-contain" />
                    </div>
                    {/* <div className="absolute -left-6 -bottom-6 flex items-center justify-center p-4 w-20 h-20 rounded-full shadow-sm text-sm text-center font-semibold font-poppins text-white bg-lightGreen group-hover:bg-vividRed cursor-pointer">
                        Explore More
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col items-center gap-[2px] font-poppins">
                <div to={link} className="md:text-[22px] text-darkBlue font-semibold">
                    {name}
                </div>
                <span className="font-medium text-sm md:text-base text-grey">{specialization}</span>
            </div>
        </div>
    );
};

export default ExpertCard;
