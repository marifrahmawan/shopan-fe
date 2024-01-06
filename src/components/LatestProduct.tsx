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

const LatestProduct = () => {
  const [newArrivalProducts, setNewArrivalProducts] = useState<IProduct[] | undefined>([]) // prettier-ignore

  const fetchNewArrivalProducts = async () => {
    try {
      const res = await getProducts();

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
      className="min-w-full max-w-sm my-5"
      opts={{
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className="-ml-1">
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
      <CarouselPrevious className="left-2 md:-left-10" />
      <CarouselNext className="right-2 md:-right-10" />
    </Carousel>
  );
};

export default LatestProduct;
