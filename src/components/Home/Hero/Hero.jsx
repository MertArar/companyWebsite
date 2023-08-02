import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import heroVid from "../../../assets/video3.mp4";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Website Development.",
      "Game Development.",
      "Mobile App Development.",
      "UI/UX Design.",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full h-[100vh] top-[0px] flex justify-center items-center">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[100%] flex flex-col ml-0 sm:ml-40 justify-center items-start text-white px-4">
        <h1 className="text-[26px] max-w-3xl font-bold sm:text-[44px] text-left">
          We create <br /> <span className="text-[#ff014f]">{text}</span>{" "}
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-80 justify-between mt-5">
          <span className="flex flex-row justify-center items-center gap-3 text-[16px] sm:text-[16px] hover:text-red-500 hover:animate-pulse cursor-pointer">
            Get a Quote <BsArrowRight />
          </span>
          <p className="text-[16px] sm:text-[20px] max-w-xl py-4 text-start">
            We deliver best problem solving solution for our client and provide
            finest finishing product in present and upcoming future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
