import sliderPic from "@/assets/img/slider.jpg";
import AdsCorousel from "./AdsCorousel";

const AdsSlider = () => {
  return (
    <AdsCorousel>
      <div className="aspect-auto h-[200px] object-cover">
        <img src={sliderPic} className="h-full object-cover" />
      </div>
      <div className="aspect-auto h-[200px] object-cover">
        <img src={sliderPic} className="h-full object-cover" />
      </div>
    </AdsCorousel>
  );
};

export default AdsSlider;
