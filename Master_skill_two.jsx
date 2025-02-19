import React from 'react'
import icon_one from "../Images/icon-1.svg"
const Master_skill_two = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-14">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 px-[40px] ">
        <div
          className="grid lg:grid-cols-2 md:grid-cols-1  gap-5 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="shadow rounded-[20px] h-[120px] flex flex-col-2 items-center justify-center hover:scale-110 duration-300">
            {/* Image scaling and center problem */}

            <div className="overflow-hidden ">
              <img src={icon_one} alt="" className="left-[20px]" />
              <p className="left-[20px]">
                Hands-on Learning <br /> Experience
              </p>
            </div>
          </div>

          <div className="shadow rounded-[20px] h-[120px] flex flex-col-2 items-center justify-center hover:scale-110 duration-300">
            {/* Image scaling and center problem */}
            <div className="overflow-hidden ">
              <img src={icon_one} alt="" className="left-[20px]" />
              <p className="left-[20px]">
                Hands-on Learning <br /> Experience
              </p>
            </div>
          </div>

          <div className="shadow rounded-[20px] h-[120px] flex flex-col-2 items-center justify-center hover:scale-110 duration-300">
            {/* Image scaling and center problem */}
            <div className="overflow-hidden ">
              <img src={icon_one} alt="" className="left-[20px]" />
              <p className="left-[20px]">
                Hands-on Learning <br /> Experience
              </p>
            </div>
          </div>

          <div className="shadow rounded-[20px] h-[120px] flex flex-col-2 items-center justify-center hover:scale-110 duration-300">
            {/* Image scaling and center problem */}
            <div className="overflow-hidden ">
              <img src={icon_one} alt="" className="left-[20px]" />
              <p className="left-[20px]">
                Hands-on Learning <br /> Experience
              </p>
            </div>
          </div>
        </div>

        <div className="" data-aos="fade-up">
          {/* margin problem of image(girls) */}
          <img
            src={require("../Images/join.png")}
            alt=""
            className=" mx-auto  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Master_skill_two