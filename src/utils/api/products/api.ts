import { AxiosError } from "axios";
import { ProductType } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { IResponse } from "../types";

export const createProduct = async (body: ProductType) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;

    for (key in body) {
      if (body[key].constructor === FileList) {
        for (let i = 0; i < body[key].length; i++) {
          formData.append(`${key}`, body[key][i]);
        }
      } else if (body[key].constructor === Array) {
        for (let i = 0; i < body[key].length; i++) {
          formData.append(`${key}[]`, body[key][i]);
        }
      } else {
        formData.append(key, body[key]);
      }
    }

    const res = await axiosWithConfig.post("/product/create", formData);

    return res.data as IResponse<ProductType>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};
