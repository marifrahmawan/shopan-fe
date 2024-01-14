import { useAppSelector } from "@/utils/redux/hooks";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="container mt-5 flex justify-between ">
      <div className="grid w-[75%] grid-cols-1 gap-4">
        {cart?.map((data) => (
          <CartItem key={data._id} data={data} />
        ))}
      </div>
      <div className="h-[300px] w-[300px] rounded-lg border"></div>
    </div>
  );
};

export default Cart;
