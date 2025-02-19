import React from 'react'

const Mentership_program = () => {
    return (
      <div className="py-[30px]">
        <div
          className="max-w-[1240px] px-[40px] mx-auto grid lg:grid-cols-2 sm:grid-cols-2 gap-6 "
          data-aos="fade-up"
        >
          <div>
            <img src={require("../Images/share (1).png")} alt="" />
          </div>
          <div className="py-[20px] ">
            <h1 className="text-[32px] font-bold">
              Join the most empowering Mentorship Program
            </h1>
            <p className="text-gray-500 py-6">
              Receive personalised, one-on-one guidance in Data Structures and
              Algorithms (DSA) and other tech domains. Goal oriented mentorship
              is what makes us different.
            </p>
            <ul className="py-[20px]">
              <li className="text-[19px] font-bold font-sans">
                * Personalised dashboard
              </li>
              <li className="text-[19px] font-bold font-sans">
                * One to one mentorship
              </li>
              <li className="text-[19px] font-bold font-sans">
                * Personalised learning path
              </li>
              <li className="text-[19px] font-bold font-sans ">
                * Progress tracking
              </li>
            </ul>
            <button className=" text-[15px]  cursor-pointer border-2 border-solid   border-blue-400 rounded-[50px] px-8 p-2 hover:text-white hover:bg-blue-400  duration-300 active:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
}

export default Mentership_program