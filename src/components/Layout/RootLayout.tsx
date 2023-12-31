import { Outlet } from "react-router-dom";
import MenuNavbar from "../MenuNavbar";
import AnnouncementBar from "../AnnouncementBar";
import { Toaster } from "../ui/toaster";

import axiosWithConfig, { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { LOGOUT_USER } from "@/utils/redux/userLoginSlice";

const RootLayout = () => {
  const user = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  if (user?.role === "user") {
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
    <div className="relative">
      <AnnouncementBar />
      <MenuNavbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default RootLayout;
