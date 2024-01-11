import { AxiosError } from "axios";
import { AddCategoryType, EditCategoryType, ICategory } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { IResponse } from "../types";
import { CustomHttpError } from "../CustomHttpError";

export const getCategory = async () => {
  try {
    const res = await axiosWithConfig.get("/category");

    return res.data as IResponse<ICategory[]>;
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

export const addCategory = async (body: AddCategoryType) => {
  try {
    const formData = new FormData();

    let key: keyof typeof body;

    for (key in body) {
      if (body[key] instanceof File) {
        formData.append(`${key}`, body[key] as File);
      } else {
        formData.append(key, body[key] as string);
      }
    }

    const res = await axiosWithConfig.post(`/category`, formData);

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

export const updateCategory = async (
  categoryId: string,
  body: EditCategoryType,
) => {
  try {
    const res = await axiosWithConfig.put(
      `/category/update/${categoryId}`,
      body,
    );

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

export const deleteCategory = async (categoryId: string) => {
  try {
    const res = await axiosWithConfig.delete(`/category/delete/${categoryId}`);

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
