import { useState } from "react";

import shopanLogo from "@/assets/img/shopan-logo.png";
import loginImage from "@/assets/img/login.png";
import eyeCloseLogo from "@/assets/img/eye-closed.svg";
import eyeOpenLogo from "@/assets/img/eye-open.svg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row md:pr-[88px] xl:pr-0">
      <div className="relative h-[40%] w-full md:block md:h-screen md:w-[50%]">
        <img
          src={loginImage}
          alt="Login"
          className="h-full w-full object-cover"
        />

        <div className="absolute top-0 hidden w-full justify-center lg:flex">
          <img src={shopanLogo} alt="Shopan Logo" className="h-28 w-28" />
        </div>
      </div>

      <div className="flex w-[100%] items-center md:ml-[88px] md:mt-[220px] md:w-[50%] md:items-start">
        <div className="w-[456px] p-9 md:p-0">
          <h4 className="mb-[24px]">Sign Up</h4>
          <p className="mb-8 text-[16px] text-neutral-4">
            Already have an account?{" "}
            <a href="./" className="font-medium text-secondary-green">
              Sign In
            </a>
          </p>
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="mb-8 w-full border-b px-4 py-3 ring-secondary-green focus:rounded-md focus:outline-none focus:ring"
            />
            <input
              type="text"
              placeholder="Username"
              className="mb-8 w-full border-b px-4 py-3 ring-secondary-green focus:rounded-md focus:outline-none focus:ring"
            />
            <input
              type="email"
              placeholder="Email address"
              className="mb-8 w-full border-b px-4 py-3 ring-secondary-green focus:rounded-md focus:outline-none focus:ring"
            />
            <div className="relative flex items-center justify-between">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-b px-4 py-3 ring-secondary-green focus:rounded-md focus:outline-none focus:ring"
              />
              <button
                type="button"
                className="absolute right-4 cursor-pointer"
                onClick={showPasswordHandler}
              >
                {showPassword ? (
                  <img src={eyeOpenLogo} width={24} />
                ) : (
                  <img src={eyeCloseLogo} width={24} />
                )}
              </button>
            </div>
            <div className="mb-8 mt-8 flex items-center">
              <input type="checkbox" className="mr-3 h-6 w-6 transform" />
              <p className="text-neutral-4">
                I agree with{" "}
                <span className="font-medium text-primary">Privacy Policy</span>{" "}
                and{" "}
                <span className="font-medium text-primary">Terms of Use</span>
              </p>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-neutral-7 py-3 font-medium text-neutral-1 hover:bg-neutral-4"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
