
import React from "react";

const Card_two = () => {


  return (
    <div className="py-[30px]">
      <div className="max-w-[1240px] px-[40px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-5 ">
        <div
          className="flex flex-col items-center justify-center shadwo-xl border rounded-[20px]  h-[220px] hover:scale-105 duration-300 hover:bg-[#664d03] "
          data-aos="fade-up"
        >
          <div className="w-[50%] ">
            <img src={require("../Images/react.png")} alt="" />
          </div>
          <h1 className="text-center font-bold py-[15px]">React</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center shadwo-xl border rounded-[20px]  h-[220px] hover:scale-105 duration-300 hover:bg-[#664d03] "
          data-aos="fade-up"
        >
          <div className="w-[50%] ">
            <img src={require("../Images/dsa.png")} alt="" />
          </div>
          <h1 className="text-center font-bold py-[15px]">DSA</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center shadwo-xl border rounded-[20px]  h-[220px] hover:scale-105 duration-300 hover:bg-[#664d03] "
          data-aos="fade-up"
        >
          <div className="w-[50%] ">
            <img src={require("../Images/DATA_SCIENCE.png")} alt="" />
          </div>
          <h1 className="text-center font-bold py-[15px]">Data Science</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center shadwo-xl border rounded-[20px]  h-[220px] hover:scale-105 duration-300 hover:bg-[#664d03] "
          data-aos="fade-up"
        >
          <div className="w-[50%] ">
            <img src={require("../Images/Group_141_xCNOM7q.png")} alt="" />
          </div>
          <h1 className="text-center font-bold py-[15px]">Web Dev</h1>
        </div>
      </div>
    </div>
  );
};

export default Card_two;
