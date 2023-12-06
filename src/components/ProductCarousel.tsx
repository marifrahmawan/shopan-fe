import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { ReactChild } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type IProps = {
  children: ReactChild[];
};

const ProductCarousel = ({ children }: IProps) => {
  return (
    <Carousel
      showStatus={false}
      infiniteLoop={true}
      emulateTouch={true}
      showIndicators={false}
      dynamicHeight={true}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <div
            className="absolute left-0 top-0 z-10 flex h-full w-[40px] items-center justify-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-black/50"
            onClick={onClickHandler}
          >
            <ChevronLeftCircle className="h-[30px] w-[30px] stroke-white/80" />
          </div>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <div
            className="absolute right-0 top-0 z-10 flex h-full w-[40px] items-center justify-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-black/50"
            onClick={onClickHandler}
          >
            <ChevronRightCircle className="h-[30px] w-[30px] stroke-white/80" />
          </div>
        )
      }
    >
      {children}
    </Carousel>
  );
};

export default ProductCarousel;
