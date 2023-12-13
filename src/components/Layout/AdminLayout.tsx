import AdminNavbarMenu from "@/components/AdminComponents/AdminNavbarMenu";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminComponents/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="relative">
      <AdminNavbarMenu />
      <div className="container mt-8 flex w-full gap-5">
        <AdminSidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
