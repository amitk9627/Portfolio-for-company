import React from "react";
import Logo from "../logo.jpg";
export const Footer = () => {
  return (
    <div className="bg-[#181818] text-white">
      <div className=" flex justify-center flex-col gap-10 text-white p-16">
        <div className="flex items-center justify-center flex-col gap-10">
          <img src={Logo} alt="" className="w-56 " />
          <p className="text-3xl font-semibold text-center w-2/5">
            24/7 Effective And Friendly Premium Support
          </p>
          <button className="bg-red-500 py-4 font-semibold rounded-xl text-sm px-10">
            Purchase Now
          </button>
        </div>
      </div>
      <div className="border border-b-0  border-l-0 border-r-0 border-t-gray-700  w-full flex justify-center items-center h-24">
        <p>© Copyright reserved by photechitsolution.com</p>
      </div>
    </div>
  );
};
