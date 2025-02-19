import React from 'react'

const Trusted_by = () => {
  return (
    <div data-aos="fade-up">
      <h2 className="text-center text-red-300 font-bold text-[18px]">
        Trusted By
      </h2>
      <h1 className="text-4xl font-bold text-center py-4">
        500+ Leading Universities And Companies
      </h1>
      <div className="overflow-hidden grid lg:grid-cols-6 md:grid-cols-3   gap-4 cursor-pointer px-[25px] py-[40px]">
        <img src={require("../Images/lead-01.png")} alt="" />
        <img src={require("../Images/lead-02.png")} alt="" />
        <img src={require("../Images/lead-03.png")} alt="" />
        <img src={require("../Images/lead-04.png")} alt="" />
        <img src={require("../Images/lead-05.png")} alt="" />
        <img src={require("../Images/lead-06.png")} alt="" />
      </div>
    </div>
  );
}

export default Trusted_by