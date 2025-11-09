import React, { useState } from "react";
import Logo from "../assets/icons/Logo.svg";
import Hamburger from "../assets/icons/Hamburger";
import Cancel from "../assets/icons/Cancel";
import Moon from "../assets/icons/Moon";
import LoginB from "./ui/Buttons/LoginB";
import DropdownMenu from "./ui/Dropdown/Dropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = ["News", "Careers", "Locations"];
  const menu2 = ["FAQ", "Contact Us"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="border-b border-b-gray-400 py-[27px] montserrat">
      <div className="container flex items-center justify-between px-5 md:px-5">
        <div className="flex gap-4 items-center">
          <img src={Logo} alt="" className="w-auto h-auto" />
          <div className="hidden lg:flex gap-8 items-center cursor-pointer text-[18px]">
            <p>Categories</p>
            <DropdownMenu menuItems={menu} title={"About us"} />
            <DropdownMenu menuItems={menu2} title={"Help center"} />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <h3 className="font-semibold text-[18px]">+1 855 420 0000</h3>
          <Moon />
          <LoginB widthClass={"w-[142px]"} />
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button onClick={toggleMenu} className="z-50">
            {isMenuOpen ? "" : <Hamburger />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:w-[475px] lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu content */}
        <div className="pt-[33px] px-5 md:px-6 flex flex-col h-full">
          <div className="mb-12 md:mb-[87px] flex justify-between items-center">
            <img src={Logo} alt="" className="w-auto h-auto" />
            {isMenuOpen ? (
              <button
                onClick={toggleMenu}
                className="p-3 md:p-[18px] rounded-full bg-[#F5F5F5] flex justify-center items-center"
              >
                <Cancel />
              </button>
            ) : (
              ""
            )}
          </div>

          {/* Menu Items */}
          <div className="grow overflow-y-auto">
            <p className="font-medium text-2xl md:text-[28px] mb-8 md:mb-[52px]">
              Categories
            </p>
            <p className="font-medium text-2xl md:text-[28px] mb-4 md:mb-5">
              About Us
            </p>
            <p className="font-medium text-xl md:text-2xl text-[#555555] mb-3 md:mb-4">
              News
            </p>
            <p className="font-medium text-xl md:text-2xl text-[#555555] mb-3 md:mb-4">
              Careers
            </p>
            <p className="font-medium text-xl md:text-2xl text-[#555555] mb-8 md:mb-[52px]">
              Locations
            </p>
            <p className="font-medium text-2xl md:text-[28px] mb-4 md:mb-5">
              Help center
            </p>
            <p className="font-medium text-xl md:text-2xl text-[#555555] mb-3 md:mb-4">
              FAQ
            </p>
            <p className="font-medium text-xl md:text-2xl text-[#555555] mb-3 md:mb-4">
              Contact us
            </p>
          </div>

          <div className="mt-auto pb-8 md:pb-[58px] flex flex-col md:flex-row items-center gap-3 md:gap-4 border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-base md:text-[18px] md:mr-5">
              +1 855 420 0000
            </h3>
            <div className="flex items-center gap-3 md:gap-4">
              <Moon />
              <LoginB widthClass={"w-[142px]"} />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;
