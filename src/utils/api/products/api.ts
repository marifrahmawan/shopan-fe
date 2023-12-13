import { AxiosError } from "axios";
import { ProductType } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { IResponse } from "../types";

export const createProduct = async (body: ProductType) => {
  try {
    const res = await axiosWithConfig.post("/product/create", body);

    return res.data as IResponse<ProductType>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};
