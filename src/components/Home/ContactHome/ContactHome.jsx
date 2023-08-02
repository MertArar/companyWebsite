import React from "react";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "./components/CustomText";

import { BsArrowRight } from "react-icons/bs";

import bg from "../../../assets/cta_bg.jpeg";

const ContactHome = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <img
        src={bg}
        alt=""
        className="w-[800px] h-[260px] sm:w-[1296px] sm:h-[405px] rounded-[15px]"
      />
      <div className="absolute flex flex-col gap-5">
        <h1 className="text-[24px] sm:text-[50px]  text-white font-[600] text-center">
          Let’s disscuse make <br /> something <i>cool</i> together
        </h1>
        <span className=" text-white text-[14px] sm:text-[16px] flex justify-center items-center gap-4 cursor-pointer font-medium hover:text-red-500 hover:transition-all, ease-in-out, duration-500">
          Apply For Meeting <BsArrowRight />
        </span>
      </div>
    </div>
  );
};

export default ContactHome;
