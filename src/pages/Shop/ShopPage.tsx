import bannerImage from "../../assets/img/dan-gold-4HG3Ca3EzWw-unsplash.jpg";
import { products } from "../../data";
import CardProduct from "../../components/CardProduct";

const ShopPage = () => {
  return (
    <div className="container">
      <div className="relative mb-14 mt-2 h-[400px] w-full">
        <img
          src={bannerImage}
          alt="room decoration"
          className="h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
          <div className="rounded-md bg-neutral-1 bg-opacity-75  p-4 text-center">
            <h3 className="mb-4">Decoration</h3>
            <p>Let's design the place you always imagined.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="hidden w-[262px] lg:block">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 hover:cursor-pointer">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
                className="h-full w-full stroke-black"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <line x1="50.69" y1="32" x2="56.32" y2="32"></line>
                  <line x1="7.68" y1="32" x2="38.69" y2="32"></line>
                  <line x1="26.54" y1="15.97" x2="56.32" y2="15.97"></line>
                  <line x1="7.68" y1="15.97" x2="14.56" y2="15.97"></line>
                  <line x1="35" y1="48.03" x2="56.32" y2="48.03"></line>
                  <line x1="7.68" y1="48.03" x2="23" y2="48.03"></line>
                  <circle cx="20.55" cy="15.66" r="6"></circle>
                  <circle cx="44.69" cy="32" r="6"></circle>
                  <circle cx="29" cy="48.03" r="6"></circle>
                </g>
              </svg>
            </span>
            <p className="text-[20px] font-semibold">Filter</p>
          </div>
        </div>
        {/* PRODUCT LIST */}
        <div className="w-full">
          <div className="mb-12 flex justify-between">
            <p className="text-[20px] font-semibold">Living Room</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {products.map(
              ({ id, productName, price, productImage, ratings }) => {
                return (
                  <CardProduct
                    key={id}
                    id={id}
                    productImage={productImage}
                    productName={productName}
                    ratings={ratings}
                    price={price}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
