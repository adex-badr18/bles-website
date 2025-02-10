import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const AdminAuthLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AdminAuthLayout;
