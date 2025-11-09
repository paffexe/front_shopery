import React from "react";

const Button2 = ({ widthClass, title }) => {
  return (
    <button
      className={`border border-gray-400 text-black py-3.5 px-5 rounded-[100px] text-center cursor-pointer 
              hover:bg-[#299764] hover:text-white 
              transition ease-in ${widthClass}`}
    >
      {title}
    </button>
  );
};

export default Button2;
