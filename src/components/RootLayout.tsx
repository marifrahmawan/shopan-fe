import { Outlet } from "react-router-dom";
import MenuNavbar from "./MenuNavbar";
import AnnouncementBar from "./AnnouncementBar";

const RootLayout = () => {
  return (
    <div className="relative">
      <AnnouncementBar />
      <MenuNavbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
