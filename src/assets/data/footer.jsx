import { MdEmail, MdLocationPin, MdOutlinePhoneIphone } from "react-icons/md";
import { FaFax } from "react-icons/fa6";

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
        text: "226 N Potomac Street, Hagerstown, MD, 21740.",
        icon: <MdLocationPin className="text-lightGreen flex-shrink-0 mt-1" />,
        link: "https://maps.app.goo.gl/aXytMQvBwq3CufCz5"
    },
    {
        id: 5,
        text: "516 N Rolling Road, Catonsville, MD, 21228",
        icon: <MdLocationPin className="text-lightGreen flex-shrink-0 mt-1" />,
        link: "https://maps.app.goo.gl/kyVZr7bpfpDGxqUW7"
    },
    {
        id: 2,
        text: "info@blesomhc.com",
        icon: <MdEmail className="text-lightGreen flex-shrink-0 mt-1" />,
        link: "mailto:info@blesomhc.com"
    },
    {
        id: 3,
        text: "4109882655",
        icon: <MdOutlinePhoneIphone className="text-lightGreen flex-shrink-0 mt-1" />,
        link: "tel:4109882655"
    },
    {
        id: 4,
        text: "4109882626",
        icon: <FaFax className="text-lightGreen flex-shrink-0 mt-1" />,
        link: "tel:4109882626"
    },
];
