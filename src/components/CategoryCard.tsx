import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Image } from "lucide-react";
import { Card } from "@/components/ui/card";

const CategoryCard = () => {
  return (
    <>
      <h3 className="mb-3 text-xl font-semibold tracking-tight">Category</h3>
      <Carousel
        className="mb-5 min-w-full"
        opts={{
          slidesToScroll: 10,
        }}
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 19 }, (_, index) => {
            return (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-28 lg:basis-[134px]"
              >
                <div className="p-1">
                  <Card className="h-[160px] min-w-[120px] py-2">
                    <Image className="h-[110px] w-full" />
                    <p className="text-center text-[12px]">
                      Category {index + 1}
                    </p>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
          <CarouselItem className="pl-1 md:basis-28 lg:basis-[134px]">
            <div className="p-1">
              <Card className="flex h-[160px] min-w-[120px] items-center justify-center bg-green-300 py-2">
                <section className=" flex flex-col items-center justify-center">
                  <p>All Category </p>
                  <ArrowRight />
                </section>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 lg:-left-10" />
        <CarouselNext className="right-2 lg:-right-10" />
      </Carousel>
    </>
  );
};

export default CategoryCard;
