import React from "react";

import Card from "./Card";

import service1 from "../../../assets/services/service_1.jpeg";
import service2 from "../../../assets/services/service_2.jpeg";
import service3 from "../../../assets/services/service_3.jpeg";
import service4 from "../../../assets/services/service_4.jpeg";

import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <div className="flex flex-row justify-center gap-10 items-center ">
      {/* left side */}
      <div className="flex flex-col gap-y-6 ">
        <h2 className="text-gray-400 text-xl ">What Can We Do</h2>
        <h1 className="text-white text-[50px] max-w-lg font-bold">
          Services we can help you with
        </h1>
        <span className="text-white flex flex-row items-center gap-2 cursor-pointer">
          See All Services <BsArrowRight size={25} />{" "}
        </span>
      </div>
      {/* right side */}
      <div className="flex flex-row gap-6">
        <Card imgSrc={service1}>
          <h3 className="text-[22px] font-bold mb-2">Custom UI/UX Design</h3>
        </Card>
        <Card imgSrc={service2}>
          <h3 className="text-[22px] font-bold mb-2">React.js Development</h3>
        </Card>
        <Card imgSrc={service3}>
          <h3 className="text-[22px] font-bold mb-2">Game Development</h3>
        </Card>
        <Card imgSrc={service4}>
          <h3 className="text-[22px] font-bold mb-2">Mobile App Development</h3>
        </Card>
      </div>
    </div>
  );
};

export default Services;
