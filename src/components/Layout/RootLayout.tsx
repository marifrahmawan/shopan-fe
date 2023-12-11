import { Outlet } from "react-router-dom";
import MenuNavbar from "../MenuNavbar";
import AnnouncementBar from "../AnnouncementBar";
import { Toaster } from "../ui/toaster";

const RootLayout = () => {
  return (
    <div className="relative">
      <AnnouncementBar />
      <MenuNavbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default RootLayout;
