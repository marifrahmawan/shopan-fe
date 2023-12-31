import * as z from "zod";

export interface IProduct {
  _id: string;
  productName: string;
  productDetail: string;
  productPrice: number;
  productPicture: string[];
  productBrand: string;
  productAvailable: boolean;
  productStock: number;
  productSize: string[];
  productColor: string[];
  productDimension: string[];
  productSold: number;
}

export const productSchema = z.object({
  productName: z.string().min(1, { message: "Enter product name" }),
  productDetail: z.string().min(1, { message: "Enter product details" }),
  productPrice: z
    .string()
    .min(1, { message: "Enter product price" })
    .regex(new RegExp(/^\d*[1-9]\d*$/), "Enter valid price"),
  productPicture: z
    .any()
    .refine((file) => file?.length > 0, "Product picture is required."),
  productBrand: z.string().min(1, { message: "Enter product brand" }),
  productAvailable: z
    .boolean({
      required_error: "Enter the availability product",
    })
    .or(z.string()),
  productStock: z
    .string()
    .min(1, { message: "Enter product stock" })
    .regex(new RegExp(/^\d*[1-9]\d*$/), "Enter valid stock"),
  productSize: z.array(
    z
      .string()
      .min(1, { message: "Enter product size" })
      .regex(new RegExp(/^\d*[1-9]\d*$/), "Enter a number")
      .optional(),
  ),
  productColor: z.array(
    z.string().min(1, { message: "Enter product color" }).optional(),
  ),
  productDimension: z.array(
    z.string().min(1, { message: "Enter product dimension" }).optional(),
  ),
});

export type ProductType = z.infer<typeof productSchema>;
