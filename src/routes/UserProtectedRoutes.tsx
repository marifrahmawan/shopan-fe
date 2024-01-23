import { useAppSelector } from "@/utils/redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRoutes = () => {
  const user = useAppSelector((state) => state.user.data);

  if (user?.accessToken === "" || user?.role === "admin") {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default UserProtectedRoutes;
