import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import LinkButton from "../LinkButton";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

import { navMenu } from "../../assets/data/header";

import { SlMenu } from "react-icons/sl";
import { MdOutlineContactPage } from "react-icons/md";
import logo from "../../assets/logo-default.webp";

const Nav = () => {
    const { pathname } = useLocation();
    const isServicesActive = pathname.includes("/services");
    const isProgramsActive = pathname.includes("/programs");

    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isProgramsHovered, setIsProgramsHovered] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleMouseHover = (menuItem) => {
        if (menuItem.name.toLowerCase() === "services") {
            setIsServicesHovered(true);
        }

        if (menuItem.name.toLowerCase() === "programs") {
            setIsProgramsHovered(true);
        }
    };

    const handleMouseLeave = (menuItem) => {
        if (menuItem.name.toLowerCase() === "services") {
            setIsServicesHovered(false);
        }

        if (menuItem.name.toLowerCase() === "programs") {
            setIsProgramsHovered(false);
        }
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
        <nav
            className={`bg-white ${
                isSticky ? "fixed top-0 left-0 shadow w-full z-50" : ""
            } px-default py-[10px] lg:py-0`}
        >
            <div className="wrapper">
                <div className="flex items-center justify-between gap-4">
                    <Link to="/" className="">
                        <Logo />
                    </Link>

                    <div className="hidden lg:flex items-center justify-center flex-wrap">
                        {navMenu.map((menuItem) =>
                            menuItem.name.toLowerCase() === "services" ? (
                                <div
                                    key={menuItem.id}
                                    to={menuItem.to}
                                    className={`relative px-default py-7 font-rubik text-[17px] font-medium text-darkBlue transition duration-300 hover:text-vividRed ${
                                        isServicesActive ? "text-vividRed" : ""
                                    } cursor-pointer`}
                                    onMouseEnter={() =>
                                        handleMouseHover(menuItem)
                                    }
                                    onMouseLeave={() =>
                                        handleMouseLeave(menuItem)
                                    }
                                >
                                    {menuItem.name}
                                    <div
                                        className={`transform ${
                                            isServicesHovered
                                                ? "translate-x-0"
                                                : "-translate-x-[100vw]"
                                        } absolute top-20 left-0 divide-y z-50 shadow-lg divide-[#e5e5e52b] bg-darkBlue text-white transition delay-100 duration-300 ease-in-out`}
                                    >
                                        {menuItem.subMenu?.map((menu) => (
                                            <NavLink
                                                key={menu.id}
                                                to={menu.to}
                                                className={`px-4 py-2 font-rubik text-[17px] font-medium block whitespace-nowrap ${
                                                    pathname === menu.to
                                                        ? "bg-lightGreen text-white"
                                                        : ""
                                                } hover:bg-lightGreen hover:text-white`}
                                            >
                                                {menu.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            ) : menuItem.name.toLowerCase() === "programs" ? (
                                <div
                                    key={menuItem.id}
                                    to={menuItem.to}
                                    className={`relative px-default py-7 font-rubik text-[17px] font-medium text-darkBlue transition duration-300 hover:text-vividRed ${
                                        isProgramsActive ? "text-vividRed" : ""
                                    } cursor-pointer`}
                                    onMouseEnter={() =>
                                        handleMouseHover(menuItem)
                                    }
                                    onMouseLeave={() =>
                                        handleMouseLeave(menuItem)
                                    }
                                >
                                    {menuItem.name}
                                    <div
                                        className={`transform ${
                                            isProgramsHovered
                                                ? "translate-x-0"
                                                : "-translate-x-[100vw]"
                                        } absolute top-20 left-0 divide-y z-50 shadow-lg divide-[#e5e5e52b] bg-darkBlue text-white transition delay-100 duration-300 ease-in-out`}
                                    >
                                        {menuItem.subMenu?.map((menu) => (
                                            <NavLink
                                                key={menu.id}
                                                to={menu.to}
                                                className={`px-4 py-2 font-rubik text-[17px] font-medium block whitespace-nowrap ${
                                                    pathname === menu.to
                                                        ? "bg-lightGreen text-white"
                                                        : ""
                                                } hover:bg-lightGreen hover:text-white`}
                                            >
                                                {menu.name}
                                            </NavLink>
                                        ))}
                                    </div>
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
            </div>
        </nav>
    );
};

export default Nav;
