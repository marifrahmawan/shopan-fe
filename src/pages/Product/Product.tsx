import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ProductCarousel from "@/components/ProductCarousel";

import { products } from "@/data";

interface IProducts {
  id: number;
  productImage: string;
  productName: string;
  price: number;
  ratings: number;
}

const Product = () => {
  const { product_id } = useParams();
  const res = products.filter(({ id }) => {
    return id === parseInt(product_id!);
  })[0];

  const [product, setProduct] = useState<IProducts>();

  useEffect(() => {
    setProduct(res);
  }, [res]);

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ProductCarousel>
            <div className="aspect-auto h-[300px] md:h-[700px] object-cover">
              <img src={product?.productImage} className="h-full" />
            </div>
            <div className="aspect-auto h-[300px] md:h-[700px] object-cover">
              <img src={product?.productImage} className="h-full" />
            </div>
            <div className="aspect-auto h-[300px] md:h-[700px] object-cover">
              <img src={product?.productImage} className="h-full" />
            </div>
          </ProductCarousel>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Product;
