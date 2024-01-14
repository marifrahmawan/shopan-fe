export interface ICart {
  _id: string;
  user: string;
  products: {
    _id: string;
    productId: {
      _id: string;
      productName: string;
      productDetail: string;
      productCategory: string;
      productPrice: number;
      productPicture: string[];
      productBrand: string;
      productAvailable: boolean;
      productStock: number;
      productSize?: string[];
      productColor?: string[];
      productDimension?: string[];
      productSold: number;
    };
    color?: string;
    dimension?: string;
    size?: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }[];
}
