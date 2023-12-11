import axiosWithConfig from "@/utils/api/axiosWithConfig";

import { IResponse } from "@/utils/api/types";
import { IRegister, IRegisterResponse } from ".";
import { AxiosError } from "axios";
import { ILogin, ILoginResponse } from "./type";

export const registerUser = async (body: IRegister) => {
  try {
    const res = await axiosWithConfig.post("/auth/register", body);

    return res.data as IResponse<IRegisterResponse>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

export const loginUser = async (body: ILogin) => {
  try {
    const res = await axiosWithConfig.post("/auth/login", body);

    return res.data as IResponse<ILoginResponse>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};
