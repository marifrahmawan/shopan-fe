import { useAppSelector } from "@/utils/redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes = () => {
  const user = useAppSelector((state) => state.user.data);

  if (user?.role !== "admin") {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default AdminProtectedRoutes;
