import React, { useEffect } from 'react'
import pencil from "../Images/pencil-icon.svg"
import courses from "../Images/cources-icon.svg"
import gratuate from "../Images/gratuate-icon.svg"
import certificate from "../Images/certificate-icon.svg"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Card_one = () => {

  
    useEffect(() => {
      Aos.init({ duration: "1000" })
    }, [])
   
  
  return (
    <div data-aos="fade-up" className="bg-[#fff] p-8 ">
      <div className="max-w-[1240px] grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-[20px] mx-auto  ">
        <div
          className="flex gap-6 shadow rounded-[20px] mt-[-50px]  bg-[white]  transform origin-bottom hover:scale-y-105 duration-300 my-10 py-[20px]"
          data-aos="fade-up"
        >
          <div className="px-[10px]">
            <img src={pencil} alt="" className="" />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">10K</h1>
            <h3 className="">
              Online <br /> Courses
            </h3>
          </div>
        </div>

        <div
          className="flex gap-6 shadow rounded-[20px] mt-[-50px]  bg-[white]  transform origin-bottom hover:scale-y-105 duration-300 my-10 py-[20px]  "
          data-aos="fade-up"
        >
          <div className="px-[10px]">
            <img src={courses} alt="" className="" />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">200+</h1>
            <h3 className="">Expert Tutors</h3>
          </div>
        </div>

        <div
          className="flex gap-6 shadow rounded-[20px] mt-[-50px]  bg-[white]  transform origin-bottom hover:scale-y-105 duration-300 my-10 py-[20px] "
          data-aos="fade-up"
        >
          <div className="px-[10px]">
            <img src={certificate} alt="" className="" />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">6K</h1>
            <h3 className="">Ceritified Courses</h3>
          </div>
        </div>

        <div
          className="flex gap-6 shadow rounded-[20px] mt-[-50px]  bg-[white]  transform origin-bottom hover:scale-y-105 duration-300 my-10 py-[20px]  "
          data-aos="fade-up"
        >
          <div className="px-[10px]">
            <img src={gratuate} alt="" className="" />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">60K</h1>
            <h3 className=""> Online Students</h3>
          </div>
        </div>
      </div>

      <div className="py-[10px]">
        <h4 className="font-bold text-red-400 px-5 mt-[40px]">
          Favourite Course
        </h4>
        <h1 className="text-4xl font-bold ">Top Category</h1>
        <p className="text-gray-500 py-3">
          Elevate Your Learning Experience with Our Curated Selection of Top
          Category Courses, <br /> Designed to Empower You on Your Journey to
          Success!
        </p>
      </div>
    </div>
  );
}

export default Card_one