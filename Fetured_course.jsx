import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import icons from "../Images/icon-01.svg";
import { MdOutlineTimer } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Fetured_course = () => {
  return (
    <div className="py-[10px]  bg-gradient-to-r from-indigo-500">
      <div className="max-w-[1240px] px-[40px] mx-auto  ">
        <div
          className=" flex justify-between px-6 py-8 flex-wrap"
          data-aos="fade-up"
        >
          <div>
            <h3 className="text-xl text-red-300 font-bold">What’s New</h3>
            <h1 className="text-[30px] font-bold">Featured Courses</h1>
            <p className="text-gray-500">
              Embark on a transformative journey of skill enhancement and career
              advancement <br /> with our curated selection of featured courses.
            </p>
          </div>
          <div>
            <button className=" cursor-pointer  border-2 border-solid  border-blue-400 rounded-full px-10 p-2 hover:bg-blue-400  duration-300 active:text-white">
              All Courses
            </button>
          </div>
        </div>

        <div className="grid  md:grid-cols-3  gap-6 px-1 py-8  ">
          {/*  Boxes*/}
          <div
            className="shadwo-xl border rounded-[25px]  md:h-[420px]  hover:bg-[#401F71] hover:text-[white] bg-white"
            data-aos="fade-up"
          >
            <div className="overflow-hidden ">
              <img
                src={require("../Images/DSA_1_abxEvA6.png")}
                alt=""
                className="w-[80%] mx-auto mt-5 hover:scale-105 duration-300 cursor-pointer"
              />

              <div className="flex justify-between px-[30px] py-5 ">
                <div className="py-[10px]">
                  <h1 className="text-[14px] font-bold cursor-pointer">DSA</h1>
                </div>
                <div>
                  <CiHeart className="hover:text-red-300  text-white-300 text-2xl cursor-pointer " />
                </div>
              </div>

              <div className="flex justify-between px-[20px] py-1 ">
                <div className="flex gap-3">
                  <div>
                    <img src={icons} alt="Book" />
                  </div>
                  {/* Hover white color and price problem*/}
                  <div className="text-gray-500 hover:text-[white]">
                    {" "}
                    220 Video
                  </div>
                </div>

                <div className="">
                  <div className="flex gap-4 ">
                    <div>
                      <MdOutlineTimer />
                    </div>
                    <div className="text-gray-500 hover:text-[white]">
                      109 hours 30 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-b-gray-500 w-[90%] mx-auto"></div>

              <div className="px-[20px] py-[10px]">
                <h1 className="text-[15px] font-bold text-gray-500">
                  {" "}
                  ***** 4.0 (15)
                </h1>
              </div>

              <div className="px-[10px] py-[10px]">
                <button className=" text-[15px] cursor-pointer border-2 border-solid   border-blue-400 rounded-[50px] px-5 p-2 hover:text-white hover:bg-blue-400  duration-300 active:text-white">
                  ENROLL NOW
                </button>
              </div>
            </div>
          </div>

          {/* Boxes ended */}

          <div
            className="shadwo-xl border rounded-[25px]  md:h-[420px]  hover:bg-[#401F71] hover:text-[white] bg-white"
            data-aos="fade-up"
          >
            <div className="overflow-hidden ">
              <img
                src={require("../Images/WEB_DEV_iNo4wIs.png")}
                alt=""
                className="w-[80%] mx-auto mt-5 hover:scale-105 duration-300 cursor-pointer"
              />

              <div className="flex justify-between px-[30px] py-5 ">
                <div className="py-[10px]">
                  <h1 className="text-[14px] font-bold cursor-pointer">DSA</h1>
                </div>
                <div>
                  <CiHeart className="hover:text-red-300 text-white-300 text-2xl cursor-pointer" />
                </div>
              </div>

              <div className="flex justify-between px-[20px] py-1 ">
                <div className="flex gap-3">
                  <div>
                    <img src={icons} alt="Book" />
                  </div>
                  {/* Hover white color and price problem*/}
                  <div className="text-gray-500 hover:text-[white]">
                    {" "}
                    220 Video
                  </div>
                </div>

                <div className="">
                  <div className="flex gap-4 ">
                    <div>
                      <MdOutlineTimer />
                    </div>
                    <div className="text-gray-500 hover:text-[white]">
                      109 hours 30 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-b-gray-500 w-[90%] mx-auto"></div>

              <div className="px-[20px] py-[10px]">
                <h1 className="text-[15px] font-bold text-gray-500">
                  {" "}
                  ***** 4.0 (15)
                </h1>
              </div>

              <div className="px-[10px] py-[10px]">
                <button className=" text-[15px] cursor-pointer border-2 border-solid   border-blue-400 rounded-[50px] px-5 p-2 hover:text-white hover:bg-blue-400  duration-300 active:text-white">
                  ENROLL NOW
                </button>
              </div>
            </div>
          </div>

          <div
            className="shadwo-xl border rounded-[25px] md:h-[420px]  hover:bg-[#401F71] hover:text-[white] bg-white"
            data-aos="fade-up"
          >
            <div className="overflow-hidden ">
              <img
                src={require("../Images/DATA_SCIENCE_COURSE_THUMBNAIL_K4IuC0r.png")}
                alt=""
                className="w-[80%] mx-auto mt-5 hover:scale-105 duration-300 cursor-pointer"
              />

              <div className="flex justify-between px-[30px] py-5 ">
                <div className="py-[10px]">
                  <h1 className="text-[14px] font-bold cursor-pointer">DSA</h1>
                </div>
                <div>
                  <CiHeart className="hover:text-red-300 text-white-300 text-2xl cursor-pointer" />
                </div>
              </div>

              <div className="flex justify-between px-[20px] py-1 ">
                <div className="flex gap-3">
                  <div>
                    <img src={icons} alt="Book" />
                  </div>
                  {/* Hover white color and price problem*/}
                  <div className="text-gray-500 hover:text-[white]">
                    {" "}
                    220 Video
                  </div>
                </div>

                <div className="">
                  <div className="flex gap-4 ">
                    <div>
                      <MdOutlineTimer />
                    </div>
                    <div className="text-gray-500 hover:text-[white]">
                      109 hours 30 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-b-gray-500 w-[90%] mx-auto"></div>

              <div className="px-[20px] py-[10px]">
                <h1 className="text-[15px] font-bold text-gray-500">
                  {" "}
                  ***** 4.0 (15)
                </h1>
              </div>

              <div className="px-[10px] py-[10px]">
                <button className=" text-[15px] cursor-pointer border-2 border-solid   border-blue-400 rounded-[50px] px-5 p-2 hover:text-white hover:bg-blue-400  duration-300 active:text-white">
                  ENROLL NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetured_course;
