import { products, articles } from "../../data";

import Slider from "./Slider";
import CardProduct from "../../components/CardProduct";
import CardArticle from "../../components/CardArticle";

import livingRoomImage from "../../assets/img/living-room.jpg";
import bedRoomImage from "../../assets/img/bedroom.jpg";
import kitchenRoomImage from "../../assets/img/kitchen.jpg";
import banner from "../../assets/img/spacejoy-c0JoR_-2x3E-unsplash.jpg";
import bgNewsletter from "../../assets/img/alex-plesovskich-iRMlWAOzwtM-unsplash.jpg";

import shippingTruck from "../../assets/img/shipping-truck.svg";
import moneyReturn from "../../assets/img/money.svg";
import lockSecure from "../../assets/img/lock.svg";
import callSupport from "../../assets/img/call-receive.svg";
import email from "../../assets/img/email-9-svgrepo-com.svg";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div className="container">
      <Slider />

      <div className="mb-10 flex flex-col items-start justify-between md:flex-row md:items-center">
        <section>
          <h2 className="text-[30px] leading-8 md:text-[35px] lg:text-[45px] lg:leading-none xl:text-[72px]">
            Simply Unique
            <span className="text-[32px] text-neutral-4 md:text-[37px] lg:text-[47px] xl:text-[84px]">
              /
            </span>
            <p>Simply Better</p>
          </h2>
        </section>
        <section className="mt-2 w-[full] text-neutral-4 md:mt-0 md:w-[350px] xl:w-[453px]">
          <span className="font-medium text-neutral-5">Shopan</span> is a gift &
          decorations store based in Jakarta, Indonesia. Est since 2019.
        </section>
      </div>

      <div className="flex h-fit flex-col gap-6 lg:h-[664px] lg:flex-row">
        <div className="h-[361px] flex-1 md:h-full">
          <div className="relative h-full w-full">
            <img
              src={livingRoomImage}
              alt="living Room image"
              className="h-full w-full object-cover"
            />

            <div className="absolute left-12 top-12 bg-slate-700/80 p-3 text-neutral-3">
              <h5>Living Room</h5>
              <a
                href="./"
                className="mt-4 border-b border-white font-medium hover:border-neutral-4 hover:text-neutral-4"
              >
                Shop Now &#10141;
              </a>
            </div>
          </div>
        </div>

        <div className="grid h-fit flex-1 grid-rows-2 gap-4 md:h-full">
          <div className="relative h-[361px] md:h-[324px] lg:h-full">
            <img
              src={bedRoomImage}
              alt="bed room"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-12 top-12 bg-slate-700/80 p-3 text-neutral-3">
              <h5>Bed Room</h5>
              <a
                href="./"
                className="mt-4 border-b border-white font-medium hover:border-neutral-4 hover:text-neutral-4"
              >
                Shop Now &#10141;
              </a>
            </div>
          </div>
          <div className="relative h-[361px] md:h-[324px] lg:h-full">
            <img
              src={kitchenRoomImage}
              alt="kitchen"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-12 top-12 bg-slate-700/80 p-3 text-neutral-3">
              <h5>Kitchen</h5>
              <a
                href="./"
                className="mt-4 border-b border-white font-medium hover:border-neutral-4 hover:text-neutral-4"
              >
                Shop Now &#10141;
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-12 flex justify-between">
        <div className="w-[149px]">
          <h4>New Arrivals</h4>
        </div>
        <div className="flex items-end border-b border-neutral-7">
          <a href="./" className="font-medium">
            More Products &#10141;
          </a>
        </div>
      </div>

      <div className="mb-14 grid grid-cols-2 gap-6 md:mb-28 lg:grid-cols-4">
        {products.map(({ id, productImage, productName, price, ratings }) => {
          return (
            <CardProduct
              key={id}
              id={id}
              productName={productName}
              productImage={productImage}
              price={price}
              ratings={ratings}
            />
          );
        })}
      </div>

      <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="col-auto border bg-neutral-2 px-8 py-4 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <img
              src={shippingTruck}
              alt="shipping truck"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            Free Shipping
          </p>
          <p className="text-[12px] text-neutral-4 md:text-[14px]">
            Order above $200
          </p>
        </div>
        <div className="col-auto border bg-neutral-2 px-8 py-4 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <img
              src={moneyReturn}
              alt="shipping truck"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            Money-back
          </p>
          <p className="text-[12px] text-neutral-4 md:text-[14px]">
            30 days guarantee
          </p>
        </div>
        <div className="col-auto border bg-neutral-2 px-8 py-4 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <img
              src={lockSecure}
              alt="shipping truck"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            Secure Payments
          </p>
          <p className="text-[12px] text-neutral-4 md:text-[14px]">
            Secured by Stripe
          </p>
        </div>
        <div className="col-auto border bg-neutral-2 px-8 py-4 md:py-12">
          <div className="mb-2 h-9 w-9 md:mb-4 md:h-12 md:w-12">
            <img
              src={callSupport}
              alt="shipping truck"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-2 text-[16px] font-medium md:text-[20px]">
            24/7 Support
          </p>
          <p className="text-[12px] text-neutral-4 md:text-[14px]">
            Phone and Email support
          </p>
        </div>
      </div>

      <div className="mb-9 flex h-fit flex-col md:mb-20 md:h-[532px] md:flex-row">
        <div className="h-full w-full md:w-1/2">
          <img
            src={banner}
            alt="living room"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-full w-full items-center p-5 md:w-1/2 md:pl-[72px]">
          <div className="w-[452px]">
            <p className="mb-4 text-left font-bold text-secondary-blue">
              SALE UP TO 35% OFF
            </p>
            <h4>HUNDREDS of</h4>
            <h4>New Lower prices!</h4>
            <p className="mb-6 mt-4 text-[20px] leading-8">
              It's more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <a
              href="./"
              className="border-b border-black font-medium hover:border-neutral-4 hover:text-neutral-4"
            >
              Shop now &#10141;
            </a>
          </div>
        </div>
      </div>

      <div className="mb-10 flex items-end justify-between">
        <h4>Articles</h4>
        <span>
          <a href="./" className="border-b border-neutral-7 font-medium">
            More Articles &#10141;
          </a>
        </span>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-3">
        {articles.map(({ id, titleArticle, imageArticle }) => {
          return (
            <CardArticle
              key={id}
              id={id}
              titleArticle={titleArticle}
              imageArticle={imageArticle}
            />
          );
        })}
      </div>

      <div className="relative h-[360px] w-full bg-neutral-200 md:bg-none">
        <img
          src={bgNewsletter}
          alt="chair"
          className="hidden h-full w-full object-cover object-center md:block"
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md bg-neutral-1 bg-opacity-20 p-5 pb-6 backdrop-blur-sm md:p-7">
            <h4 className="mb-2 text-2xl md:text-[40px]">
              Join Our Newsletter
            </h4>
            <p className="mb-8 text-center">
              Sign up for deals, new product and promotions
            </p>
            <div className="flex w-full items-center justify-center border-b border-neutral-4 md:w-96">
              <div className="h-6 w-6">
                <img src={email} alt="email logo" className="h-full w-full" />
              </div>
              <input
                type="text"
                className="w-full bg-transparent px-3 py-2 text-[14px] focus:outline-none"
                placeholder="Email address"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
