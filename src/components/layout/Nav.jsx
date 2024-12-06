import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import LinkButton from "../LinkButton";
import MobileMenu from "./MobileMenu";

import { navMenu } from "../../assets/data/header";

import { SlMenu } from "react-icons/sl";
import { MdOutlineContactPage } from "react-icons/md";
import logo from "../../assets/logo-default.webp";

const Nav = () => {
    const { pathname } = useLocation();
    const isServicesActive = pathname.includes("/services");
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleMouseHover = (menuItem) => {
        if (menuItem.subMenu) {
            setIsServicesHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsServicesHovered(false);
    };

    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 160;

            setIsSticky(scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-white ${isSticky ? "fixed top-0 left-0 shadow w-full z-50" : ""} px-default py-[10px] lg:py-0`}>
            <div className="flex items-center justify-between gap-4">
                <Link to="/" className="">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[150px] md:w-[190px]"
                    />
                </Link>

                <div className="hidden lg:flex items-center justify-center flex-wrap">
                    {navMenu.map((menuItem) =>
                        menuItem.subMenu ? (
                            <div
                                key={menuItem.id}
                                to={menuItem.to}
                                className={`relative px-default py-7 font-rubik text-[17px] font-medium text-darkBlue transition duration-300 hover:text-vividRed ${
                                    isServicesActive ? "text-vividRed" : ""
                                } cursor-pointer`}
                                onMouseEnter={() => handleMouseHover(menuItem)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {menuItem.name}
                                {/* {isServicesHovered ? ( */}
                                <div
                                    className={`transform ${
                                        isServicesHovered
                                            ? "translate-x-0"
                                            : "-translate-x-[100vw]"
                                    } absolute top-20 left-0 divide-y divide-[#e5e5e52b] bg-darkBlue text-white transition delay-300 duration-300 ease-in-out`}
                                >
                                    {menuItem.subMenu?.map((menu) => (
                                        <NavLink
                                            key={menu.id}
                                            to={menu.to}
                                            className={`px-4 py-3 font-rubik text-[17px] font-medium block whitespace-nowrap ${
                                                pathname === menu.to
                                                    ? "text-lightGreen"
                                                    : ""
                                            } hover:text-lightGreen`}
                                        >
                                            {menu.name}
                                        </NavLink>
                                    ))}
                                </div>
                                {/* ) : null} */}
                            </div>
                        ) : (
                            <NavLink
                                key={menuItem.id}
                                to={menuItem.to}
                                className={({ isActive }) =>
                                    [
                                        isActive ? "text-vividRed" : "",
                                        "relative px-default py-7 font-rubik text-[17px] font-medium text-darkBlue transition duration-300 hover:text-vividRed",
                                    ].join(" ")
                                }
                            >
                                {menuItem.name}
                            </NavLink>
                        )
                    )}
                </div>

                <div className="hidden lg:block">
                    <LinkButton
                        name="Contact Us"
                        icon={<MdOutlineContactPage size="16" />}
                        to="/contact"
                        bgColor="red"
                    />
                </div>

                <div className="flex items-center gap-6 lg:hidden">
                    <div className="hidden sm:block">
                        <LinkButton
                            name="Contact Us"
                            icon={<MdOutlineContactPage size="16" />}
                            to="/contact"
                            bgColor="red"
                        />
                    </div>

                    <div className="">
                        <SlMenu
                            onClick={handleMobileMenuClick}
                            className="text-vividRed"
                            size="26"
                        />
                        {isMobileMenuOpen && (
                            <MobileMenu
                                isOpen={isMobileMenuOpen}
                                setIsOpen={setIsMobileMenuOpen}
                            />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
