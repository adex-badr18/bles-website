import { Link } from "react-router-dom";

const LinkButton = ({
    name,
    to,
    icon,
    bgColor,
    classAttrs,
    variant,
    ...rest
}) => {
    let variantClass = "";

    if (variant == "outline") {
        if (bgColor === "green") {
            variantClass =
                "bg-transparent border-2 border-deepGreen text-originalGreen divide-originalGreen hover:bg-deepGreen hover:text-white";
        } else if (bgColor === "red") {
            variantClass =
                "bg-transparent border border-vividRed text-vividRed divide-vividRed hover:bg-vividRed hover:text-white";
        } else {
            variantClass =
                "bg-transparent border border-deepGrey text-deepGrey divide-deepGrey hover:bg-deepGrey hover:text-white";
        }
    } else {
        if (bgColor === "green") {
            variantClass =
                "bg-deepGreen text-white divide-white hover:bg-originalGreen";
        } else if (bgColor === "red") {
            variantClass =
                "bg-vividRed text-white divide-white hover:bg-red-600";
        } else {
            variantClass =
                "bg-deepGrey text-white divide-white hover:bg-gray-600";
        }
    }

    return (
        <Link
            to={to}
            className={`rounded-full px-[35px] py-4 flex items-center justify-center gap-2 divide-x-2 font-poppins font-semibold text-nowrap transition-colors duration-300 ${variantClass} ${classAttrs}`}
            {...rest}
        >
            <span className="">{name}</span>
            <i className="pl-2 text-xl">{icon}</i>
        </Link>
    );
};

export default LinkButton;
