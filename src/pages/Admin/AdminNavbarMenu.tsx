import shopanLogo from "@/assets/img/shopan-logo.png";
import DropDownUserMenu from "@/components/DropDownUserMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuIcon } from "lucide-react";

import { Link } from "react-router-dom";
import AdminMobileMenu from "./AdminMobileMenu";

const AdminNavbarMenu = () => {
  return (
    <div className="sticky top-0 z-10 flex w-full bg-white/90 dark:bg-background">
      <div className="container flex h-16 w-full items-center justify-between">
        <div className="md:hidden">
          <AdminMobileMenu>
            <MenuIcon />
          </AdminMobileMenu>
        </div>
        <div className="hidden md:block">
          <Link to="/">
            <img src={shopanLogo} alt="Logo" className="h-[50px] w-[50px]" />
          </Link>
        </div>
        <span className="hidden h-7 w-7 md:block">
          <DropDownUserMenu>
            <Avatar className="h-full w-full">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropDownUserMenu>
        </span>
      </div>
    </div>
  );
};

export default AdminNavbarMenu;
