import { useEffect, useState } from "react";
import CardProduct from "@/components/CardProduct";
import { SlidersHorizontalIcon } from "lucide-react";
import { IProduct, getProducts } from "@/utils/api/products";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { toast } from "@/components/ui/use-toast";
import AdsSlider from "@/components/AdsSlider";

const ShopPage = () => {
  const [products, setProducts] = useState<IProduct[] | undefined>([]);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();

      setProducts(res?.data);
    } catch (error) {
      if (error instanceof CustomHttpError) {
        toast({
          variant: "destructive",
          title: error.statusCode?.toString(),
          description: error.message,
        });
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mb-4 h-full">
      <AdsSlider/>

      <div className="flex gap-6">
        <div className="hidden w-[262px] lg:block">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 hover:cursor-pointer">
              <SlidersHorizontalIcon />
            </span>
            <p className="text-[20px] font-semibold">Filter</p>
          </div>
        </div>

        <div className="h-full w-full">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 ">
            {products?.map((product) => {
              return (
                <CardProduct
                  key={product._id}
                  id={product._id}
                  productImage={product.productPicture[0]}
                  productName={product.productName}
                  ratings={5}
                  price={product.productPrice}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
