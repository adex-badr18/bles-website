import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

export const headerSocialData = [
    {
        id: 1,
        icon: <FaFacebookF />,
        to: "https://web.facebook.com/profile.php?id=61551444698635",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        to: "https://twitter.com/BLESOMHC?t=ORTbOzVi3ydX0LTxBUZG1A&s=08",
    },
    {
        id: 3,
        icon: <FaLinkedinIn />,
        to: "https://www.linkedin.com/in/brightlife-enhancement-services-155b0a2a8/",
    },
    { id: 4, icon: <FaInstagram />, to: "https://www.instagram.com/blesomhc/" },
];

export const navMenu = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About", to: "/about" },
    {
        id: 3,
        name: "Services",
        to: "/services",
        subMenu: [
            { id: 1, name: "Anxiety Disorder", to: "/services/6" },
            {
                id: 2,
                name: "Substance Use Disorder",
                to: "/services/1",
            },
            {
                id: 3,
                name: "ADHD",
                to: "/services/8",
            },
            {
                id: 4,
                name: "Depression",
                to: "/services/3",
            },
            {
                id: 5,
                name: "PTSD",
                to: "/services/12",
            },
            {
                id: 6,
                name: "Bipolar",
                to: "/services/2",
            },
            {
                id: 7,
                name: "More Services...",
                to: "/services",
            },
        ],
    },
    {
        id: 4,
        name: "Programs",
        to: "/programs",
        subMenu: [
            { id: 1, name: "Outpatient Program", to: "/programs/1" },
            {
                id: 2,
                name: "Intensive Outpatient Program (IOP)",
                to: "/programs/2",
            },
            {
                id: 3,
                name: "Partial Hospitalization Program (PHP)",
                to: "/programs/3",
            },
            {
                id: 4,
                name: "Residential Program",
                to: "/programs/4",
            },
        ],
    },
    { id: 5, name: "Review", to: "/review" },
    { id: 6, name: "Forms", to: "/forms" },
    { id: 7, name: "FAQ", to: "/faq" },
    { id: 8, name: "Contact", to: "/contact" },
];
