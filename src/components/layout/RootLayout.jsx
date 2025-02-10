import { useNavigation, useLocation, Outlet } from "react-router-dom";
import LoadingModal from "./LoadingModal";
import logo from "../../assets/bles-logo-secondary.png";

const RootLayout = () => {
    const { state } = useNavigation();
    const isLoading = state === "loading";

    return (
        <div>
            <Outlet />
            <LoadingModal isOpen={isLoading}>
                <img
                    src={logo}
                    alt="Logo"
                    className="w-28 md:w-36 motion-safe:animate-bounce duration-500"
                />
            </LoadingModal>
        </div>
    );
};

export default RootLayout;
