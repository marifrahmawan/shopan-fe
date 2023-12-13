import * as z from "zod";

export const productSchema = z.object({
  productName: z.string().min(1, { message: "Enter product name" }),
  productDetail: z.string().min(1, { message: "Enter product details" }),
  productPrice: z
    .number({
      invalid_type_error: "Price must be number",
      required_error: "Enter product price",
    })
    .positive({ message: "Enter positive number/price" }),
  productPicture: z
    .string({
      required_error: "Upload some product images",
    })
    .array(),
  productBrand: z.string({
    required_error: "Enter product brand",
  }),
  productAvailable: z.boolean({
    required_error: "Enter the availability product",
  }),
  productStock: z
    .number({
      invalid_type_error: "Stock must be number",
      required_error: "Enter Product Price",
    })
    .positive("Enter positive number"),
});

export type ProductType = z.infer<typeof productSchema>;
