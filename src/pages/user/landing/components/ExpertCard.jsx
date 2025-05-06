import { Link } from "react-router-dom";

const ExpertCard = ({ image, name, specialization, cert, link }) => {
    return (
        <div className="w-full max-w-80 flex flex-col items-center">
            <div className="">
                <img
                    src={image}
                    alt=""
                    className="rounded h-[300px] object-contain"
                />
            </div>
            <div className="flex flex-col items-center gap-[2px] font-poppins">
                <h4 className="text-base md:text-xl text-deepGreen font-semibold">
                    {name}
                </h4>
                <span className="text-sm md:text-base font-medium text-deepGrey">{cert}</span>
                <span className="text-sm md:text-base text-deepGrey">
                    {specialization}
                </span>
            </div>
        </div>
    );
};

export default ExpertCard;
