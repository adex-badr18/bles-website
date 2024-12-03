import { Link } from "react-router-dom";

const LinkButton = ({ name, to, icon, bgColor }) => {
    return (
        <Link
            to={to}
            className={`rounded-full px-[35px] py-4 flex items-center gap-2 divide-x divide-white text-white font-poppins font-semibold text-nowrap transition duration-500 ${
                bgColor === "red" ? "bg-vividRed" : "bg-lightGreen"
            } hover:${bgColor === "red" ? "bg-lightGreen" : "bg-vividRed"} `}
        >
            <span className="">{name}</span>
            <i className="pl-2">{icon}</i>
        </Link>
    );
};

export default LinkButton;
