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
            { id: 1, name: "Anxiety Disorder", to: "/services/outpatient" },
            {
                id: 2,
                name: "Substance Use Disorder",
                to: "/services/substance-use",
            },
            {
                id: 3,
                name: "ADHD",
                to: "/services/adhd",
            },
            {
                id: 4,
                name: "Depression",
                to: "/services/depression",
            },
            {
                id: 5,
                name: "Schizophrenia Disorder",
                to: "/services/schizophrenia",
            },
            {
                id: 6,
                name: "PTSD",
                to: "/services/ptsd",
            },
            {
                id: 7,
                name: "Bipolar",
                to: "/services/depression",
            },
            {
                id: 8,
                name: "Family Psychoeducation",
                to: "/services/psychoeducation",
            },
            {
                id: 9,
                name: "Medication Management",
                to: "/services/medication-mgt",
            },
            {
                id: 10,
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
            { id: 1, name: "Outpatient Program", to: "/programs/outpatient" },
            {
                id: 2,
                name: "Intensive Outpatient Program (IOP)",
                to: "/programs/iop",
            },
            {
                id: 3,
                name: "Partial Hospitalization Program (PHP)",
                to: "/programs/php",
            },
            {
                id: 4,
                name: "Residential Program",
                to: "/programs/residential",
            },
        ],
    },
    { id: 5, name: "Specialists", to: "/specialists" },
    { id: 6, name: "Forms", to: "/forms" },
    { id: 7, name: "FAQ", to: "/faq" },
    { id: 8, name: "Contact", to: "/contact" },
];
