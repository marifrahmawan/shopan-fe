import * as z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export interface ICategory {
  _id: string;
  categoryName: string;
  categoryImage: string;
}

const categorySchemaBase = z.object({
  categoryName: z.string().min(1, { message: "Enter Category Name" }),
});

export const addCategorySchema = z
  .object({
    categoryImage: z
      .instanceof(File)
      .refine(
        (file) => {
          return file.name !== "";
        },
        {
          message: "Category Image is Required",
        },
      )
      .refine(
        (file) => {
          return file.size <= 2000000;
        },
        {
          message: "File size should be less than 2mb.",
        },
      )
      .refine(
        (file) => {
          return ACCEPTED_IMAGE_TYPES.includes(file.type);
        },
        {
          message: "Only these types are allowed .jpg, .jpeg and .png",
        },
      ),
  })
  .merge(categorySchemaBase);

export const editCategorySchema = z
  .object({
    categoryImage: z.string().or(
      z
        .instanceof(File)
        .refine(
          (file) => {
            return file.name !== "";
          },
          {
            message: "Category Image is Required",
          },
        )
        .refine(
          (file) => {
            return file.size <= 2000000;
          },
          {
            message: "File size should be less than 2mb.",
          },
        )
        .refine(
          (file) => {
            return ACCEPTED_IMAGE_TYPES.includes(file.type);
          },
          {
            message: "Only these types are allowed .jpg, .jpeg and .png",
          },
        ),
    ),
  })
  .merge(categorySchemaBase);

export type AddCategoryType = z.infer<typeof addCategorySchema>;
export type EditCategoryType = z.infer<typeof editCategorySchema>;
