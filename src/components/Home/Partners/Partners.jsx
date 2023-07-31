import React from "react";

import { logos } from "./Data";

const Partners = () => {
  return (
    <div
      className="flex items-center justify-center
    mb-16 flex-wrap gap-16 p-2"
    >
      {logos.map((logo, index) => (
        <div className="w-125" key={index}>
          <img src={logo} alt="" className="w-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Partners;
