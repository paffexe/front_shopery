import React from "react";

const Button = ({ widthClass, title, foo }) => {
  return (
    <button
      onClick={foo}
      className={`bg-[#299764] text-white py-3.5 px-5 rounded-[100px] text-center cursor-pointer 
              border border-transparent hover:border-gray-400 
              hover:bg-white hover:text-black 
              transition ease-in ${widthClass}`}
    >
      {title}
    </button>
  );
};

export default Button;
