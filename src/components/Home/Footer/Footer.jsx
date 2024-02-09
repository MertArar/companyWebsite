import React from "react";
import logo from "../../../assets/logo.svg";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-transparent h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-12">
        <div className="p-5 ">
          <ul>
            <img src={logo} alt="" className="mb-10" />
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl text-white cursor-pointer hover:ease-in-out hover:transition-all hover:duration-300 hover:text-yellow-600" />
              <FaTwitter className="text-2xl text-white cursor-pointer  hover:ease-in-out hover:transition-all hover:duration-300 hover:text-blue-600" />
              <FaLinkedin className="text-2xl text-white cursor-pointer  hover:ease-in-out hover:transition-all hover:duration-300 hover:text-blue-600" />
              <FaYoutube className="text-2xl text-white cursor-pointer  hover:ease-in-out hover:transition-all hover:duration-300 hover:text-red-600" />
            </div>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-white/90 font-bold text-2xl pb-6">Home</p>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              Hakkımızda
            </li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              Dijital Çözümler
            </li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              Takım
            </li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              İletişim
            </li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white/90 font-bold text-2xl pb-6">Kurumsal</p>
            <li className="text-gray-500 text-md  font-semibold hover:text-red-600 cursor-pointer">
              Servisler
            </li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer"></li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              Misyon
            </li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              Hedefler
            </li>
            <li className="text-gray-500 text-md pb-4 font-semibold hover:text-red-600 cursor-pointer">
              Gizlilik
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-black">
        <h1 className=" text-white font-normal">
          2024 All rights reserved | ©{" "}
          <span className="hover:text-blue-600 font-normal ease-in-out transition-all duration-300 cursor-pointer">
            RSquare Game Studios{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
