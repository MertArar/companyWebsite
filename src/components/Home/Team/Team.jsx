import React from "react";

import { motion } from "framer-motion";

import TeamCard from "./TeamCard";

import { TitleText, TypingText } from "./components/CustomText";

import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

import img1 from "../../../assets/team/member_2.jpeg";
import img2 from "../../../assets/team/member_3.jpeg";
import img3 from "../../../assets/team/member_4.jpeg";

const Team = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col"
      >
        <TypingText
          title="| The Team"
          textStyles="text-center text-white/90 text-lg"
        />
        <TitleText
          title={<>Awesome Team Members</>}
          textStyles="text-center mb-10"
        />
      </motion.div>
      <div className="flex flex-row justify-center items-center gap-8 mb-[100px]">
        <div className="flex flex-row gap-6">
          <TeamCard imgSrc={img1} className="flex flex-col">
            <div className="flex flex-col ml-1">
              <span className="text-[20px] font-bold mb-2">Berkay Işılak</span>
              <span className="text-[16px] text-gray-500">
                Co-Founder | Backend Developer
              </span>
              <div className="absolute -bottom-full left-6 group-hover:bottom-44 transition-all duration-700 ease-out z-50">
                <div className="text-gradient mb-10">
                  <AiFillGithub
                    size={27}
                    className="mb-4 text-gray-300 hover:text-sky-400 transition-all ease-in-out"
                  />
                  <BiLogoLinkedin
                    size={27}
                    className=" text-gray-300 hover:text-sky-400 transition-all ease-in-out"
                  />
                </div>
              </div>
            </div>
          </TeamCard>
          <TeamCard imgSrc={img2}>
            <div className="flex flex-col ml-1">
              <span className="text-[20px] font-bold mb-2">Mert Arar</span>
              <span className="text-[16px] text-gray-500">
                Co-Founder | Frontend Developer
              </span>
              <div className="absolute -bottom-full left-6 group-hover:bottom-44 transition-all duration-700 ease-out z-50">
                <div className="text-gradient mb-10">
                  <AiFillGithub
                    size={27}
                    className="mb-4 text-gray-300 hover:text-sky-400 transition-all ease-in-out"
                  />
                  <BiLogoLinkedin
                    size={27}
                    className=" text-gray-300 hover:text-sky-400 transition-all ease-in-out"
                  />
                </div>
              </div>
            </div>
          </TeamCard>
          <TeamCard imgSrc={img3}>
            <div className="flex flex-col ml-1">
              <span className="text-[20px] font-bold mb-2">Mustafa Can Ak</span>
              <span className="text-[16px] text-gray-500">
                Co-Founder | Content Creator
              </span>
              <div className="absolute -bottom-full left-6 group-hover:bottom-44 transition-all duration-700 ease-out z-50">
                <div className="text-gradient mb-10">
                  <AiFillGithub
                    size={27}
                    className="mb-4 text-gray-300 hover:text-sky-400 transition-all ease-in-out"
                  />
                  <BiLogoLinkedin
                    size={27}
                    className=" text-gray-300 hover:text-sky-400 transition-all ease-in-out"
                  />
                </div>
              </div>
            </div>
          </TeamCard>
        </div>
      </div>
    </>
  );
};

export default Team;
