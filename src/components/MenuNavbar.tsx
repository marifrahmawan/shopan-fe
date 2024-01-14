import { useEffect } from "react";

import { NavLink } from "react-router-dom";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import shopanLogo from "../assets/img/shopan-logo.png";
import { MenuIcon, Search, ShoppingBag } from "lucide-react";

import MobileMenu from "./MobileMenu";
import FlyoutCart from "./FlyoutCart";
import { toast } from "./ui/use-toast";
import DropDownUserMenu from "./DropDownUserMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getUserCart } from "@/utils/api/cart";
import { CustomHttpError } from "@/utils/api/CustomHttpError";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { ICartRedux, USER_CART_DATA } from "@/utils/redux/userCartSlice";

const searchSchema = z.object({
  search: z.string().min(1, { message: "Enter product name" }),
});

type SearchType = z.infer<typeof searchSchema>;

const MenuNavbar = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user.data);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SearchType>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  const searchHandler = (values: SearchType) => {
    console.log(values);
    reset();
  };

  const fetchCartData = async () => {
    try {
      const res = await getUserCart();

      if (res?.data !== null) {
        const cartRedux: ICartRedux[] = res!.data.products!.map((product) => {
          return {
            _id: product._id,
            productId: product.productId._id,
            productName: product.productId.productName,
            productPicture: product.productId.productPicture[0],
            quantity: product.quantity,
            size: product.size,
            color: product.color,
            dimension: product.dimension,
            price: product.price,
            totalPrice: product.totalPrice,
          };
        });

        dispatch(USER_CART_DATA(cartRedux));
      }
    } catch (error) {
      if (error instanceof CustomHttpError) {
        if (user !== undefined && user.role === "user") {
          toast({
            variant: "destructive",
            description: <p>{error.message}</p>,
          });
        }
      }
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div className="sticky top-0 z-10 flex w-full bg-white/90 dark:bg-background">
      <div className="container flex h-16 items-center justify-between ">
        <div className="h-6 md:hidden">
          <MobileMenu>
            <MenuIcon className="h-full md:hidden" />
          </MobileMenu>
        </div>
        <div className="hidden flex-1 items-center md:flex">
          <NavLink to="/" className="rounded-full dark:bg-white">
            <img
              src={shopanLogo}
              alt="shopan logo"
              className="h-[50px] w-[50px] object-contain hover:cursor-pointer"
            />
          </NavLink>
        </div>

        <form
          onSubmit={handleSubmit(searchHandler)}
          className="hidden md:block"
        >
          <div className="dark:border-bg-white flex h-[40px] w-[500px] items-center overflow-hidden rounded-lg border bg-background pr-3 lg:w-[700px]">
            <input
              type="text"
              id="search"
              className="h-full w-full pl-5 focus:outline-none dark:bg-background"
              disabled={isSubmitting}
              placeholder="Search"
              autoComplete="off"
              {...register("search")}
            />
            <Search className="h-7 w-7 hover:cursor-pointer" />
          </div>
          {errors.search && (
            <p className="h-6 pl-5 text-[14px] text-red-500">
              {errors.search?.message}
            </p>
          )}
        </form>

        <div className="flex flex-1 items-center justify-end gap-3 md:gap-0">
          {user?.role !== "admin" && (
            <span className="relative h-7 w-7 md:mr-5">
              <span className="absolute -right-0 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-[11px] font-bold text-white dark:bg-white dark:text-black">
                {cart.length}
              </span>
              <FlyoutCart>
                <ShoppingBag className="h-7 w-7 hover:cursor-pointer" />
              </FlyoutCart>
            </span>
          )}

          <span className="h-8 w-8">
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
