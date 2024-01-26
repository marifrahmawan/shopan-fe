import { AxiosError } from "axios";
import axiosWithConfig from "../axiosWithConfig";
import { IResponse } from "../types";
import { CustomHttpError } from "../CustomHttpError";
import { ICartRedux } from "@/utils/redux/userCartSlice";

export const addUserCheckout = async (data: ICartRedux[]) => {
  try {
    const res = await axiosWithConfig.post("/history", { products: data });

    return res.data as IResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new CustomHttpError({
        name: "HTTP_ERROR",
        message: error.response?.data.message,
        statusCode: error.response?.status,
      });
    }
  }
};
