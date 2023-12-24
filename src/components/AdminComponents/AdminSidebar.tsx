import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="sticky left-0 top-[97px] h-[800px]">
      <div className="hidden h-full w-[300px] min-w-[300px] rounded-xl bg-[#F3F5F7] dark:border dark:bg-inherit md:block">
        <div className="relative flex w-full justify-center py-2">
          <div className="h-[150px] w-[150px] overflow-clip rounded-full">
            <img src="https://github.com/shadcn.png" alt="profile pict" />
            {/* <div className="absolute bottom-0 right-[84px] z-20 rounded-full bg-black p-2 dark:bg-white">
              <label htmlFor="profilePicture">
                <Camera className="stroke-white dark:stroke-black" />
              </label>
            </div> */}
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <NavLink
            to={"/admin/"}
            className={({ isActive }) =>
              isActive
                ? "flex h-[35px] items-center bg-neutral-300 px-5 py-5 font-semibold dark:text-black"
                : "flex h-[35px] items-center px-5 py-5 text-black dark:text-white"
            }
          >
            <p className="">Accounts</p>
          </NavLink>

          <NavLink
            to={"/admin/products"}
            className={({ isActive }) =>
              isActive
                ? "flex h-[35px] items-center bg-neutral-300 px-5 py-5 font-semibold dark:text-black"
                : "flex h-[35px] items-center px-5 py-5 text-black dark:text-white"
            }
          >
            <p className="">Products</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
