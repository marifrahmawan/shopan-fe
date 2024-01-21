import { useEffect, useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useAppSelector } from "@/utils/redux/hooks";
import { getUserCart } from "@/utils/api/cart";
import { RpConvertion } from "@/utils/utils";
import CartItem from "./CartItem";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState<number | undefined>(0);
  const [shipping, setShipping] = useState<"free" | "express" | "pick-up">(
    "free",
  );
  const [shippingPrice, setShippingPrice] = useState(0);

  const shippingHandler = (e: "free" | "express" | "pick-up") => {
    setShipping(e);
    if (e === "free") {
      setShippingPrice(0);
    } else if (e === "express") {
      setShippingPrice(200000);
    } else if (e === "pick-up") {
      setShippingPrice(-100000);
    }
  };

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
      <div className="h-fit w-[300px] rounded-lg border p-3">
        <h4 className="text-center text-[18px] font-semibold">Cart Summary</h4>
        <RadioGroup
          defaultValue={shipping}
          onValueChange={(e: "free" | "express" | "pick-up") =>
            shippingHandler(e)
          }
        >
          <Label
            htmlFor="free"
            className="flex w-full items-center gap-3 border p-3 hover:cursor-pointer"
          >
            <RadioGroupItem value="free" id="free" />
            <p>Free Shipping</p>
          </Label>

          <Label
            htmlFor="express"
            className="flex w-full items-center gap-3 border p-3 hover:cursor-pointer"
          >
            <RadioGroupItem value="express" id="express" />
            <p>Express Shipping</p>
          </Label>

          <Label
            htmlFor="pick-up"
            className="flex w-full items-center gap-3 border p-3 hover:cursor-pointer"
          >
            <RadioGroupItem value="pick-up" id="pick-up" />
            <p>Self Pickup</p>
          </Label>
        </RadioGroup>
        <div className="mt-4 flex justify-between">
          <p className="text-[14px] font-medium">Sub-Total</p>
          <p className="text-[14px] font-medium text-secondary-green">
            {RpConvertion(totalPrice)}
          </p>
        </div>
        <div className="mt-3 flex justify-between">
          <p className="text-[20px] font-semibold">Total</p>
          <p className="text-[20px] font-semibold text-secondary-green">
            {RpConvertion(totalPrice! + shippingPrice)}
          </p>
        </div>
        <Button
          className="mt-5 w-full text-[18px] font-semibold"
          onClick={() =>
            navigate("/checkout", {
              state: {
                shippingChoice: shipping,
                totalPrice: RpConvertion(totalPrice! + shippingPrice),
              },
            })
          }
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
