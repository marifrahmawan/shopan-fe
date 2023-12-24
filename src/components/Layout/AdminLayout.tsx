import AdminNavbarMenu from "@/components/AdminComponents/AdminNavbarMenu";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import { Toaster } from "../ui/toaster";

const AdminLayout = () => {
  return (
    <div className="relative">
      <Toaster />
      <AdminNavbarMenu />
      <div className="container mt-8 flex gap-5">
        <AdminSidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
