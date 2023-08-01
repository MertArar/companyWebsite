import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Explore from "./Explore/Explore";
import Testimonials from "./Testimonials/Testimonials";
import Experience from "./Experience/Experience";
import Partners from "./Partners/Partners";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Explore />
      <Experience />
      <Team />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
