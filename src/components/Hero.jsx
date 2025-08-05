import React from "react";
import logo from "../assets/react.svg";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#39353D] text-white">
      <img className="w-[200px]" src={logo} alt="Welcome to My Portfolio" />
      <p className=" text-2xl">Hi, I am Abhishek Madoliya A <br/>passionate Full-Stack-Developer</p>
    </div>
  );
};

export default Hero;
