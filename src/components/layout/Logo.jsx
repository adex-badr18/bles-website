import heart from "../../assets/heart.png";
import { MdOutlineStarRate } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import { RiHeartPulseFill } from "react-icons/ri";

const Logo = ({ textColor }) => {
    return (
        <div className="flex items-center gap-1">
            <div className="relative">
                <RiHeartPulseFill className="text-vividRed text-[60px] object-cover" />
                <MdOutlineStarRate className="text-white text-[9px] absolute top-2 left-1/3 -translate-x-1/3" />
                <MdOutlineStarRate className="text-lightGreen text-[9px] absolute top-3 right-1/3 translate-x-1/3" />
                <BiPlusMedical className="text-lightGreen text-lg absolute top-1/2 -translate-y-1/6 right-1 shadow-2xl" />
            </div>

            <div className="flex flex-col text-xl">
                <span
                    className={`font-poppins font-black tracking-[2.4px] uppercase ${
                        textColor === "white" ? "text-white" : "text-darkBlue"
                    } -mb-2`}
                >
                    Bright<span className="text-vividRed">Life</span>
                </span>
                <span className="capitalize text-lightGreen font-poppins text-xs">
                    Enhancement Services
                </span>
            </div>
        </div>
    );
};

export default Logo;
