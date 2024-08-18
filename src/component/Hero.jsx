import React from "react";
import HeaderImg from "../header.png";
import Logo from "../logo.jpg";
export const Hero = () => {
  return (
    <div className="bg-[#181818] w-[100%] h-screen relative text-white">
      <img src={Logo} alt=""  className="h-16 absolute top-5 left-5 z-50"/>
      <img
        src={HeaderImg}
        alt=""
        className="grey-image object-fill w-[100%] h-screen absolute z-0 "
      />
      <p className="z-10 absolute">Trending and powerful design</p>
    </div>
  );
};
