import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ICategory, getCategory } from "@/utils/api/category";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { toast } from "./ui/use-toast";

const CategoryCard = () => {
  const [categoryData, setCategoryData] = useState<ICategory[] | undefined>([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await getCategory();

        setCategoryData(res?.data);
      } catch (error) {
        if (error instanceof CustomHttpError) {
          toast({
            variant: "destructive",
            description: error.message,
          });
        }
      }
    };

    fetchCategoryData();
  }, []);
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
          {categoryData?.map((category) => {
            return (
              <CarouselItem
                key={category._id}
                className="pl-1 md:basis-28 lg:basis-[134px]"
              >
                <div className="p-1">
                  <Card className="h-[160px] min-w-[120px] rounded-lg overflow-hidden">
                    <img
                      className="h-[110px] w-full object-contain dark:bg-white p-1"
                      src={category.categoryImage}
                      alt={category.categoryName}
                    />
                    <p className="text-center text-[12px] font-medium">
                      {category.categoryName}
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
