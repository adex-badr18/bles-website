import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";
import { ScrollRestoration } from "react-router-dom";

const Layout = () => {
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
