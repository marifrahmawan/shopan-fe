import { AxiosError } from "axios";
import { IProduct, AddProductType, EditProductType } from ".";
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
      throw new CustomHttpError({
        name: "HTTP_ERROR",
        message: error.response?.data.message,
        statusCode: error.response?.status,
      });
    }
  }
};

export const createProduct = async (body: AddProductType) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;

    for (key in body) {
      if (body[key] instanceof FileList) {
        for (let i = 0; i < (body[key] as FileList).length; i++) {
          formData.append(`${key}`, (body[key] as FileList)[i]);
        }
      } else if (body[key] instanceof Array) {
        for (let i = 0; i < (body[key] as Array<string | number>).length; i++) {
          formData.append(`${key}[]`, (body[key] as Array<string>)[i]);
        }
      } else {
        formData.append(key, body[key] as string);
      }
    }

    const res = await axiosWithConfig.post("/product/create", formData);

    return res.data as IResponse<AddProductType>;
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

export const updateProduct = async (
  productId: string,
  body: EditProductType,
) => {
  try {
    const formData = new FormData();

    let key: keyof typeof body;

    for (key in body) {
      if (body[key] instanceof FileList) {
        for (let i = 0; i < (body[key] as FileList).length; i++) {
          formData.append(`${key}`, (body[key] as FileList)[i]);
        }
      } else if (body[key] instanceof Array) {
        if ((body[key] as Array<string | number>).length > 0) {
          //prettier-ignore
          for (let i = 0; i < (body[key] as Array<string | number>).length; i++) { 
            formData.append(`${key}[]`, (body[key] as Array<string>)[i]);
          }
        } else {
          formData.append(`${key}[]`, body[key] as Array<string>[0]);
        }
      } else {
        formData.append(key, body[key] as string);
      }
    }

    const res = await axiosWithConfig.put(
      `/product/update/${productId}`,
      formData,
    );

    return res.data as IResponse<EditProductType>;
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

export const deleteProduct = async (productId: string | undefined) => {
  try {
    const res = await axiosWithConfig.delete(`/product/delete/${productId}`);

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
