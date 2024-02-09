import React from "react";

import Team from "../../components/Home/Team/Team";

const About = () => {
  return (
    <>
      <div className="aboutPage flex flex-row p-16 mt-20 sm:mt-18">
        <div className="leftSide ml-5 mr-7 max-w-sm lg:max-w-xl">
          <h2 className="text-white text-4xl sm:text-4xl">
            About us | Who we are?
          </h2>
          <p className="text-white mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            possimus quaerat nam harum quibusdam. Et culpa dolorum, sed maxime
            deserunt ipsa amet, suscipit quis, porro obcaecati nobis officiis
            neque
          </p>
        </div>
        <div className="rightSide">
          <h1 className="text-white"></h1>
        </div>
      </div>
      <div>
        <Team />
      </div>
    </>
  );
};

export default About;
