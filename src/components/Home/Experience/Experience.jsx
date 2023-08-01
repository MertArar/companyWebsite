import React, { useRef } from "react";

import { TitleText, TypingText } from "./components/CustomText";

import { motion, useScroll } from "framer-motion";
import Lilcon from "./components/Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0, text-white last:mb-5 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl mb-4 ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-sky-400 capitalize mb-10"
          >
            @{company}
          </a>
        </h3>
        <div className="mb-4">
          <span className="capitalize font-medium text-white/75 mb-4">
            {time} | {address}
          </span>
        </div>
        <p className="font-medium w-full ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 mb-[100px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col"
      >
        <TypingText
          title="| The Pathway"
          textStyles="text-center text-white/90 text-lg"
        />
        <TitleText
          title={<>Accompany Our Journey</>}
          textStyles="text-center mb-10"
        />
      </motion.div>

      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-slate-300 origin-top"
        />

        <ul className="w-full flex flex-col  items-start justify-between ml-4 ">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque,
              temporibus delectus suscipit fugiat hic voluptate, reprehenderit,
              debitis unde voluptatibus illum autem deserunt saepe. Odio."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque,
              temporibus delectus suscipit fugiat hic voluptate, reprehenderit,
              debitis unde voluptatibus illum autem deserunt saepe. Odio."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque,
              temporibus delectus suscipit fugiat hic voluptate, reprehenderit,
              debitis unde voluptatibus illum autem deserunt saepe. Odio."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque,
              temporibus delectus suscipit fugiat hic voluptate, reprehenderit,
              debitis unde voluptatibus illum autem deserunt saepe. Odio."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque,
              temporibus delectus suscipit fugiat hic voluptate, reprehenderit,
              debitis unde voluptatibus illum autem deserunt saepe. Odio."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
