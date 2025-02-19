import React from 'react'
import object from "../Images/object.png"
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
const Heroes = () => {
  return (
    <section class="w-[100%] bg-gradient-to-r from-indigo-500 sm:py-[100px]  py-[50px] items-center">
      <div class="max-w-[100%] mx-auto px-[30px] ">
        <div
          className="grid  sm:grid-cols-2 grid-cols-1 text-center "
          data-aos="fade-up"
        >
          <div className="w-[80%]">
            <img src={require("../Images/object.png")} alt="Image" />
          </div>
          <div className="py-[15px]">
            <h3 className="text-[gray] text-[20px] py-[5px] ">
              Upskilling Made Easy
            </h3>
            <h1 className="text-[30px] text-[black] font-bold py-[5px] ">
              Learn from scratch Elevate Your Skills Build Real World Project
              and Gain Experience
            </h1>
            <div>
              <input
                type="text"
                placeholder="Search Course, Mentorship,"
                className="  border-2 border-solid  border-blue-400 rounded-full px-10 md:px-[130px] py-[15px] "
              />
              {/* <IoIosSearch />
                          <FaArrowRight /> */}
            </div>
            <h1 className="py-[5px] text-[gray] text-[20px]">
              Trusted by over 15K <br></br> Users worldwide since2022
            </h1>
            <h1 className="text-4xl font-bold">1000+ 4.4 ****</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heroes