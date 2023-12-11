import AdminNavbarMenu from "@/pages/Admin/AdminNavbarMenu";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="relative">
      <AdminNavbarMenu />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
