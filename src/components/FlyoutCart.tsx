import { ReactNode, useState } from "react";

import toasterImage from "../assets/img/toaster.webp";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface IProps {
  children: ReactNode;
}

const FlyoutCart = (props: IProps) => {
  const { children } = props;

  const [count, setCount] = useState(0);

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="flex h-36 items-center justify-between border-b">
          <div className="flex w-full gap-4">
            <div className="h-full w-28 ">
              <img
                src={toasterImage}
                alt="toaster"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex w-full justify-between">
              <div>
                <p className="mb-2 text-[14px] font-semibold">Toaster</p>
                <p className="mb-3 text-[12px] text-neutral-4">Color: White</p>
                <div className="flex rounded-lg border border-slate-400 p-[1px]">
                  <button
                    className={`w-7 rounded-bl-[7px] rounded-tl-[7px] font-semibold ${
                      count === 0 || count < 0 ? "bg-red-500" : "bg-green-300"
                    }`}
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0 || count < 0 ? true : false}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-9 bg-transparent text-center"
                    disabled
                    value={count}
                    min={0}
                  />
                  <button
                    className="w-7 rounded-br-[7px] rounded-tr-[7px] bg-green-300 font-semibold"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p className="mb-2 text-[14px] font-semibold">$99.99</p>
                <button className="flex w-full justify-center">
                  <Trash2 className="h-6 w-6 stroke-red-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

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
