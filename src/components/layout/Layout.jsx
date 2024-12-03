import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    const { state } = useNavigation();
    const isLoading = state === "loading";

    return (
        <div className="">
            <Header />

            <main className="pt-24">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
