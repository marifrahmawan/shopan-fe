import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import shopanLogo from "../assets/img/shopan-logo.png";
import { Search, ShoppingBag } from "lucide-react";
import DropDownUserMenu from "./DropDownUserMenu";

type IProps = {
  children: ReactNode;
};

const MobileMenu = (props: IProps) => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <div className="h-10 w-10">
              <img
                src={shopanLogo}
                alt="shopan logo"
                className="h-full w-full object-contain"
              />
            </div>
          </SheetTitle>
        </SheetHeader>
        <form className="mb-4 flex h-12 w-full items-center gap-3 rounded-lg border pl-2">
          <div className="flex h-full items-center">
            <Search className="h-7 w-7" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none dark:bg-transparent"
          />
        </form>

        <div className="flex w-full flex-1 flex-col gap-4">
          <NavLink
            to="./"
            className="text-neutral-7 border-b pb-4 text-left text-[14px] font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="shop"
            className="text-neutral-7 border-b pb-4 text-left text-[14px] font-medium"
            onClick={() => setOpen(false)}
          >
            Shop
          </NavLink>
          <a
            href="./"
            className="text-neutral-7 border-b pb-4 text-left text-[14px] font-medium"
            onClick={() => setOpen(false)}
          >
            Product
          </a>
          <a
            href="./"
            className="text-neutral-7 border-b pb-4 text-left text-[14px] font-medium"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>

        <div className="absolute bottom-3 flex w-full flex-col pr-12">
          <a href="./" className="mb-4 flex justify-between border-b py-1 pb-4">
            <p>Cart</p>
            <span className="relative h-7 w-7">
              <span className="text-neutral-1 absolute -right-0 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-[11px]">
                2
              </span>
              <ShoppingBag className="h-7 w-7 hover:cursor-pointer" />
            </span>
          </a>
          <DropDownUserMenu>
            <div className="mb-5 flex justify-between border-b pb-4 pt-1">
              <p>Profile</p>
              <span className="relative h-7 w-7">
                <Avatar className="h-full w-full">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
            </div>
          </DropDownUserMenu>
          <button className="bg-neutral-7 text-neutral-1 hover:bg-neutral-4 w-full rounded-lg py-3 font-medium">
            Sign Up
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
