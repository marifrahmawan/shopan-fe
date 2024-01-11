import {
  addProductSchema,
  AddProductType,
  editProductSchema,
  EditProductType,
  IProduct,
} from "./type";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./api";

export {
  addProductSchema,
  editProductSchema,
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
export type { AddProductType, EditProductType, IProduct };
