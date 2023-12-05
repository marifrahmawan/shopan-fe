import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface IProducts {
  id: number;
  productImage: string;
  productName: string;
  price: number;
  ratings: number;
}

const CardProduct = ({
  id,
  productImage,
  productName,
  price,
  ratings,
}: IProducts) => {
  const addToCart = (id: number) => {
    console.log(id);
    return id;
  };

  return (
    <div className="col-auto h-fit">
      <div className="relative mb-3 h-[200px] w-full md:h-[349px]">
        <img
          src={productImage}
          alt="table lamp"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 flex w-full justify-between pl-4 pr-4 pt-4">
          <span>
            <p className="mb-1 rounded-md bg-slate-300 px-3 py-1 text-center text-xs font-bold text-black">
              New
            </p>
            <p className="bg-secondary-green rounded-md px-3 py-1 text-center text-xs font-bold">
              -50%
            </p>
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-transparent stroke-gray-500 hover:fill-red-800 hover:stroke-red-800"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="mb-1 flex items-center gap-1">
        <p className="text-base font-semibold">{ratings}</p>
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] w-[25px] fill-yellow-400"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              className="fill-yellow-500"
              d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
            ></path>
          </g>
        </svg>
      </div>
      <Link to={`/product/${id}`}>
        <p className="mb-1 font-semibold hover:underline">{productName}</p>
      </Link>
      <div className="flex gap-3 text-sm">
        <p className="text-secondary-green font-semibold">${price}</p>
        <p className="text-neutral-400 line-through">$400.00</p>
      </div>
      <Button
        className="mt-5 w-full rounded-lg py-2"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default CardProduct;
