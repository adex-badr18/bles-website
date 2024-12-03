import { Link } from "react-router-dom";

const SocialLink = ({ icon, to, type }) => {
    const classAttrs =
        type === "header"
            ? "text-white hover:text-lightGreen transition duration-500"
            : "p-3 text-lg rounded-full bg-deepGrey text-lightGrey hover:text-white hover:bg-lightGreen transition duration-500";

    return (
        <Link to={to} target="_blank" className={classAttrs}>
            {icon}
        </Link>
    );
};

export default SocialLink;
