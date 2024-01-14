import AdsCorousel from "./AdsCorousel";

const AdsSlider = () => {
  return (
    <AdsCorousel>
      <div className="aspect-auto h-[260px] object-cover">
        <img src={`https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/1/8/0dbc162f-3281-4f11-9ce1-a90161fb297c.jpg.webp?ect=4g`} className="h-full object-cover" />
      </div>
      <div className="aspect-auto h-[260px] object-cover">
        <img src={`https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/1/11/2aa95cc9-c46d-48f5-9aa8-d01d0bea4940.jpg.webp?ect=4g`} className="h-full object-cover" />
      </div>
    </AdsCorousel>
  );
};

export default AdsSlider;
