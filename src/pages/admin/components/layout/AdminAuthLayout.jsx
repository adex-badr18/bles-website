import { useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

import { useAuth } from "../auth/AuthProvider";

const AdminAuthLayout = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const { user } = useAuth();
    const { pathname } = useLocation();

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    if (!user) {
        return <Navigate to="/admin" state={{ from: pathname }} replace />;
    }

    return (
        <div className="flex min-h-screen">
            {/* Side Navigation */}
            <aside
                className={`fixed z-40 bg-deepBlue text-white w-full md:w-64 lg:w-[300px] py-8 px-6 h-full transform ${
                    isSideNavOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}
            >
                <SideNav
                    isSideNavOpen={isSideNavOpen}
                    toggleSideNav={toggleSideNav}
                />
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ml-[300px] bg-gray-100 w-full">
                <TopNav
                    toggleSideNav={toggleSideNav}
                    isSideNavOpen={isSideNavOpen}
                />
                <main className="p-5 text-gray-600">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminAuthLayout;
