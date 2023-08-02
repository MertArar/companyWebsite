import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import bg from "../../../assets/cta_bg.jpeg";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
    layoutEffect: false, // Set layoutEffect to false
  });
  return (
    <div
      className="flex flex-col justify-center items-center mt-[-100px] mb-32"
      ref={ref}
    >
      <img
        src={bg}
        alt=""
        className="w-[494px] h-[536px] md:w-[1296px] md:h-[300px] sm:w-[696px] sm:h-[451px] rounded-[15px]"
      />

      <div className="absolute flex flex-col md:flex-row  justify-between items-center gap-36 ">
        {/* left side */}
        <div className=" flex flex-col gap-6 ">
          <h1 className="text-white text-[22px] md:text-[50px] sm:text-[26px] font-bold">
            Our fun fact
          </h1>
          <p className="text-white/60 text-[18px] md:text-[16px] sm:text-[18px] font-normal">
            Sed ut perspiciatis unde omnis iste natus error voluptatem <br />
            accusantium doloremque laudantium, totam rem aperiam, <br /> eaque
            ipsa quae ab illo inventore veritatis.
          </p>
        </div>
        {/* right side */}
        <div className="grid grid-cols-2 gap-10 ">
          {/* FIRST NUMBERS */}
          <div className="flex items-center">
            <div className=" text-white font-bold text-4xl md:text-5xl">
              <CountUp start={0} end={40} duration={2.5} separator="," />K
            </div>
            <div className="ml-[15px]">
              <span className=" text-red-600 font-bold text-xl">+</span>
              <p className="text-white/60">Global Happy Client</p>
            </div>
          </div>
          {/* SECOND NUMBERS */}
          <div className="flex items-center">
            <div className=" text-white font-bold text-4xl md:text-5xl">
              <CountUp start={0} end={245} duration={2.5} separator="," />
            </div>
            <div className="ml-[15px]">
              <span className="text-red-600 font-bold text-xl">+</span>
              <p className="text-white/60">Team Members</p>
            </div>
          </div>
          {/* THIRD NUMBERS */}
          <div className="flex items-center">
            <div className=" text-white font-bold text-4xl md:text-5xl">
              <CountUp start={0} end={50} duration={2.5} separator="," />K
            </div>
            <div className="ml-[15px]">
              <span className=" text-red-600 font-bold text-xl">+</span>
              <p className="text-white/60">Project Completed</p>
            </div>
          </div>
          {/* FOURTH NUMBERS */}
          <div className=" flex items-center">
            <div className=" text-white font-bold text-4xl md:text-5xl">
              <CountUp start={0} end={550} duration={2.5} separator="," />
            </div>
            <div className="ml-[15px]">
              <span className=" text-red-600 font-bold text-xl">+</span>
              <p className="text-white/60">Digital products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
