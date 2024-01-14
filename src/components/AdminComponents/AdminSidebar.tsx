import { Links } from "@/utils/links";
import { cn } from "@/utils/utils";
import { ChevronLeft, MenuIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [menuExpand, setMenuExpand] = useState(true);

  return (
    <aside className="min-h-screen">
      <nav className="flex h-full flex-col border-l border-r px-3 py-5">
        <div
          className={cn(
            `mb-8 flex items-center ${
              menuExpand ? "w-44 justify-between" : "justify-center w-full"
            }`,
          )}
        >
          <img
            src="https://img.logoipsum.com/243.svg"
            alt="logo"
            className={cn(
              `overflow-hidden transition-all duration-300 ease-in-out ${
                menuExpand ? "w-32" : "w-0"
              }`,
            )}
          />

          <button
            className="h-6 w-6 rounded-full p-1 hover:bg-yellow-300"
            onClick={() => setMenuExpand((prevState) => !prevState)}
          >
            {menuExpand ? (
              <ChevronLeft className="h-full w-full" />
            ) : (
              <MenuIcon className="h-full w-full" />
            )}
          </button>
        </div>

        {Links.map(({ to, icon: Icon, label }) => (
          <NavLink to={to} className="mb-2" key={label}>
            {({ isActive }) => (
              <div
                className={`group/icon relative flex items-center gap-2 rounded-lg p-2  ${
                  isActive
                    ? "bg-gradient-to-tr from-yellow-200 to-yellow-600 text-base font-semibold dark:text-black"
                    : "hover:bg-gradient-to-tr from-yellow-200 to-yellow-600"
                }`}
              >
                <Icon />
                <p
                  className={cn(
                    `overflow-hidden transition-all ${
                      menuExpand ? "w-fit" : "hidden w-0"
                    }`,
                  )}
                >
                  {label}
                </p>

                {!menuExpand && (
                  <p
                    className={cn(
                      `invisible absolute left-full ml-1 -translate-x-3 rounded-md bg-yellow-300 px-2 py-1 text-sm opacity-20 transition-all group-hover/icon:visible group-hover/icon:translate-x-0 group-hover/icon:opacity-100 dark:text-black z-10`,
                    )}
                  >
                    {label}
                  </p>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
