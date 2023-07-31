import React from "react";

import Card from "./Card";

import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <div className="flex flex-row justify-between items-center ">
      {/* left side */}
      <div className="flex flex-col gap-y-10 ">
        <h2 className="text-white text-xl ">What Can We Do</h2>
        <h1 className="text-white text-3xl">Services we can help you with</h1>
        <span className="text-white flex flex-row items-center gap-2 cursor-pointer">
          See All Services <BsArrowRight size={25} />{" "}
        </span>
      </div>
      {/* right side */}
      <div className=""></div>
    </div>
  );
};

export default Services;
