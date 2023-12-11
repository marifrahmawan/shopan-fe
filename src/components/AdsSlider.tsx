import sliderPic from "@/assets/img/slider.jpg";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

const AdsSlider = () => {
  return (
    <div className="relative mb-8 flex h-[250px] w-full items-center md:h-[536px]">
      <span className="absolute left-4 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-900 opacity-70 hover:cursor-pointer md:left-8 md:h-10 md:w-10">
        <ChevronLeftCircle className="h-4 w-4 md:h-7 md:w-7" />
      </span>
      <div className="h-full w-full">
        <img
          src={sliderPic}
          alt="carousel"
          className="h-full w-full object-cover"
        />
      </div>
      <span className="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-900 opacity-70 hover:cursor-pointer md:right-8 md:h-10 md:w-10">
        <ChevronRightCircle className="h-4 w-4 md:h-7 md:w-7" />
      </span>
    </div>
  );
};

export default AdsSlider;
