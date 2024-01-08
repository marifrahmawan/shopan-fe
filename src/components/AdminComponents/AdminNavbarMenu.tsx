import DropDownUserMenu from "@/components/DropDownUserMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuIcon } from "lucide-react";
import AdminMobileMenu from "./AdminMobileMenu";

const AdminNavbarMenu = () => {
  return (
    <div className="sticky top-0 z-10 flex w-full bg-white/90 dark:bg-background">
      <div className="container flex h-12 w-full items-center justify-end">
        <div className="md:hidden">
          <AdminMobileMenu>
            <MenuIcon />
          </AdminMobileMenu>
        </div>
        <span className="hidden h-8 w-8 md:block">
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
