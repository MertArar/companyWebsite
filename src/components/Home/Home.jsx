import React from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Explore from "./Explore/Explore";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
