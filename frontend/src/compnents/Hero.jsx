import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Hero = () => {
  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  const [active, setActive] = useState(false);

  return (
    <div className="mx-4 sm:mx-[10%] my-[10%] flex flex-col text-[#e4e3e4]">
      {/* Hero Text Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between text-center sm:text-end">
        {/* Cartoon Image */}
        <div className="mb-6 sm:mb-0">
          <img
            className="w-[150px] sm:w-[200px] "
            src={assets.cartoon}
            alt="Cartoon"
          />
        </div>

        {/* Text Section */}
        <div className="leading-8">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center sm:items-end">
            <p className="hero-text text-[60px] sm:text-[110px] leading-none text-right">
              CREATIVE
            </p>
            <p className="text-sm sm:text-base sm:text-end sm:my-auto">
              CURRENTLY AVAILABLE <br />
              FOR FREELANCE <br /> INDIA
            </p>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row sm:gap-20 items-center sm:items-start mt-6 sm:mt-0">
            <p className="text-sm sm:text-base sm:text-start sm:my-auto">
              A CREATIVE VISUAL <br />
              DESIGNER BASED IN <br />
              KARNATAKA
            </p>
            <p className="hero-text text-[60px] sm:text-[110px] leading-none text-left">
              WEBSITE
            </p>
          </div>
        </div>
      </div>

      {/* Images & Buttons Section */}
      <div className="my-16 flex flex-wrap sm:flex-nowrap justify-center sm:justify-evenly gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <button
            onClick={() => (window.location.href = "tel:+916360995219")}
            className="py-3 px-6 border border-[#e4e3e4] shining-bg  glowing-shadow rounded-full hover:text-[#171717] hover:bg-[#e4e3e4] transition-all duration-300"
          >
            BOOK A CALL
          </button>
          <img
            onClick={() => setActive(!active)}
            className={`w-60 sm:w-72 border border-[#e3e4e3] hover:scale-105  transition-all duration-300 rounded-md cursor-pointer ${
              active && " glowing-shadow "
            } `}
            src={assets.img1}
            alt="Work 1"
          />
        </div>

        {/* Center Images */}
        <img
          onClick={() => setActive(!active)}
          className={`w-60 sm:w-72 border border-[#e3e4e3]  transition-all duration-300 hover:scale-105 rounded-md cursor-pointer ${
            active && " glowing-shadow "
          } `}
          src={assets.img2}
          alt="Work 2"
        />
        <img
          onClick={() => setActive(!active)}
          className={`w-60 sm:w-72 border border-[#e3e4e3] hover:scale-105  transition-all duration-300 rounded-md cursor-pointer ${
            active && " glowing-shadow "
          } `}
          src={assets.img3}
          alt="Work 3"
        />

        {/* Right Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <img
            onClick={() => setActive(!active)}
            className={`w-60 sm:w-72 border border-[#e3e4e3]  hover:scale-105 transition-all duration-300 rounded-md cursor-pointer ${
              active && " glowing-shadow  "
            } `}
            src={assets.img4}
            alt="Work 4"
          />
          <button
            onClick={() => {
              user ? navigate("/projects") : navigate(openSignIn());
            }}
            className="py-3 px-6 border shining-bg border-[#e4e3e4]  glowing-shadow rounded-full hover:text-[#171717] hover:bg-[#e4e3e4] transition-all duration-300"
          >
            More Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
