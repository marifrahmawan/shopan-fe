import { ReactNode, useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { ICart, getUserCart } from "@/utils/api/cart";
import FlyoutCartItem from "./FlyoutCartItem";

interface IProps {
  children: ReactNode;
}

const FlyoutCart = (props: IProps) => {
  const { children } = props;
  const [openFlyOutCart, setOpenFlyOutCart] = useState(false);
  const [cartData, setCartData] = useState<ICart>();

  const fetchCartData = async () => {
    try {
      const res = await getUserCart();

      setCartData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (openFlyOutCart) {
      fetchCartData();
    }
    if (!openFlyOutCart) {
      setCartData(undefined);
    }
  }, [openFlyOutCart]);

  return (
    <Sheet open={openFlyOutCart} onOpenChange={setOpenFlyOutCart}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        {cartData?.products?.map((product) => (
          <FlyoutCartItem
            key={product.productId._id}
            productId={product.productId._id}
            productName={product.productId.productName}
            productPicture={product.productId.productPicture[0]}
            productQuantity={product.quantity}
            productPrice={product.price}
          />
        ))}

        <div className="absolute bottom-3 w-full pr-12">
          <div className="flex w-full flex-col items-center">
            <Button className="mb-4 w-full rounded-lg py-3 font-medium">
              Checkout
            </Button>
            <a href="./" className="text-[14px] font-semibold underline">
              View Cart
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FlyoutCart;
