import { AxiosError } from "axios";
import { UserCheckoutType } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { IResponse } from "../types";
import { CustomHttpError } from "../CustomHttpError";

export const addUserCheckout = async (body: UserCheckoutType) => {
  try {
    const res = await axiosWithConfig.post("/", body);
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
