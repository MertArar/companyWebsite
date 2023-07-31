import React from "react";

import image from "../../../assets/cta_bg.jpeg";

const Cta = () => {
  return (
    <div className="flex justify-center items-center mt-[-100px]">
      <img
        src={image}
        alt=""
        className="bg-no-repeat bg-right flex justify-center items-center w-[1296px] h-[300px] rounded-xl"
      />
      <div className="absolute flex flex-row justify-start items-start ">
        <div className="flex flex-col justify-start items-start ">
          <h1 className="text-white text-[50px]">Our Fun Fact</h1>
          <p className="text-white justify-center items-start text-left max-w-[50px]">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
