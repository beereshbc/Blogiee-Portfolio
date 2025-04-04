import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  // const { openSignIn } = useClerk();
  // const { user } = useUser();

  return (
    <div className="text-white py-6 ">
      <div className="mx-4 sm:mx-[2%] flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/new")}
          className="text-[25px] flex sm:text-[40px] cursor-pointer app-logo"
        >
          <p>Blogiee</p>
          <p className="text-xs">Admin</p>
        </div>

        {true ? (
          <>
            {/* Desktop Menu */}
            <div className="hidden sm:block border shining-bg border-[#373737] cursor-pointer px-10 py-2 rounded-full">
              <ul className="flex justify-between gap-8">
                <NavLink to={"/new"}>
                  <li>NEW</li>
                  <hr className="border-none outline-none hidden w-3/5 bg-[#e4e3e4] h-0.5 mx-auto" />
                </NavLink>
                <NavLink to={"/edit"}>
                  <li>EDIT</li>
                  <hr className="border-none outline-none hidden w-3/5 bg-[#e4e3e4] h-0.5 mx-auto" />
                </NavLink>
              </ul>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="sm:hidden text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

            <div className="border border-[#373737] px-1 py-1 text-xs sm:text-[16px] sm:px-1 sm:py-1 cursor-pointer rounded-full hover:text-[#171717] hover:bg-[#ebebeb] transition-all duration-300">
              {/* <UserButton /> */}
            </div>
          </>
        ) : (
          <>
            {/* Login Button */}
            <div
              className="border border-[#373737] px-4 py-2 text-xs sm:text-[16px] sm:px-10 sm:py-4 cursor-pointer rounded-full hover:text-[#171717] hover:bg-[#ebebeb] transition-all duration-300"
              // onClick={() => navigate("/login")}
              onClick={(e) => openSignIn()}
            >
              <p>LOGIN</p>
            </div>
          </>
        )}
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 border border-[#373737] shining-bg bg-gray-900 rounded-lg p-4">
          <ul className="flex flex-col space-y-3 text-center">
            <NavLink to={"/new"} onClick={() => setIsOpen(false)}>
              <li className="py-2 hover:bg-[#e3e4e3] rounded">NEW</li>
            </NavLink>
            <NavLink to={"/edit"} onClick={() => setIsOpen(false)}>
              <li className="py-2 hover:bg-[#e3e4e3] rounded">EDIT</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
