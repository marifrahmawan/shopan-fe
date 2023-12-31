import { useAppSelector } from "@/utils/redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

const AuthProtectedRoutes = () => {
  const user = useAppSelector((state) => state.user.data);

  if (user?.accessToken !== "") {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default AuthProtectedRoutes;
