import { MdDashboard, MdPeople, MdFeedback } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";

export const adminSideNavLinks = [
    {
        id: 1,
        text: "Dashboard",
        to: "/admin/dashboard",
        icon: <MdDashboard className="" />,
    },
    {
        id: 2,
        text: "Patients",
        to: "/admin/patients",
        icon: <MdPeople className="" />,
    },
    {
        id: 3,
        text: "Appointments",
        to: "/admin/appointments",
        icon: <RiCalendarScheduleLine />,
    },
    {
        id: 4,
        text: "Reviews",
        to: "/admin/reviews",
        icon: <MdFeedback />,
    },
    { id: 5, text: "Settings", to: "/admin/settings", icon: <IoMdSettings /> },
];
