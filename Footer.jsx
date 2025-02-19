import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-[30px]">
      <div
        className="max-w-[1240px] px-[40px] mx-auto grid lg:grid-cols-4 
           sm:grid-cols-2 gap-6  text-[15px] "
        data-aos="fade-up"
      >
        <div>
          <img
            src={require("../Images/Logo.png")}
            alt="Image"
            className="w-[60%] "
          />
          <p className="py-[20px] text-gray-600 ">
            Alpha Intern empowers learners with skill-based courses in web
            development, data science, and DSA. Our mentorship and internship
            programs ensure effective skill development for thriving tech
            careers.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Quick Links</h2>
          <ul className="text-gray-600">
            <li className="mt-[10px] hover:text-red-300">Home</li>
            <li className="mt-[10px] hover:text-red-300">Courses</li>
            <li className="mt-[10px] hover:text-red-300">Margdarshak</li>
            <li className="mt-[10px] hover:text-red-300">Mentorship</li>
            <li className="mt-[10px] hover:text-red- 300">Internship</li>
            <li className="mt-[10px] hover:text-red-300">Contact Us</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold">More Links</h1>
          <ul className="text-gray-600">
            <li className="mt-[10px] hover:text-red-300">Terms & Conditions</li>
            <li className="mt-[10px] hover:text-red-300">Privacy & Policy</li>
            <li className="mt-[10px] hover:text-red-300">Refund Policy</li>
            <li className="mt-[10px] hover:text-red-300">About</li>
          </ul>
        </div>

        <div>
          <h1 className=" font-bold">Get Updated News</h1>
          <ul>
            <li>
              <div className="flex  mt-[10px]">
                <div>
                  <input
                    type="text"
                    className=" 
                            outline-none "
                    placeholder="Enter your email 
                            address"
                  />
                </div>
                <div>
                  <button className="border  rounded  bg-[#FF875A] hover:bg-[#0b5ed7] p-1 px-5">
                    Subscribe
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex mt-[10px] items-center gap-2">
                <div>
                  {" "}
                  <FaLocationDot />
                </div>
                <div className="text-gray-600"> Mullana , Ambala, Haryana</div>
              </div>
            </li>
            <div className="flex mt-[10px] items-center  gap-2">
              <div>
                {" "}
                <FaMessage />
              </div>
              <div className="text-gray-600"> contact@alphaintern.in</div>
            </div>
            <li>
              <div className="flex mt-[10px] items-center  gap-2">
                <div>
                  {" "}
                  <IoMdCall />
                </div>
                <div className="text-gray-600">+91 9117147196</div>
              </div>
            </li>
            <li>
              <div className="flex mt-[10px] gap-4 ">
                <div className="cursor-pointer text-blue-500 text-[22px]">
                  {" "}
                  <FaFacebookF />
                </div>
                <div className="cursor-pointer text-red-600 text-[22px]">
                  <FaYoutube />
                </div>
                <div className="cursor-pointer text-blue-600 text-[22px]">
                  <FaLinkedinIn />
                </div>
                <div className="cursor-pointer text-green-600 text-[22px]">
                  <FaWhatsapp />
                </div>
                <div className="cursor-pointer text-red-600 text-[22px]">
                  <FaInstagram />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className="text-gray-400">
          Copyright © 2024 Alpha Intern. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
