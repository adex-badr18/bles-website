import { useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Modal from "../../../../components/Modal";
import SubmitButton from "../../../../components/SubmitButton";

import { IoWarning } from "react-icons/io5";

import { useAuth } from "../auth/AuthProvider";

const AdminAuthLayout = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const { user, logout } = useAuth();
    const { pathname } = useLocation();

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const logoutHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsConfirmModalOpen(false);
            setIsSubmitting(false);
            logout();
        }, 1000);
    };

    if (!user) {
        return <Navigate to="/admin" state={{ from: pathname }} replace />;
    }

    return (
        <div className="flex min-h-screen">
            {/* Side Navigation */}
            <aside
                className={`fixed z-40 bg-deepBlue text-white w-full md:w-64 lg:w-[280px] py-8 px-6 h-full transform ${
                    isSideNavOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}
            >
                <SideNav
                    isSideNavOpen={isSideNavOpen}
                    toggleSideNav={toggleSideNav}
                    setIsConfirmModalOpen={setIsConfirmModalOpen}
                />
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ml-[280px] bg-gray-100 w-full">
                <TopNav
                    toggleSideNav={toggleSideNav}
                    isSideNavOpen={isSideNavOpen}
                />
                <main className="p-5 text-gray-600 min-h-screen">
                    <Outlet />
                </main>
            </div>

            {/* Confirm Logout */}
            <Modal isOpen={isConfirmModalOpen}>
                <div className="w-full max-w-xl rounded-lg bg-white text-deepGrey border-t-8 border-t-vividRed relative">
                    <div className="flex flex-col divide-y divide-lightGrey">
                        <div className="flex items-center gap-4 md:gap-8 p-4 md:p-6">
                            <IoWarning className="flex-shrink-0 text-4xl md:text-6xl text-vividRed" />

                            <div className="space-y-2 text-deepGrey">
                                <h3 className="text-lg font-semibold">
                                    Confirm Log Out
                                </h3>
                                <p className="">
                                    Are you sure you want to log out?
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-4 p-3 md:p-4">
                            <button
                                className="bg-transparent hover:bg-lightGreen border border-lightGreen px-4 py-[7px] text-lightGreen hover:text-white font-medium tracking-widest rounded-lg transition-colors duration-300"
                                onClick={() => setIsConfirmModalOpen(false)}
                            >
                                Cancel
                            </button>

                            <SubmitButton
                                submitText="Log out"
                                loadingText="Logging out..."
                                onSubmit={logoutHandler}
                                isSubmitting={isSubmitting}
                                xtraClass="self-end w-auto bg-vividRed hover:bg-red-700"
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminAuthLayout;
