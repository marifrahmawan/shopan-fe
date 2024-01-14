import { useEffect, useState } from "react";
import { useAppSelector } from "@/utils/redux/hooks";
import CartItem from "./CartItem";
import { getUserCart } from "@/utils/api/cart";
import { RpConvertion } from "@/utils/utils";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState<number | undefined>(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await getUserCart();
        setTotalPrice(res?.data.totalCartPrice);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartData();
  }, [cart]);

  return (
    <div className="container relative mt-5 flex justify-between">
      <div className="grid w-[75%] grid-cols-1 gap-4">
        {cart?.map((data) => <CartItem key={data._id} data={data} />)}
      </div>
      <div className="h-[300px] w-[300px] rounded-lg border p-3">
        <h4 className="text-center text-[18px] font-semibold">Cart Summary</h4>
        <p className="">{RpConvertion(totalPrice)}</p>
      </div>
    </div>
  );
};

export default Cart;
