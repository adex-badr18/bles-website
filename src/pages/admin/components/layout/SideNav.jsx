import { adminSideNavLinks } from "../data";
import SideNavLink from "./SideNavLink";
import logo from "../../../../assets/bles-logo-secondary.png";
import Logo from "../../../../components/layout/Logo";
import { MdClose, MdLogout } from "react-icons/md";
import { useAuth } from "../auth/AuthProvider";

const SideNav = ({ isSideNavOpen, toggleSideNav }) => {
    const { logout } = useAuth();

    return (
        <div className="flex flex-col gap-6 relative h-full">
            {/* Logo */}
            <div className="">
                <Logo logoSrc={logo} widthClass="w-40" />
            </div>

            {isSideNavOpen && (
                <button
                    className="lg:hidden absolute right-0 top-0 text-3xl text-offWhite focus:outline-none"
                    onClick={toggleSideNav}
                >
                    <MdClose />
                </button>
            )}

            {/* Links */}
            <nav className="mt-6 flex-1 flex flex-col gap-2 h-full">
                {adminSideNavLinks.map((link) => {
                    return (
                        <div
                            key={link.id}
                            className={`${link.id === 5 ? "mt-auto" : ""}`}
                        >
                            <SideNavLink
                                text={link.text}
                                to={link.to}
                                icon={link.icon}
                                toggleSideNav={toggleSideNav}
                            />
                        </div>
                    );
                })}

                {/* Logout button */}
                <button
                    onClick={logout}
                    className={`flex items-center gap-4 text-base text-offWhite px-2 py-4 rounded-lg hover:bg-red-600 hover:font-medium w-full`}
                >
                    <i className="text-2xl">{<MdLogout />}</i>
                    <span className="">Logout</span>
                </button>
            </nav>
        </div>
    );
};

export default SideNav;
