import { useEffect, useState } from "react";
import bannerImage from "@/assets/img/dan-gold-4HG3Ca3EzWw-unsplash.jpg";
// import { products } from "@/data";
import CardProduct from "@/components/CardProduct";
import { SlidersHorizontalIcon } from "lucide-react";
import { IProduct, getProducts } from "@/utils/api/products";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { toast } from "@/components/ui/use-toast";

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
    <div className="container">
      <div className="relative mb-14 mt-2 h-[400px] w-full">
        <img
          src={bannerImage}
          alt="room decoration"
          className="h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
          <div className="bg-neutral-1 rounded-md bg-opacity-75  p-4 text-center">
            <h3 className="mb-4">Decoration</h3>
            <p>Let's design the place you always imagined.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="hidden w-[262px] lg:block">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 hover:cursor-pointer">
              <SlidersHorizontalIcon />
            </span>
            <p className="text-[20px] font-semibold">Filter</p>
          </div>
        </div>
        {/* PRODUCT LIST */}
        <div className="w-full">
          <div className="mb-12 flex justify-between">
            <p className="text-[20px] font-semibold">Living Room</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
