/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { cn } from "@/utils/utils";
import { Separator } from "./ui/separator";

interface IProducts {
  id: string;
  productImage: string;
  productName: string;
  price: number;
  ratings: number;
}

const CardProduct = (props: IProducts) => {
  const navigate = useNavigate();
  const { id, productImage, productName, price, ratings } = props;

  return (
    <div
      className="my-3 h-full w-full rounded-lg p-4 shadow-lg transition-all duration-300 ease-in-out hover:cursor-pointer dark:border mt-2"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="relative mb-3 h-[200px] w-full overflow-hidden rounded-md md:h-[349px]">
        <img
          src={productImage}
          alt="table lamp"
          className="h-full w-full object-contain"
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

      <p className="mb-1 line-clamp-2 h-[48px] text-ellipsis font-semibold">
        {productName}
      </p>

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
      <div className="mb-1 mt-2 flex items-center gap-1">
        <p className="text-[14px] font-semibold">{ratings}</p>
        <div className="h-full">
          <Star
            className={cn(
              "h-[14px] w-[14px] fill-yellow-500 stroke-yellow-500",
            )}
          />
        </div>
        <Separator
          orientation="vertical"
          className="mx-1 h-4 w-[2px] bg-foreground"
        />
        <p className="text-[14px] text-neutral-500">18 Sold</p>
      </div>
    </div>
  );
};

export default CardProduct;
