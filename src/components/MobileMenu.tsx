import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import shopanLogo from "../assets/img/shopan-logo.png";
import bagLogo from "../assets/img/bag.svg";
import searchLogo from "../assets/img/search.svg";

type IProps = {
  children: ReactNode;
};

const MobileMenu = (props: IProps) => {
  const { children } = props;

  return (
    <Sheet>
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
          <SheetDescription>
            <form className="mb-4 flex h-12 w-full items-center gap-3 rounded-lg border pl-2">
              <div className="flex h-full items-center">
                <img src={searchLogo} alt="search" className="h-7 w-7" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full focus:outline-none"
              />
            </form>

            <div className="flex w-full flex-1 flex-col gap-4">
              <NavLink
                to="./"
                className="border-b pb-4 text-left text-[14px] font-medium text-neutral-7"
              >
                Home
              </NavLink>
              <NavLink
                to="shop"
                className="border-b pb-4 text-left text-[14px] font-medium text-neutral-7"
              >
                Shop
              </NavLink>
              <a
                href="./"
                className="border-b pb-4 text-left text-[14px] font-medium text-neutral-7"
              >
                Product
              </a>
              <a
                href="./"
                className="border-b pb-4 text-left text-[14px] font-medium text-neutral-7"
              >
                Contact Us
              </a>
            </div>

            <div className="absolute bottom-3 flex w-full flex-col pr-12">
              <a
                href="./"
                className="mb-4 flex justify-between border-b py-1 pb-4"
              >
                <p>Cart</p>
                <span className="relative h-7 w-7">
                  <span className="absolute -right-0 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-[11px] text-neutral-1">
                    2
                  </span>
                  <img
                    src={bagLogo}
                    alt="bag"
                    className="h-7 w-7 hover:cursor-pointer"
                  />
                </span>
              </a>
              <a
                href="./"
                className="mb-5 flex justify-between border-b pb-4 pt-1"
              >
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
              </a>
              <button className="w-full rounded-lg bg-neutral-7 py-3 font-medium text-neutral-1 hover:bg-neutral-4">
                Sign Up
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
