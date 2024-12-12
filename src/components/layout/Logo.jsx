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

            <div className="flex font-bold flex-col font-agu text-xl">
                <span
                    className={`uppercase ${
                        textColor === "white" ? "text-white" : "text-deepBlue"
                    } -mb-2`}
                >
                    B<span className="text-vividRed">ri</span>ght
                </span>
                <span className="uppercase text-lightGreen tracking-[10px]">
                    Life
                </span>
            </div>
        </div>
    );
};

export default Logo;
