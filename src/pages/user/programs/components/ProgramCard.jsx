import { Link } from "react-router-dom";

const ProgramCard = ({ link, image, name }) => {
    return (
        <div className="relative w-full max-w-sm" data-aos="zoom-in">
            <Link to={link} className="">
                <img src={image} alt="" className="w-full h-64 object-cover" />
            </Link>
            <Link
                to={link}
                className="md:text-base text-darkBlue hover:text-originalGreen font-semibold font-rubik w-10/12 h-24 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white py-5 px-6 flex items-center justify-center text-center shadow-xl z-10 transition-colors duration-300"
            >
                {name}
            </Link>
        </div>
    );
};

export default ProgramCard;
