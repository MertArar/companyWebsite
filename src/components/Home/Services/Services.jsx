import React from "react";

import Card from "./Card";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "./components/CustomText";

import service1 from "../../../assets/services/service_1.jpeg";
import service2 from "../../../assets/services/service_2.jpeg";
import service3 from "../../../assets/services/service_3.jpeg";
import service4 from "../../../assets/services/service_4.jpeg";

import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <div className="flex flex-col justify-center sm:flex-row ml-10 sm:ml-3 gap-10 items-center ">
      {/* left side */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col gap-y-6 "
      >
        <TypingText
          title="What Can We Do |"
          textStyles=" text-gray-400 text-xl"
        />
        <TitleText
          title={<>Services we can help you with</>}
          textStyles="text-white text-[50px] max-w-lg font-bold"
        />

        <span className="text-white flex flex-row items-center gap-2 cursor-pointer">
          See All Services <BsArrowRight size={25} />{" "}
        </span>
      </motion.div>
      {/* right side */}
      <div className="flex flex-col sm:flex-row gap-6">
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
