import heart from "../../assets/heart.png";
import { MdOutlineStarRate } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import { RiHeartPulseFill } from "react-icons/ri";

const Logo = ({ logoSrc, widthClass="w-36 md:w-44" }) => {
    return (
        <img src={logoSrc} alt="Logo" className={`${widthClass}`} />
    );
};

export default Logo;
