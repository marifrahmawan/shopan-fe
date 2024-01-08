import AdsSlider from "@/components/AdsSlider";

import Footer from "@/components/Footer";
import { Banknote, Lock, Phone, Truck } from "lucide-react";

import LatestProduct from "@/components/LatestProduct";
import CategoryCard from "@/components/CategoryCard";

const Homepage = () => {
  return (
    <div className="container">
      <AdsSlider />
      <CategoryCard />

      <LatestProduct />

      <div className="my-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="col-auto border bg-gray-200 px-8 py-4 dark:bg-slate-800 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <Truck className="h-full w-full" />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            Free Shipping
          </p>
          <p className="text-[12px] text-slate-400 md:text-[14px]">
            Order above $200
          </p>
        </div>
        <div className="col-auto border bg-gray-200 px-8 py-4 dark:bg-slate-800 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <Banknote className="h-full w-full object-cover" />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            Money-back
          </p>
          <p className="text-[12px] text-slate-400 md:text-[14px]">
            30 days guarantee
          </p>
        </div>
        <div className="col-auto border bg-gray-200 px-8 py-4 dark:bg-slate-800 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <Lock className="h-full w-full" />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            Secure Payments
          </p>
          <p className="text-[12px] text-slate-400 md:text-[14px]">
            Secured by Stripe
          </p>
        </div>
        <div className="col-auto border bg-gray-200 px-8 py-4 dark:bg-slate-800 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <Phone className="h-full w-full" />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            24/7 Support
          </p>
          <p className="text-[12px] text-slate-400 md:text-[14px]">
            Phone and Email support
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
