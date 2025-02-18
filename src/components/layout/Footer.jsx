import { useState } from "react";
import { Link } from "react-router-dom";

import { TbSend } from "react-icons/tb";

import SocialLink from "../SocialLink";
import { headerSocialData } from "../../assets/data/header";
import { FlexContactInfo } from "../FlexItem";
import { quickLinks, contact } from "../../assets/data/footer";

import primaryLogo from "../../assets/bles-logo-primary.png";
import secondaryLogo from "../../assets/bles-logo-secondary.png";

const Footer = () => {
    const [email, setEmail] = useState("");

    return (
        <footer className="bg-deepBlue py-8 md:py-10">
            <div className="px-5 w-full mx-auto sm:max-w-[540px] md:max-w-[760px] blg:max-w-[990px] bxl:max-w-[1170px] b2xl:max-w-[1320px] text-[#CFD3D5] font-poppins">
                <div className="footer-top flex flex-col md:flex-row justify-between items-center gap-10 py-8 md:py-16 border-b-2 border-borderColor">
                    <Link to="/" className="">
                        <img
                            src={secondaryLogo}
                            alt="Logo"
                            className="w-40 md:w-44"
                        />
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 font-poppins">
                        <span className="text-lg font-semibold">
                            Subscribe:
                        </span>
                        <div className="relative">
                            <input
                                type="text"
                                name="email"
                                className="w-full p-3 text-[#626262] rounded-md outline-none"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="absolute inset-y-0 right-0 bg-lightGreen px-4 py-3 rounded-r-md">
                                <TbSend className="text-white text-xl" />
                            </button>
                        </div>
                    </div>

                    <div className="hidden blg:flex items-end gap-2 font-rubik leading-default font-medium">
                        <span className="text-3xl text-lightGreen">1K+</span>
                        <span className="text-white text-base">
                            Satisfied Clients
                        </span>
                    </div>
                </div>
                <div className="footer-widget flex flex-col md:flex-row justify-between gap-10 py-8 md:py-16 border-b-2 border-borderColor">
                    <div className="about flex-1 md:basis-1/4">
                        <h3 className="text-white text-lg md:text-xl font-bold mb-[35px]">
                            About Us
                        </h3>

                        <p className="font-rubik">
                            At BrightLife Ehancement Services, we consistently
                            provide safe and satisfactory care to all patients
                            and families and we always place our clients first.
                        </p>

                        <div className="space-y-3">
                            <h4 className="text-white text-base md:text-lg font-semibold mt-[15px]">
                                Find us on:
                            </h4>

                            <div className="flex items-center flex-wrap gap-3">
                                {headerSocialData.map((social) => (
                                    <SocialLink
                                        key={social.id}
                                        icon={social.icon}
                                        to={social.to}
                                        type="footer"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden blg:block flex-1  basis-1/12"></div>

                    <div className="quick-links flex-1 md:basis-1/12">
                        <h3 className="text-white text-lg md:text-xl font-bold mb-[35px]">
                            Quick Links
                        </h3>

                        <div className="">
                            <ul className="space-y-4">
                                {quickLinks.map((link) => (
                                    <li key={link.id} className="font-rubik">
                                        <Link
                                            to={link.to}
                                            className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[2px] before:w-[10px] before:bg-[#CFD3D5]"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="hidden blg:block flex-1 basis-1/12"></div>

                    <div className="contact flex-1 md:basis-1/4">
                        <h3 className="text-white text-lg md:text-xl font-bold mb-[35px]">
                            Contact Us
                        </h3>

                        <h5 className="text-white text-base md:text-lg font-medium">
                            Main Office
                        </h5>
                        <div className="space-y-4">
                            {contact.map((item) => (
                                <FlexContactInfo
                                    key={item.id}
                                    icon={item.icon}
                                    classAttrs="font-rubik"
                                >
                                    {item.text}
                                </FlexContactInfo>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom flex flex-col md:flex-row justify-between md:items-center gap-6 pt-4 md:pt-8">
                    <div className="font-rubik flex flex-col smallsm:flex-row gap-2">
                        <span className="smallsm:border-r border-[#CFD3D5] pr-2 underline underline-offset-[10px] smallsm:no-underline">
                            BrightLife
                        </span>
                        <span className="">
                            Developed by:{" "}
                            <span className="font-bold text-lightGreen text-nowrap">
                                The Fronteers Solutions
                            </span>
                        </span>
                    </div>

                    <div className="font-rubik flex flex-col bsm:flex-row gap-2">
                        <span className="underline underline-offset-[10px] bsm:no-underline bsm:border-r border-[#CFD3D5] pr-2 text-nowrap">
                            © BrightLife 2024
                        </span>
                        <span className="text-nowrap">All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
