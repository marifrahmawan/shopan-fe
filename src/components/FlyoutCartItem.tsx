import { useState } from "react";
import { Trash2 } from "lucide-react";
import { addToCart, reduceCart } from "@/utils/api/cart";
import { toast } from "./ui/use-toast";
import { CustomHttpError } from "@/utils/api/CustomHttpError";

interface ICartItem {
  productId: string;
  productPicture: string;
  productName: string;
  productQuantity: number;
  productColor?: string;
  productSize?: string;
  productDimension?: string;
  productPrice: number;
}

const FlyoutCartItem = (props: ICartItem) => {
  const [quantity, setQuantity] = useState(props.productQuantity);

  const addToCartHandler = async () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });

    try {
      const res = await addToCart(props.productId, 1);
      toast({
        description: <p>{res?.message}</p>,
      });
    } catch (error) {
      if (error instanceof CustomHttpError) {
        toast({
          variant: "destructive",
          description: <p>{error.message}</p>,
        });
      }
    }
  };

  const reduceCartHandler = async () => {
    setQuantity((prevState) => {
      return prevState - 1;
    });

    try {
      const res = await reduceCart(props.productId);

      console.log(res?.message);
    } catch (error) {
      if (error instanceof CustomHttpError) {
        toast({
          variant: "destructive",
          description: <p>{error.message}</p>,
        });
      }
    }
  };

  return (
    <div className="flex h-36 items-center justify-between border-b">
      <div className="flex w-full gap-4">
        <div className="h-full w-28 ">
          <img
            src={props.productPicture}
            alt="toaster"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex w-full justify-between">
          <div>
            <p className="mb-2 text-[14px] font-semibold">
              {props.productName}
            </p>
            <p className="text-neutral-4 mb-3 text-[12px]">Color: White</p>
            <div className="p-[1px flex w-fit rounded-lg border border-slate-400">
              <button
                className={`w-7 rounded-bl-[7px] rounded-tl-[7px] font-semibold ${
                  quantity === 0 || quantity < 0 ? "bg-red-500" : "bg-green-300"
                }`}
                onClick={reduceCartHandler}
                disabled={quantity === 0 || quantity < 0 ? true : false}
              >
                -
              </button>
              <input
                type="text"
                className="w-9 bg-transparent text-center"
                disabled
                value={quantity}
                min={0}
              />
              <button
                className="w-7 rounded-br-[7px] rounded-tr-[7px] bg-green-300 font-semibold"
                onClick={addToCartHandler}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex w-full justify-center">
              <Trash2 className="h-6 w-6 stroke-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyoutCartItem;
