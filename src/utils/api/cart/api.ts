import { AxiosError } from "axios";
import axiosWithConfig from "../axiosWithConfig";
import { IResponse } from "../types";
import { ICart } from ".";
import { CustomHttpError } from "../CustomHttpError";

export const getUserCart = async () => {
  try {
    const res = await axiosWithConfig.get("/cart");

    return res.data as IResponse<ICart>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

export const addToCart = async (
  productId: string | undefined,
  quantity: number,
  color?: string,
  dimension?: string,
  size?: string,
) => {
  try {
    const res = await axiosWithConfig.post("/cart", {
      productId,
      quantity,
      color,
      dimension,
      size,
    });

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

export const reduceCart = async (
  productId: string,
  size?: string,
  color?: string,
  dimension?: string,
) => {
  try {
    const res = await axiosWithConfig.post("/cart/reduce", {
      productId,
      size,
      color,
      dimension,
    });

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

export const removeFromCart = async (
  productId: string,
  size?: string,
  color?: string,
  dimension?: string,
) => {
  try {
    const res = await axiosWithConfig.post("cart/remove", {
      productId,
      size,
      color,
      dimension,
    });

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
