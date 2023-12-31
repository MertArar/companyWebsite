import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Explore from "./Explore/Explore";
import Testimonials from "./Testimonials/Testimonials";
import Experience from "./Experience/Experience";
import Partners from "./Partners/Partners";
import Services from "./Services/Services";
import Team from "./Team/Team";
import ContactHome from "./ContactHome/ContactHome";
import Stats from "./Stats/Stats";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Explore />
      <Experience />
      <Team />
      <Testimonials />
      <Partners />
      <ContactHome />
    </div>
  );
};

export default Home;
