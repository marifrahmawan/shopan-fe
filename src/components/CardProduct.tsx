import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { cn } from "@/utils/utils";
import { useAppSelector } from "@/utils/redux/hooks";

interface IProducts {
  id: string;
  productImage: string;
  productName: string;
  price: number;
  ratings: number;
}

const CardProduct = (props: IProducts) => {
  const user = useAppSelector((state) => state.user.data);

  const { id, productImage, productName, price, ratings } = props;

  const addToCart = (id: string) => {
    console.log(id);
    return id;
  };

  return (
    <div className="col-auto h-full">
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
            <p className="rounded-md bg-secondary-green px-3 py-1 text-center text-xs font-bold">
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
        <div className="h-full">
          <Star className={cn("h-4 w-4 fill-yellow-500 stroke-yellow-500")} />
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <p className="mb-1 line-clamp-2 h-[48px] text-ellipsis font-semibold hover:underline">
          {productName}
        </p>
      </Link>
      <div className="flex gap-3 text-sm">
        <p className="font-semibold text-secondary-green">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          }).format(price)}
        </p>
        <p className="text-neutral-400 line-through">$400.00</p>
      </div>
      {user?.role !== "admin" && (
        <Button
          className="mt-5 w-full rounded-lg py-2"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default CardProduct;
