import { Link } from "react-router-dom";

import FlexItem from "../FlexItem";
import SocialLink from "../SocialLink";
import Nav from "./Nav";

import { headerSocialData } from "../../assets/data/header";

import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";

const Header = () => {
    return (
        <header className="font-rubik text-default">
            <div className="bg-darkBlue">
                <div className="wrapper flex flex-col sm:flex-row md:items-center justify-between gap-4 px-default py-[10px]">
                    <div className="flex flex-col md:flex-row gap-1 md:gap-0 md:divide-x-[3px] divide-grey">
                        <FlexItem
                            icon={
                                <MdOutlineAccessTime
                                    className="text-originalGreen"
                                    size="20"
                                />
                            }
                            title="Working Hour"
                            text="9:00am - 5:00pm"
                            classAttrs="md:pr-3"
                        />

                        <div className={`flex gap-2 items-center md:pl-3`}>
                            <FaRegEnvelope
                                className="text-originalGreen"
                                size="20"
                            />

                            <p className="font-rubi text-white text-s">
                                <span className="font-bold">
                                    Email
                                    {": "}
                                </span>
                                <Link
                                    to={`mailto:info@blesomhc.com`}
                                    className="hover:text-originalGreen transition duration-300"
                                >
                                    info@blesomhc.com
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-col md:flex-row justify-center md:justify-normal gap-1 md:gap-0 md:divide-x-[3px] divide-[#909BA2]">
                        <div className="flex items-center flex-wrap gap-3 md:pr-3">
                            {headerSocialData.map((social) => (
                                <SocialLink
                                    key={social.id}
                                    icon={social.icon}
                                    to={social.to}
                                    type="header"
                                />
                            ))}
                        </div>

                        <p className="text-white md:pl-3">
                            <span className="font-bold">Hotline: </span>
                            <Link
                                to={`tel:4109882655`}
                                className="hover:text-originalGreen transition duration-300"
                            >
                                +1(410)-988-2655
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <Nav />
        </header>
    );
};

export default Header;
