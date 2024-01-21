import * as z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export interface IProduct {
  _id: string;
  productName: string;
  productDetail: string;
  productCategory: string;
  productPrice: number;
  productPicture: string[];
  productAvailable: boolean;
  productStock: number;
  productSize: string[];
  productColor: string[];
  productDimension: string[];
  productSold: number;
}

const productSchemaBase = z.object({
  productName: z.string().min(1, { message: "Enter product name" }),
  productDetail: z.string().min(1, { message: "Enter product details" }),
  productPrice: z
    .string()
    .min(1, { message: "Enter product price" })
    .regex(new RegExp(/^\d*[1-9]\d*$/), "Enter valid price"),
  productCategory: z.string().min(1, { message: "Choose Category" }),
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
    z.string().min(1, { message: "Enter product size" }).optional(),
  ),
  productColor: z.array(
    z.string().min(1, { message: "Enter product color" }).optional(),
  ),
  productDimension: z.array(
    z.string().min(1, { message: "Enter product dimension" }).optional(),
  ),
});

export const addProductSchema = z
  .object({
    productPicture: z
      .instanceof(File, {message: "Select an Image"})
      .refine(
        (files) => {
          // Check if all items in the array are instances of the File object
          return files.name !== "";
        },
        {
          // If the refinement fails, throw an error with this message
          message: "Select an Image",
        },
      )
      .refine(
        (files) => {
          return files.size <= 2000000;
        },
        {
          message: "File size should be less than 2mb.",
        },
      )
      .refine(
        (files) => {
          return ACCEPTED_IMAGE_TYPES.includes(files.type);
        },
        {
          message: "Only these types are allowed .jpg, .jpeg and .png",
        },
      )
      .array(),
  })
  .merge(productSchemaBase);

export const editProductSchema = z
  .object({
    productPicture: z
      .string()
      .array()
      .or(
        z
          .instanceof(File)
          .refine(
            (files) => {
              // Check if all items in the array are instances of the File object
              return files.name !== "";
            },
            {
              // If the refinement fails, throw an error with this message
              message: "Expected a file",
            },
          )
          .refine(
            (files) => {
              return files.size <= 2000000;
            },
            {
              message: "File size should be less than 2mb.",
            },
          )
          .refine(
            (files) => {
              return ACCEPTED_IMAGE_TYPES.includes(files.type);
            },
            {
              message: "Only these types are allowed .jpg, .jpeg and .png",
            },
          )
          .array(),
      ),
  })
  .merge(productSchemaBase);

export type AddProductType = z.infer<typeof addProductSchema>;
export type EditProductType = z.infer<typeof editProductSchema>;
