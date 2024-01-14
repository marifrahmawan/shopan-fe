import { toast } from "@/components/ui/use-toast";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { addToCart, reduceCart, removeFromCart } from "@/utils/api/cart";
import { useAppDispatch } from "@/utils/redux/hooks";
import {
  ADD_PRODUCT_TO_CART,
  ICartRedux,
  REDUCE_PRODUCT_FROM_CART,
  REMOVE_FROM_CART,
} from "@/utils/redux/userCartSlice";
import { RpConvertion } from "@/utils/utils";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

interface IProps {
  data: ICartRedux;
}

const CartItem = (props: IProps) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(data.quantity);

  const addToCartHandler = async () => {
    try {
      setQuantity((prevState) => {
        return prevState + 1;
      });

      await addToCart(data.productId, 1, data.color, data.dimension, data.size);

      dispatch(
        ADD_PRODUCT_TO_CART({
          _id: data._id,
          productId: data.productId,
          productName: data.productName,
          productPicture: data.productPicture,
          quantity: 1,
          size: data.size,
          color: data.color,
          dimension: data.dimension,
          price: data.price,
          totalPrice: data.totalPrice,
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

      await reduceCart(data.productId, data.size, data.color, data.dimension);

      dispatch(
        REDUCE_PRODUCT_FROM_CART({
          productId: data.productId,
          size: data.size,
          color: data.color,
          dimension: data.dimension,
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
        data.productId,
        data.size,
        data.color,
        data.dimension,
      );

      dispatch(
        REMOVE_FROM_CART({
          productId: data.productId,
          size: data.size,
          color: data.color,
          dimension: data.dimension,
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
    <div className="h-fit rounded-lg border p-2">
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-3">
          <section className="h-40 w-40 overflow-clip rounded-md">
            <img src={data.productPicture} alt={data.productName} />
          </section>
          <div>
            <h4 className="w-[300px] font-semibold">{data.productName}</h4>
            <p className="mt-2 text-[14px] text-neutral-500">{data.color}</p>
            <p className="mt-2 text-[14px] text-neutral-500">{data.size}</p>
            <p className="mt-2 text-[14px] text-neutral-500">
              {data.dimension}
            </p>
            <p className="mt-2 text-[14px] text-neutral-500">
              {RpConvertion(data.price)}
            </p>
            <div className="mt-2 flex w-fit rounded-lg border border-slate-400 p-[1px]">
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
        </div>

        <section>
          <h4 className="font-medium">Total</h4>
          <p className="text-secondary-green text-[16px] font-medium">{RpConvertion(data.totalPrice)}</p>
        </section>

        <button
          className="flex w-fit justify-center pr-5"
          onClick={removeFromCartHandler}
        >
          <Trash2Icon className="h-6 w-6 stroke-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
