import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="layout">
        <Navbar />
        <div className="main-screen">
            <Outlet />
        </div>
      
    </div>
  );
};

export default Layout;
