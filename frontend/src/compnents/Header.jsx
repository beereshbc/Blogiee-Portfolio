import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      <div className="text-white mx-4 sm:mx-[10%] my-16 flex flex-col flex-wrap overflow-hidden">
        <p className="text-[25px] font-semibold underline">Hi, I am</p>
        <h1 className="text-[35px] sm:text-[75px] w-auto hero-text">
          BEERESHKUMAR B
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start relative">
          <div className="my-2 flex justify-center sm:block">
            <img
              className="w-60 sm:w-96 min-w-40 ml-4 rounded outline-none glowing-shadow"
              src={assets.profile_img}
              alt="Profile"
            />
          </div>
          <div className="sm:absolute sm:inset-0 sm:left-80 w-full text-center sm:text-left">
            <div className="bg-opacity-50 text-[25px] sm:text-[70px] p-0 mt-4 sm:mt-7">
              <div className="text-[16px] flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-6">
                <div className="text-[40px] sm:text-[70px] hero-text">
                  WEB DEVELOPER,
                </div>
                <div className="w-auto sm:w-[150px] leading-5 sm:my-auto">
                  A CREATIVE VISUAL DESIGNER BASED IN INDIA
                </div>
              </div>
              <div className="mt-4 sm:ml-28 text-sm sm:text-[70px] mb-4 hero-text">
                THE EFFICIENT WAY
              </div>
            </div>
            <div className="mt-6 sm:ml-36 text-center sm:text-left">
              <p className="text-lg max-w-full sm:max-w-[550px]">
                I provide
                <span className="underline"> innovative design solutions </span>
                for technology firms and emerging businesses weary of the
                typical aesthetic methodology.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center sm:justify-start sm:ml-36 border border-[#e4e3e4]  md:glowing-shadow px-2 pl-4 max-w-full sm:max-w-[500px] py-2 rounded-full">
              <input
                className="border-none outline-none bg-transparent mr-2 w-full text-[#e4e3e4]"
                type="email"
                placeholder="your email here"
              />
              <button
                onClick={() =>
                  (window.location.href = 'mailto:"bcbeereshkumar@gmail.com')
                }
                className="border border-[#e4e3e4] shining-bg py-2 px-6 rounded-full"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
