import React from 'react'

const Talk_Expert = () => {
  return (
    <div className="py-[10px]">
      <div
        className="max-w-[1240px]  h-[180px] px-[60px] mx-auto flex items-center justify-between flex-wrap bg-[#ffc107] "
        data-aos="fade-up"
      >
        <div>
          <h1 className="text-[30px] font-bold">Talk to Our Expert</h1>
          <p className="text-[20px] ">
            Get Expert Advice our Counsellor will reach within 24 hour
          </p>
        </div>
        <div>
          <button className="border rounded-full px-10 p-3 hover:bg-[#1CBEEF]  duration-300 active:text-white">
            Get Connect Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Talk_Expert