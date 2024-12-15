import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

import { navMenu } from "../../assets/data/header";

import logo from "../../assets/logo-white.webp";
import Logo from "./Logo";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const { pathname } = useLocation();
    const isServicesActive = pathname.includes("/services");
    const isProgramsActive = pathname.includes("/programs");

    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    const handleMenuClick = (menuItem) => {
        if (menuItem.name.toLowerCase() === "services") {
            setIsServicesOpen(!isServicesOpen);
        }

        if (menuItem.name.toLowerCase() === "programs") {
            setIsProgramsOpen(!isProgramsOpen);
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div
            className={`bg-darkBlue fixed inset-0 z-50 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
            <div className="p-12 flex justify-between gap-5">
                <Logo textColor="white" />
                <AiOutlineClose
                    className="text-white"
                    onClick={closeMenu}
                    size="24"
                />
            </div>

            <nav className="px-12 pb-4">
                <ul className="text-white font-rubik font-medium text-[17px] divide-y divide-[#FFFFFF29]">
                    {navMenu.map((menuItem) =>
                        menuItem.name.toLowerCase() === "services" ? (
                            <li key={menuItem.id} className="relative py-4">
                                <div
                                    className={`flex items-center justify-between hover:text-lightGreen ${
                                        isServicesActive
                                            ? "text-lightGreen"
                                            : ""
                                    }`}
                                    onClick={() => handleMenuClick(menuItem)}
                                >
                                    <span className="">{menuItem.name}</span>
                                    <IoMdArrowDropright className="text-xl" />
                                </div>

                                {isServicesOpen && (
                                    <ul
                                        className={`pl-4 bg-darkBlue divide-y divide-[#FFFFFF29]`}
                                    >
                                        {menuItem.subMenu?.map((menu) => (
                                            <li
                                                key={menu.id}
                                                className={`py-4 ${
                                                    pathname === menu.to
                                                        ? "text-lightGreen"
                                                        : ""
                                                }`}
                                            >
                                                <NavLink
                                                    to={menu.to}
                                                    className={``}
                                                >
                                                    {menu.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : menuItem.name.toLowerCase() === "programs" ? (
                            <li key={menuItem.id} className="relative py-4">
                                <div
                                    className={`flex items-center justify-between hover:text-lightGreen ${
                                        isProgramsActive
                                            ? "text-lightGreen"
                                            : ""
                                    }`}
                                    onClick={() => handleMenuClick(menuItem)}
                                >
                                    <span className="">{menuItem.name}</span>
                                    <IoMdArrowDropright className="text-xl" />
                                </div>

                                {isProgramsOpen && (
                                    <ul
                                        className={`pl-4 bg-darkBlue divide-y divide-[#FFFFFF29]`}
                                    >
                                        {menuItem.subMenu?.map((menu) => (
                                            <li
                                                key={menu.id}
                                                className={`py-4 ${
                                                    pathname === menu.to
                                                        ? "text-lightGreen"
                                                        : ""
                                                }`}
                                            >
                                                <NavLink
                                                    to={menu.to}
                                                    className={``}
                                                >
                                                    {menu.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={menuItem.id} className="py-4">
                                <NavLink
                                    to={menuItem.to}
                                    className={`hover:text-lightGreen`}
                                >
                                    {menuItem.name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;
