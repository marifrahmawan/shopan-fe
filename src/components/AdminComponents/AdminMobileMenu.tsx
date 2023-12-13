import { ReactNode, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import DropDownUserMenu from "@/components/DropDownUserMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type IProps = {
  children: ReactNode;
};

const AdminMobileMenu = (props: IProps) => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>My Account</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-4">
          <NavLink
            to="/admin"
            className="text-neutral-7 border-b pb-4 text-left text-[14px] font-medium"
            onClick={() => setOpen(false)}
          >
            Account
          </NavLink>
          <NavLink
            to="products"
            className="text-neutral-7 border-b pb-4 text-left text-[14px] font-medium"
            onClick={() => setOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="invoice"
            className="text-neutral-7 border-b pb-4 text-left text-[14px] font-medium"
            onClick={() => setOpen(false)}
          >
            Invoice
          </NavLink>
        </div>
        <div className="absolute bottom-3 flex w-full flex-col pr-12">
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
          <Button className="hover:bg-neutral-400 w-full rounded-lg py-3 font-medium">
            Sign Up
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdminMobileMenu;
