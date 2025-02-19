import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#fff] p-8 ">
      <div className="max-w-[1240px] flex justify-between items-center mx-auto cursor-pointer ">
        <div className="w-[60%]">
          <img className="w-40" src={require("../Images/Logo.png")} alt="" />
        </div>
        <ul className="hidden md:flex items-center gap-16  ">
          <li className="hover:text-red-400">Home</li>
          <li className="hover:text-red-400 flex items-center">
            Course
            <RiArrowDropDownLine className="text-[20px]" />
          </li>
          <li className="hover:text-red-400">Margdarshak</li>
          <li className="hover:text-red-400">Mentorship</li>
          <li className="hover:text-red-400">Internship</li>
          <li className="hover:text-red-400">Support</li>
          <button className=" border-2 border-solid  border-blue-400 rounded-full w-24 py-2 hover:bg-red-400  duration-300 active:text-white">
            Sign In
          </button>
        </ul>
        <div className="md:hidden ">
          {open ? (
            <IoClose size={30}
              onClick={() => {
                setOpen(!open);
              }}
            />
          ) : (
            <IoMdMenu size={30}
              onClick={() => {
                setOpen(!open);
              }}
            />
          )}
        </div>
      </div>
      <ul
        className={`${
          open ? "block" : "hidden"
        } md:hidden flex flex-col absolute ${
          open ? "left-0" : "left-[-1000px]"
        } bg-white w-full h-screen p-8 gap-4 transition-all delay-1000`}
      >
        <li className="hover:text-red-400">Home</li>
        <li className="hover:text-red-400 flex items-center">
          Course
          <RiArrowDropDownLine className="text-[20px]" />
        </li>
        <li className="hover:text-red-400">Margdarshak</li>
        <li className="hover:text-red-400">Mentorship</li>
        <li className="hover:text-red-400">Internship</li>
        <li className="hover:text-red-400">Support</li>
        <button className="  border-2 border-solid  border-blue-400 rounded-full px-10  hover:bg-red-400  duration-300 active:text-white">
          Sign In
        </button>
      </ul>
    </div>
  );
};

export default Header;
