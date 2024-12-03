import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

export const headerSocialData = [
    { id: 1, icon: <FaFacebookF />, to: "" },
    { id: 2, icon: <FaTwitter />, to: "" },
    { id: 3, icon: <FaLinkedinIn />, to: "" },
    { id: 4, icon: <FaInstagram />, to: "" },
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
