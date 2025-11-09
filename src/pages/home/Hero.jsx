import React from "react";
import hero from "../../assets/hero/hero.png";
import Search from "../../assets/icons/Search";

const Hero = () => {
  return (
    <div className="relative mb-[60px] sm:mb-20 lg:mb-[100px]">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat mt-5 rounded-2xl overflow-hidden montserrat"
      >
        <div className="flex items-center justify-center flex-col text-white mt-[30px] sm:mt-[45px] lg:mt-[60px] px-4">
          <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-2.5">
            Compact cars
          </h3>
          <p className="font-normal text-[14px] sm:text-[15px] lg:text-[16px] w-full max-w-[300px] sm:max-w-[380px] lg:w-[416px] text-center">
            Rent cars as you are comfortable and where you are comfortable.
          </p>
        </div>
      </div>
      <div className="w-[90%] max-w-[340px] sm:w-[500px] sm:max-w-[500px] lg:w-[600px] absolute top-[95%] left-1/2 -translate-x-1/2 lg:left-[27%] lg:translate-x-0 bg-white shadow-xl flex items-center justify-between rounded-[100px] px-1 sm:px-2">
        <input
          type="text"
          placeholder="Find the car of your dreams"
          className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#555555] outline-0 py-4 sm:py-5 lg:py-[22px] w-full pl-5 sm:pl-6 lg:pl-7.5"
        />
        <span className="p-1 cursor-pointer shrink-0">
          <Search />
        </span>
      </div>
    </div>
  );
};

export default Hero;
