import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

export const headerSocialData = [
    { id: 1, icon: <FaFacebookF />, to: "https://web.facebook.com/profile.php?id=61551444698635" },
    { id: 2, icon: <FaTwitter />, to: "https://twitter.com/BLESOMHC?t=ORTbOzVi3ydX0LTxBUZG1A&s=08" },
    { id: 3, icon: <FaLinkedinIn />, to: "https://www.linkedin.com/in/brightlife-enhancement-services-155b0a2a8/" },
    { id: 4, icon: <FaInstagram />, to: "https://www.instagram.com/blesomhc/" },
];

export const navMenu = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About Us", to: "/about" },
    {
        id: 3,
        name: "Services",
        to: "/services",
        subMenu: [
            { id: 1, name: "Outpatient Program", to: "/services/outpatient" },
            {
                id: 2,
                name: "Intensive Outpatient Program (IOP)",
                to: "/services/iop",
            },
            {
                id: 3,
                name: "Partial Hospitalization Program (PHP)",
                to: "/services/php",
            },
            {
                id: 4,
                name: "Residential Program",
                to: "/services/residential",
            },
            // { id: 5, name: "", to: "" },
        ],
    },
    { id: 4, name: "Specialists", to: "/specialists" },
    { id: 5, name: "Forms", to: "/forms" },
    { id: 6, name: "FAQ", to: "/faq" },
    { id: 7, name: "Contact", to: "/contact" },
];
