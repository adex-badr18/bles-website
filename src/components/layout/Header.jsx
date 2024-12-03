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
            <div className="bg-darkBlue flex flex-col sm:flex-row md:items-center justify-between gap-4 px-default py-[10px]">
                <div className="flex flex-col md:flex-row gap-1 md:gap-0 md:divide-x-[3px] divide-[#909BA2]">
                    <FlexItem
                        icon={
                            <MdOutlineAccessTime
                                className="text-lightGreen"
                                size="20"
                            />
                        }
                        title="Working Hour"
                        text="8:00am - 9:00pm"
                        classAttrs="md:pr-3"
                    />
                    <FlexItem
                        icon={
                            <FaRegEnvelope
                                className="text-lightGreen"
                                size="20"
                            />
                        }
                        title="Email"
                        text="info@behavioralhealth.com"
                        classAttrs="md:pl-3"
                    />
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
                            to={`tel:+0123456789`}
                            className="hover:text-lightGreen transition duration-500"
                        >
                            +0123 (456) 789
                        </Link>
                    </p>
                </div>
            </div>

            <Nav />
        </header>
    );
};

export default Header;
