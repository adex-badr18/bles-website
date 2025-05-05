import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { BiChevronsRight } from "react-icons/bi";

const StickySideNav = ({ data, widgetTitle }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleIsSticky = () => {
            const isScrolled = window.scrollY > 200;
            const isLargeScreen = window.innerWidth > 768;

            setIsSticky(isScrolled && isLargeScreen);
        };

        window.addEventListener("scroll", handleIsSticky);
        window.addEventListener("resize", handleIsSticky);

        return () => {
            window.removeEventListener("scroll", handleIsSticky);
            window.removeEventListener("resize", handleIsSticky);
        };
    }, []);

    console.log(data)

    return (
        <aside className={`w-full max-w-[360px]`}>
            <div className="px-5 py-3 md:px-10 bg-deepGreen rounded-t-md">
                <h3 className="text-white text-lg md:text-2xl font-bold capitalize">
                    Other {widgetTitle}
                </h3>
            </div>

            <div className="flex flex-col gap-4 px-4 md:px-8 py-5 md:py-10 bg-[#F4F9FC]">
                {data.map((datum) => (
                    <NavLink
                        key={datum.id}
                        to={`/${widgetTitle.toLowerCase()}/${datum.id}`}
                        className={({ isActive }) =>
                            [
                                isActive
                                    ? "bg-deepGreen text-white"
                                    : "bg-white text-deepBlue",
                                "border border-[#dddddd8f] rounded-md p-4 font-rubik hover:bg-deepGreen hover:text-white transition duration-300",
                            ].join(" ")
                        }
                    >
                        <div className="flex gap-2">
                            <BiChevronsRight className="flex-shrink-0 mt-1" />
                            <span className="font-medium">
                                {datum.name}
                            </span>
                        </div>
                    </NavLink>
                ))}
            </div>
        </aside>
    );
};

export default StickySideNav;
