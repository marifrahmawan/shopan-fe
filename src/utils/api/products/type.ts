import * as z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

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

const productSchemaBase = z.object({
  productName: z.string().min(1, { message: "Enter product name" }),
  productDetail: z.string().min(1, { message: "Enter product details" }),
  productPrice: z
    .string()
    .min(1, { message: "Enter product price" })
    .regex(new RegExp(/^\d*[1-9]\d*$/), "Enter valid price"),
  productBrand: z.string().min(1, { message: "Enter product brand" }),
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

export const addProductSchema = z
  .object({
    productPicture: z
      .instanceof(FileList)
      .refine(
        (files) => {
          // Check if all items in the array are instances of the File object
          for (let i = 0; i < files.length; i++) {
            return files[i] instanceof File;
          }
        },
        {
          // If the refinement fails, throw an error with this message
          message: "Expected a file",
        },
      )
      .refine(
        (files) => {
          for (let i = 0; i < files.length; i++) {
            return files[i].size <= 2000000;
          }
        },
        {
          message: "File size should be less than 2mb.",
        },
      )
      .refine(
        (files) => {
          for (let i = 0; i < files.length; i++) {
            return ACCEPTED_IMAGE_TYPES.includes(files[i].type);
          }
        },
        {
          message: "Only these types are allowed .jpg, .jpeg and .png",
        },
      ),
  })
  .merge(productSchemaBase);

export const editProductSchema = z
  .object({
    productPicture: z
      .string()
      .array()
      .or(
        z
          .instanceof(FileList)
          .refine(
            (files) => {
              // Check if all items in the array are instances of the File object
              for (let i = 0; i < files.length; i++) {
                return files[i] instanceof File;
              }
            },
            {
              // If the refinement fails, throw an error with this message
              message: "Expected a file",
            },
          )
          .refine(
            (files) => {
              for (let i = 0; i < files.length; i++) {
                return files[i].size <= 2000000;
              }
            },
            {
              message: "File size should be less than 2mb.",
            },
          )
          .refine(
            (files) => {
              for (let i = 0; i < files.length; i++) {
                return ACCEPTED_IMAGE_TYPES.includes(files[i].type);
              }
            },
            {
              message: "Only these types are allowed .jpg, .jpeg and .png",
            },
          ),
      ),
  })
  .merge(productSchemaBase);

export type AddProductType = z.infer<typeof addProductSchema>;
export type EditProductType = z.infer<typeof editProductSchema>;
