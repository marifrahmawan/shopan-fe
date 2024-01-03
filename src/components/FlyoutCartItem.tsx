import { useState } from "react";
import { Trash2 } from "lucide-react";
import { addToCart, reduceCart, removeFromCart } from "@/utils/api/cart";
import { toast } from "./ui/use-toast";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { useAppDispatch } from "@/utils/redux/hooks";
import {
  ADD_PRODUCT_TO_CART,
  REDUCE_PRODUCT_FROM_CART,
  REMOVE_FROM_CART,
} from "@/utils/redux/userCartSlice";

interface ICartItem {
  _id?: string;
  productId: string;
  productName: string;
  productPicture: string;
  productQuantity: number;
  productColor?: string;
  productSize?: string;
  productDimension?: string;
  productPrice: number;
}

const FlyoutCartItem = (props: ICartItem) => {
  const {
    _id,
    productId,
    productName,
    productPicture,
    productQuantity,
    productColor,
    productSize,
    productDimension,
    productPrice,
  } = props;

  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(productQuantity);

  const addToCartHandler = async () => {
    try {
      setQuantity((prevState) => {
        return prevState + 1;
      });

      await addToCart(
        props.productId,
        1,
        productColor,
        productDimension,
        productSize,
      );
      dispatch(
        ADD_PRODUCT_TO_CART({
          _id,
          productId,
          productName,
          productPicture,
          quantity: 1,
          size: productSize,
          color: productColor,
          dimension: productDimension,
          price: productPrice,
        }),
      );
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
    try {
      setQuantity((prevState) => {
        return prevState - 1;
      });

      await reduceCart(productId, productSize, productColor, productDimension);

      dispatch(
        REDUCE_PRODUCT_FROM_CART({
          productId,
          size: productSize,
          color: productColor,
          dimension: productDimension,
        }),
      );
    } catch (error) {
      if (error instanceof CustomHttpError) {
        toast({
          variant: "destructive",
          description: <p>{error.message}</p>,
        });
      }
    }
  };

  const removeFromCartHandler = async () => {
    try {
      await removeFromCart(
        productId,
        productSize,
        productColor,
        productDimension,
      );

      dispatch(
        REMOVE_FROM_CART({
          productId,
          size: productSize,
          color: productColor,
          dimension: productDimension,
        }),
      );
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

            <div className="mb-3">
              {props.productColor && (
                <p className="text-neutral-4 text-[12px]">
                  {props.productColor}
                </p>
              )}

              {props.productSize && (
                <p className="text-neutral-4 text-[12px]">
                  {props.productSize}
                </p>
              )}

              {props.productDimension && (
                <p className="text-neutral-4 text-[12px]">
                  {props.productDimension}
                </p>
              )}
            </div>

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
            <button
              className="flex w-full justify-center"
              onClick={removeFromCartHandler}
            >
              <Trash2 className="h-6 w-6 stroke-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyoutCartItem;
