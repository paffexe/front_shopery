import React from "react";
import Button from "../../layouts/ui/Buttons/Button";
import Button2 from "../../layouts/ui/Buttons/Button2";
import car from "../../assets/card/car.png";
import Icon1 from "../../assets/card/icons/Icon1";
import Icon2 from "../../assets/card/icons/Icon2";

const Cars = () => {
  return (
    <div className="montserrat">
      <div className="flex flex-col items-center justify-center mb-6 md:px-4 lg:px-4 sm:mt-[62px]">
        <h3 className="font-semibold text-2xl sm:text-3xl  lg:text-4xl mb-2.5 text-center">
          Choose the car of your dreams
        </h3>
        <p className="w-full md:w-[476px] sm:max-w-[358px] lg:w-[575px] text-center text-[#555555] text-[14px] sm:text-[15px] lg:text-[16px] mb-6 sm:mb-8 lg:mb-10">
          We provide our customers with the most incredible driving emotions.
          That is why there are only world-class cars in our fleet
        </p>
        <div className="flex items-center gap-3.5 sm:w-[328px] sm:px-3.5  md:w-[476px] ">
          <span>
            <Button
              title={"Compact"}
              widthClass={"sm:w-[90px] md:w-[155px] lg:w-[155px]"}
            />
          </span>
          <span>
            <Button2
              title={"Sports cars"}
              widthClass={"sm:w-[75px] md:w-[170px] lg:w-[155px]"}
            />
          </span>
          <span>
            <Button2
              title={"Vans "}
              widthClass={"sm:w-[75px] md:w-[119px] lg:w-[155px]"}
            />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 sm:px-0">
        <div className="bg-[#F5F5F5] rounded-2xl h-auto sm:h-[400px] lg:h-[433px] px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-7.5">
          <div>
            <h3 className="font-semibold text-xl sm:text-xl lg:text-2xl">
              Ford Fiesta
            </h3>
            <p className="font-medium text-[#555555] text-lg sm:text-lg lg:text-xl mb-3 sm:mb-3 lg:mb-4">
              Economy Car
            </p>
          </div>
          <img src={car} alt="" className="w-full h-auto" />
          <div className="flex gap-8 sm:gap-10 lg:gap-[54px]">
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-2xl h-auto sm:h-[400px] lg:h-[433px] px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-7.5">
          <div>
            <h3 className="font-semibold text-xl sm:text-xl lg:text-2xl">
              Ford Fiesta
            </h3>
            <p className="font-medium text-[#555555] text-lg sm:text-lg lg:text-xl mb-3 sm:mb-3 lg:mb-4">
              Economy Car
            </p>
          </div>
          <img src={car} alt="" className="w-full h-auto" />
          <div className="flex gap-8 sm:gap-10 lg:gap-[54px]">
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-2xl h-auto sm:h-[400px] lg:h-[433px] px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-7.5">
          <div>
            <h3 className="font-semibold text-xl sm:text-xl lg:text-2xl">
              Ford Fiesta
            </h3>
            <p className="font-medium text-[#555555] text-lg sm:text-lg lg:text-xl mb-3 sm:mb-3 lg:mb-4">
              Economy Car
            </p>
          </div>
          <img src={car} alt="" className="w-full h-auto" />
          <div className="flex gap-8 sm:gap-10 lg:gap-[54px]">
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-2xl h-auto sm:h-[400px] lg:h-[433px] px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-7.5">
          <div>
            <h3 className="font-semibold text-xl sm:text-xl lg:text-2xl">
              Ford Fiesta
            </h3>
            <p className="font-medium text-[#555555] text-lg sm:text-lg lg:text-xl mb-3 sm:mb-3 lg:mb-4">
              Economy Car
            </p>
          </div>
          <img src={car} alt="" className="w-full h-auto" />
          <div className="flex gap-8 sm:gap-10 lg:gap-[54px]">
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-2xl h-auto sm:h-[400px] lg:h-[433px] px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-7.5">
          <div>
            <h3 className="font-semibold text-xl sm:text-xl lg:text-2xl">
              Ford Fiesta
            </h3>
            <p className="font-medium text-[#555555] text-lg sm:text-lg lg:text-xl mb-3 sm:mb-3 lg:mb-4">
              Economy Car
            </p>
          </div>
          <img src={car} alt="" className="w-full h-auto" />
          <div className="flex gap-8 sm:gap-10 lg:gap-[54px]">
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-2xl h-auto sm:h-[400px] lg:h-[433px] px-4 sm:px-5 lg:px-6 py-5 sm:py-6 lg:py-7.5">
          <div>
            <h3 className="font-semibold text-xl sm:text-xl lg:text-2xl">
              Ford Fiesta
            </h3>
            <p className="font-medium text-[#555555] text-lg sm:text-lg lg:text-xl mb-3 sm:mb-3 lg:mb-4">
              Economy Car
            </p>
          </div>
          <img src={car} alt="" className="w-full h-auto" />
          <div className="flex gap-8 sm:gap-10 lg:gap-[54px]">
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-3 lg:mt-4">
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center mb-4 sm:mb-5 lg:mb-6">
                <Icon1 />
                <p className="text-sm sm:text-base">5 Seats</p>
              </div>
              <div className="flex gap-2 sm:gap-2.5 lg:gap-3 items-center">
                <Icon2 />
                <p className="text-sm sm:text-base">21+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center mt-6 sm:mt-8 lg:mt-10 px-4">
        <Button
          title={"View all cars"}
          widthClass={"sm:w-[173px] md:w-[173px] lg:w-[173px]"}
        />
      </span>
    </div>
  );
};

export default Cars;
