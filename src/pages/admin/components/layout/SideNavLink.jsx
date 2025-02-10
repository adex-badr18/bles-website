import { NavLink } from "react-router-dom";

const SideNavLink = ({ icon, text, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                [
                    `group flex items-center gap-4 text-base px-2 py-4 rounded-lg hover:bg-white hover:text-darkBlue hover:font-bold`,
                    isActive
                        ? "bg-white text-darkBlue font-medium"
                        : "bg-transparent text-offWhite",
                ].join(" ")
            }
        >
            <i className="text-2xl">{icon}</i>
            <span className="">{text}</span>
        </NavLink>
    );
};

export default SideNavLink;