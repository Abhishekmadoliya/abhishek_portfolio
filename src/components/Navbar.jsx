import React from "react";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <div className=" p-10 flex justify-evenly item-center bg-black text-white position-fixed">
      <div>
        <h2 className=" font-semibold text-lg hover:cursor-pointer">Abhishek madoliya  </h2>
      </div>
      <div>
        <ul className="flex justify-between items-center space-x-8 text-gray-400 hover:cursor-pointer">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};



export default Navbar;
