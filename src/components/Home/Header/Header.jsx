import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinksdata } from "./navLinksdata";

import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [header, setHeader] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={header ? "header active" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="nav-item" key={_id}>
              {/*<Link activeClass="active" to={link} onClick={closeMenu}>
                {title}
              </Link>*/}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
