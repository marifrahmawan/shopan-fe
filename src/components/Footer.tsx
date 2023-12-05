import { Facebook, Instagram, Youtube } from "lucide-react";
import shopanLogo from "../assets/img/shopan-logo.png";

const Footer = () => {
  return (
    <div className="px-5 pb-8 pt-20 lg:px-40">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="h-10 w-10 rounded-full bg-white ">
            <img src={shopanLogo} alt="shopan logo" className="h-full w-full" />
          </div>
          <p className="text-neutral-1 mt-4 flex h-10 items-center border-t text-[14px] md:ml-8 md:mt-0 md:border-l md:border-t-0 md:pl-10">
            Gift & Decoration Store
          </p>
        </div>

        <div className="text-neutral-1 mt-10 flex w-full flex-col items-center justify-center gap-10 text-[14px] md:mt-0 md:w-fit md:flex-row md:justify-end">
          <a href="./">Home</a>
          <a href="./">Shop</a>
          <a href="./">Product</a>
          <a href="./">Blog</a>
          <a href="./">Contact Us</a>
        </div>
      </div>

      <div className="border-slate-400 text-neutral-1 mt-12 flex flex-col-reverse items-center justify-between border-t py-4 pb-12 text-[14px] md:flex-row md:pb-4">
        <div className="flex flex-col-reverse items-center gap-7 md:flex-row">
          <p className="text-[12px]">
            Copyright © 2023 Shopan. All rights reserved
          </p>
          <div className="flex gap-6">
            <a href="./">Privacy & Policy</a>
            <a href="./">Terms of Use</a>
          </div>
        </div>
        <div className="mb-8 flex gap-6 md:mb-0">
          <a href="./">
            <Instagram />
          </a>
          <a href="./">
            <Facebook />
          </a>
          <a href="./">
            <Youtube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
