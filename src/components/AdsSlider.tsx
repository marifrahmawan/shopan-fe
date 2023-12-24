import sliderPic from "@/assets/img/slider.jpg";
import AdsCorousel from "./AdsCorousel";
import { Link } from "react-router-dom";

const AdsSlider = () => {
  return (
    <AdsCorousel>
      <div className="aspect-auto h-[200px] object-cover">
        <img src={sliderPic} className="h-full" />
      </div>
      <Link to={"/"}>
        <div className="aspect-auto h-[200px] object-cover">
          <img src={sliderPic} className="h-full" />
        </div>
      </Link>
    </AdsCorousel>
  );
};

export default AdsSlider;
