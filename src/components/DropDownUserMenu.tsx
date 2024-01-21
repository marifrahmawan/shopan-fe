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
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { LOGOUT_USER } from "@/utils/redux/userLoginSlice";

type IProps = {
  children: ReactNode;
};

const DropDownUserMenu = (props: IProps) => {
  const { children } = props;
  const { setTheme } = useTheme();
  const user = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]">
        {user?.userName && (
          <>
            <DropdownMenuLabel>{user?.userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

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
        {user?.role === "admin" && (
          <>
            <DropdownMenuSeparator />
            <Link to={`/`}>
              <DropdownMenuItem className="hover:cursor-pointer">
                Home
              </DropdownMenuItem>
            </Link>
            <Link to={`/admin/`}>
              <DropdownMenuItem className="hover:cursor-pointer">
                Dashboard
              </DropdownMenuItem>
            </Link>
          </>
        )}
        {user?.role === "user" && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Cart</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </>
        )}
        {!user?.accessToken ? (
          <>
            <DropdownMenuSeparator />
            <Link to={`/register`}>
              <DropdownMenuItem className="hover:cursor-pointer">
                Register
              </DropdownMenuItem>
            </Link>
            <Link to={"/login"}>
              <DropdownMenuItem className="hover:cursor-pointer">
                Login
              </DropdownMenuItem>
            </Link>
          </>
        ) : (
          <DropdownMenuItem
            onClick={() => dispatch(LOGOUT_USER())}
            className="hover:cursor-pointer"
          >
            Logout
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownUserMenu;
