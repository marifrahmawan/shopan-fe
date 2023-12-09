import { ReactNode } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sun, Moon, Computer } from "lucide-react";

import { useTheme } from "@/utils/context/theme-provider";
import { Link } from "react-router-dom";

type IProps = {
  children: ReactNode;
};

const DropDownUserMenu = (props: IProps) => {
  const { children } = props;
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]">
        <DropdownMenuLabel>Halo, Arif</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => setTheme("light")}
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => setTheme("system")}
              >
                <Computer className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Cart</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link to={`/register`}>
          <DropdownMenuItem className="hover:cursor-pointer">
            Register
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Login</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownUserMenu;
