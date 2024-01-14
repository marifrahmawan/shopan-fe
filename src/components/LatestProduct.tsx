import { useEffect, useState } from "react";
import { IProduct, getProducts } from "@/utils/api/products";
import { toast } from "@/components/ui/use-toast";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import CardProduct from "@/components/CardProduct";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const LatestProduct = () => {
  const [newArrivalProducts, setNewArrivalProducts] = useState<IProduct[] | undefined>([]) // prettier-ignore

  const fetchNewArrivalProducts = async () => {
    try {
      const res = await getProducts({limit: "8"});

      setNewArrivalProducts(res?.data);
    } catch (error) {
      if (error instanceof CustomHttpError) {
        toast({
          variant: "destructive",
          description: <p>{error.message}</p>,
        });
      }
    }
  };

  useEffect(() => {
    fetchNewArrivalProducts();
  }, []);

  return (
    <Carousel
      className="min-w-full max-w-sm"
      opts={{
        slidesToScroll: 1,
      }}
    >
      <div className="mb-2 flex justify-between">
        <div className="w-[149px]">
          <h3 className="text-xl font-semibold tracking-tight">
            New Arrivals
          </h3>
        </div>
        <div className="border-neutral-7 flex items-end border-b">
          <Link to="/shop" className="font-medium">
            More Products &#10141;
          </Link>
        </div>
      </div>
      <CarouselContent className="-ml-1 mb-5 mt-1">
        {newArrivalProducts?.map((product) => {
          return (
            <CarouselItem
              key={product._id}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <CardProduct
                  id={product._id}
                  productName={product.productName}
                  productImage={product.productPicture[0]}
                  price={product.productPrice}
                  ratings={5}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-2 lg:-left-10" />
      <CarouselNext className="right-2 lg:-right-10" />
    </Carousel>
  );
};

export default LatestProduct;
