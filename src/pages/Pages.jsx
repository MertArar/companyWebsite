import React from "react";

import Home from "../components/Home/Home";
import About from "./About/About";
import Solutions from "./Solutions/Solutions";
import Period from "./Period/Period";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/solutions" element={<Solutions />} />
          <Route exact path="/period" element={<Period />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Pages;
