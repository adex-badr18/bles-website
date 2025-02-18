import { Link } from "react-router-dom";

import { CgChevronDoubleRight } from "react-icons/cg";

const ServiceCard = ({ icon, title, descr, link, ...rest }) => {
    return (
        <div
            className="bg-white p-10 space-y-6 shadow-2xl w-full md:max-w-[300px] hover:scale-105 transition duration-300"
            {...rest}
        >
            {icon}

            <div className="flex flex-col gap-4">
                <h3 className="font-poppins text-darkBlue text-lg font-semibold">
                    {title}
                </h3>

                {/* <p className="font-rubik text-grey leading-7">{descr}</p> */}

                {/* <Link
                    to={link}
                    className="flex items-center gap-1 text-vividRed font-poppins font-semibold text-base"
                >
                    <span className="">Read More</span>
                    <CgChevronDoubleRight className="text-lg" />
                </Link> */}
            </div>
        </div>
    );
};

export default ServiceCard;
