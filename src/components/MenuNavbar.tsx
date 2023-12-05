import { NavLink } from "react-router-dom";

import shopanLogo from "../assets/img/shopan-logo.png";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { MenuIcon, Search, ShoppingBag } from "lucide-react";

import FlyoutCart from "./FlyoutCart";
import MobileMenu from "./MobileMenu";
import DropDownUserMenu from "./DropDownUserMenu";

const MenuNavbar = () => {
  return (
    <div className="sticky top-0 z-10 flex w-full bg-white/90 dark:bg-bg-dark-mode">
      <div className="container flex h-16 items-center justify-between ">
        <div className="h-6">
          <MobileMenu>
            <MenuIcon className="h-full md:hidden" />
          </MobileMenu>
        </div>
        <div className="hidden flex-1 items-center md:flex">
          <NavLink to="/">
            <img
              src={shopanLogo}
              alt="shopan logo"
              className="h-[50px] w-[50px] object-contain hover:cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="flex-2 hidden justify-center md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-neutral mr-10 font-semibold"
                : "mr-10 font-normal text-neutral-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "mr-10 font-semibold text-neutral-6"
                : "mr-10 font-normal text-neutral-4"
            }
          >
            Shop
          </NavLink>
          <a href="./" className="mr-10 text-neutral-4">
            Product
          </a>
          <a href="./" className="text-neutral-4">
            Contact Us
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <span className="mr-5 hidden h-7 w-7 md:block">
            <Search className="h-full w-full hover:cursor-pointer" />
          </span>

          <span className="relative mr-5 h-7 w-7">
            <span className="absolute -right-0 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-[11px] text-white dark:text-black font-bold dark:bg-white">
              2
            </span>
            <FlyoutCart>
              <ShoppingBag className="h-7 w-7 hover:cursor-pointer" />
            </FlyoutCart>
          </span>

          <span className="hidden h-7 w-7 md:block">
            <DropDownUserMenu>
              <Avatar className="h-full w-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropDownUserMenu>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
