/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { IProduct, getProducts } from "@/utils/api/products";

const ProductsPage = () => {
  const { toast } = useToast();
  //prettier-ignore
  const [products, setProducts] = useState<IProduct[] | undefined>([]);

  const fetchNewArrivalProducts = useCallback(async () => {
    try {
      const res = await getProducts();

      setProducts(res?.data);
    } catch (error: any) {
      toast({
        description: <p className="capitalize">{error.message}</p>,
      });
    }
  }, []);

  useEffect(() => {
    fetchNewArrivalProducts();
  }, []);

  return (
    <div className="w-full">
      <p className="mb-5 w-full text-[34px] font-semibold">My Products</p>

      <Link to={`create`}>
        <Button>
          <PlusCircle className="mr-2" /> Add Product
        </Button>
      </Link>
      <div className="mt-5 grid grid-cols-3">
        {products?.map((product) => (
          <div key={product._id}>
            <p>{product.productName}</p>
            <p>{product.productBrand}</p>
            <p>{product.productPrice}</p>
            <p>{product.productStock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
