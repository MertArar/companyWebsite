import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Explore from "./Explore/Explore";
import Testimonials from "./Testimonials/Testimonials";
import Experience from "./Experience/Experience";
import Partners from "./Partners/Partners";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Testimonials />
      <Experience />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
