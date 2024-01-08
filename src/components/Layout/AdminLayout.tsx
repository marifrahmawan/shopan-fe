import AdminNavbarMenu from "@/components/AdminComponents/AdminNavbarMenu";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import { Toaster } from "../ui/toaster";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import axiosWithConfig, { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import { LOGOUT_USER } from "@/utils/redux/userLoginSlice";

const AdminLayout = () => {
  const user = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  if (user?.role === "admin") {
    setAxiosConfig(user!.accessToken);
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 403) {
          dispatch(LOGOUT_USER());
        }

        return Promise.reject(error);
      },
    );
  }

  return (
    <>
      <Toaster />
      {/* <AdminNavbarMenu /> */}
      <div className="container flex p-0">
        <AdminSidebar />

        <div className="w-full">
          <AdminNavbarMenu />
          <section className="pl-5">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
