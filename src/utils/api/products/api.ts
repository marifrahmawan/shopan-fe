import { AxiosError } from "axios";
import { IProduct, ProductType } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { IResponse } from "../types";
import { IParamsRequest } from "@/utils/types/api";
import { CustomHttpError } from "../CustomHttpError";

export const getProducts = async (params?: IParamsRequest) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];
      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }
    const url = query ? `/product?${query}` : "/product";
    const res = await axiosWithConfig.get(url);

    return res.data as IResponse<IProduct[] | undefined>;
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

export const getProductById = async (productId: string) => {
  try {
    const res = await axiosWithConfig.get(`/product/${productId}`);

    return res.data as IResponse<IProduct>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response;
    }
  }
};

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
      throw error.response;
    }
  }
};
