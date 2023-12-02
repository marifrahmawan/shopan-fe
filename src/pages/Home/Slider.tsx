import sliderPic from "../../assets/img/slider.jpg";
import chevronLeft from "../../assets/img/chevron-left-svgrepo-com.svg";
import chevronRight from "../../assets/img/chevron-right-svgrepo-com.svg";

const Slider = () => {
  return (
    <div className="relative mb-8 flex h-[250px] w-full items-center md:h-[536px]">
      <span className="absolute left-4 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-1 opacity-70 hover:cursor-pointer md:left-8 md:h-12 md:w-12">
        <img
          src={chevronLeft}
          alt="Chevron Left"
          className="h-4 w-4 md:h-7 md:w-7"
        />
      </span>
      <div className="h-full w-full">
        <img
          src={sliderPic}
          alt="carousel"
          className="h-full w-full object-cover"
        />
      </div>
      <span className="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-1 opacity-70 hover:cursor-pointer md:right-8 md:h-12 md:w-12">
        <img
          src={chevronRight}
          alt="Chevron Right"
          className="h-4 w-4 md:h-7 md:w-7"
        />
      </span>
    </div>
  );
};

export default Slider;
