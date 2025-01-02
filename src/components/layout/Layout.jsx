import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";
import { ScrollRestoration } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration (in ms)
            once: true, // Whether animation occurs only once
        });
    }, []);

    const { state } = useNavigation();
    const isLoading = state === "loading";

    return (
        <div className="">
            <Header />

            <main className="">
                <Outlet />
            </main>

            <Footer />

            <ScrollToTop />
            <ScrollRestoration />
        </div>
    );
};

export default Layout;
