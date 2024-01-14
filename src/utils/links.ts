import {
  LayoutDashboardIcon,
  LayoutListIcon,
  LucideIcon,
  PackageIcon,
} from "lucide-react";

export interface ILinks {
  to: string;
  icon: LucideIcon;
  label: string;
}

export const Links: ILinks[] = [
  {
    to: "/admin/",
    icon: LayoutDashboardIcon,
    label: "Dashboard",
  },
  {
    to: "products",
    icon: PackageIcon,
    label: "Products",
  },
  {
    to: "category",
    icon: LayoutListIcon,
    label: "Category",
  },
];
