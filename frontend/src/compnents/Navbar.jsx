import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <div className="text-white py-6">
      <div className="mx-4 sm:mx-[2%] flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-[25px] sm:text-[40px] cursor-pointer app-logo"
        >
          <p>Blogiee</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:block border shining-bg border-[#373737] cursor-pointer px-10 py-2 rounded-full">
          <ul className="flex justify-between gap-8">
            <NavLink to={"/"}>
              <li>TARGET</li>
              <hr className="border-none outline-none hidden w-3/5 bg-[#e4e3e4] h-0.5 mx-auto" />
            </NavLink>
            <NavLink to={"/projects"}>
              <li>PROJECTS</li>
              <hr className="border-none outline-none hidden w-3/5 bg-[#e4e3e4] h-0.5 mx-auto" />
            </NavLink>
            <NavLink to={"/blog"}>
              <li>BLOG</li>
              <hr className="border-none outline-none hidden w-3/5 bg-[#e4e3e4] h-0.5 mx-auto" />
            </NavLink>
            <NavLink to={"/contact"}>
              <li>CONTACT</li>
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
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 border border-[#373737] shining-bg bg-gray-900 rounded-lg p-4">
          <ul className="flex flex-col space-y-3 text-center">
            <NavLink to={"/"} onClick={() => setIsOpen(false)}>
              <li className="py-2 hover:bg-[#e3e4e3] rounded">TARGET</li>
            </NavLink>
            <NavLink to={"/projects"} onClick={() => setIsOpen(false)}>
              <li className="py-2 hover:bg-[#e3e4e3] rounded">PROJECTS</li>
            </NavLink>
            <NavLink to={"/blog"} onClick={() => setIsOpen(false)}>
              <li className="py-2 hover:bg-[#e3e4e3] rounded">BLOG</li>
            </NavLink>
            <NavLink to={"/contact"} onClick={() => setIsOpen(false)}>
              <li className="py-2 hover:bg-[#e3e4e3] rounded">CONTACT</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
