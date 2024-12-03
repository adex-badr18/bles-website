import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

import { navMenu } from "../../assets/data/header";

import logo from "../../assets/logo-white.webp";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const { pathname } = useLocation();
    const isServicesActive = pathname.includes("/services");
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handleServicesMenuClick = () => {
        setIsServicesOpen(!isServicesOpen);
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
                <img src={logo} alt="Logo" className="w-[150px] md:w-[190px]" />
                <AiOutlineClose
                    className="text-white"
                    onClick={closeMenu}
                    size="24"
                />
            </div>

            <nav className="px-12 pb-4">
                <ul className="text-white font-rubik font-medium text-[17px] divide-y divide-[#FFFFFF29]">
                    {navMenu.map((menuItem) =>
                        menuItem.subMenu ? (
                            <li key={menuItem.id} className="relative py-4">
                                <div
                                    className={`flex items-center justify-between hover:text-lightGreen ${
                                        isServicesActive
                                            ? "text-lightGreen"
                                            : ""
                                    }`}
                                    onClick={handleServicesMenuClick}
                                >
                                    <span className="">Services</span>
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
