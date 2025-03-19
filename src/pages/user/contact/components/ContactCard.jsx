import { Link } from "react-router-dom";

const ContactCard = ({ icon, title, value1, value2 }) => {
    const link1 =
        title.toLowerCase() === "phone"
            ? `tel:${value1}`
            : title.toLowerCase() === "email"
            ? `mailto:${value1}`
            : value1;
    const link2 =
        title.toLowerCase() === "phone"
            ? `tel:${value2}`
            : title.toLowerCase() === "email"
            ? `mailto:${value2}`
            : value2;

    return (
        <div className="p-5 md:p-10 bg-lightBlue flex gap-8 md:gap-10 shadow-md">
            <div className="relative w-16">
                <div className="w-16 h-16 absolute top-3 left-0 bg-lightGreen"></div>
                <div className="w-16 h-16 absolute top-0 -right-3 flex items-center justify-center bg-white text-4xl text-lightGreen">
                    {icon}
                </div>
            </div>

            <div className="space-y-1">
                <h1 className="font-bold text-xl">{`${title}:`}</h1>
                {title.toLowerCase() === "address" ? (
                    <div className="">
                        <span className="text-darkBlue font-rubik block">
                            {value1}
                        </span>
                        <span className="text-darkBlue font-rubik block">
                            {value2}
                        </span>
                    </div>
                ) : (
                    <div className="">
                        <Link
                            to={link1}
                            className="text-darkBlue hover:text-vividRed font-rubik block transition duration-300"
                        >
                            {value1}
                        </Link>
                        <Link
                            to={link2}
                            className="text-darkBlue hover:text-vividRed font-rubik block transition duration-300"
                        >
                            {value2}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactCard;
