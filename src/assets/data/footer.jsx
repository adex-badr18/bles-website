import { MdEmail, MdLocationPin, MdOutlinePhoneIphone } from "react-icons/md";

export const quickLinks = [
    { id: 1, to: "/about", title: "About Us" },
    { id: 2, to: "/contact", title: "Contact" },
    { id: 3, to: "/services", title: "Services" },
    { id: 4, to: "/programs", title: "Programs" },
    { id: 5, to: "/faq", title: "FAQ" },
];

export const contact = [
    {
        id: 1,
        text: "5, Public Square, Suite 428, Hagerstown, MD 21740.",
        icon: <MdLocationPin className="text-lightGreen flex-shrink-0" />,
    },
    {
        id: 2,
        text: "brightlife0602@gmail.com",
        icon: <MdEmail className="text-lightGreen flex-shrink-0" />,
    },
    {
        id: 3,
        text: "info@blesomhc.com",
        icon: <MdEmail className="text-lightGreen flex-shrink-0" />,
    },
    {
        id: 4,
        text: "+1(410)988-2655",
        icon: <MdOutlinePhoneIphone className="text-lightGreen flex-shrink-0" />,
    },
];
