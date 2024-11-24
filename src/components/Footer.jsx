import React from "react";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <section className="c-space bottom-0 mt-10 pt-7 pb-3 border-t bg-black bg-opacity-90 border-black-300 flex flex-col md:flex-row justify-between items-center flex-wrap gap-5">
      {/* Navigation Links */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <ul className="flex flex-col md:flex-row md:space-x-5 text-center">
          {navLinks.map(({ id, name, href }) => (
            <li
              key={id}
              className="text-white text-lg font-550 hover:text-[#FFBA0A] my-2 md:my-0"
            >
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Terms & Conditions and Copyright */}
      <div className="text-white-500 flex flex-col justify-center items-center gap-2 text-center">
        <div className="flex space-x-2">
          <p className="text-white hover:text-[#FFBA0A] cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-white">|</p>
          <p className="text-white hover:text-[#FFBA0A] cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <div>
          <p className="text-white">2024 © Kedar Bhusal All rights reserved.</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="w-full md:w-auto flex justify-center space-x-4">
        <div className="social-icon">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kedar-bhusal-87ba07316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          >
            <img
              src="public/assets/LinkedIn.svg"
              alt="linkedin"
              className="w-[40px] h-[40px] md:w-[30px] md:h-[30px]"
            />
          </a>
        </div>

        <div className="social-icon">
          <a href="https://wa.me/+9779856047022" target="_blank">
            <img
              src="public/assets/whatsapp.png"
              alt="whatsapp"
              className="w-[40px] h-[40px] md:w-[30px] md:h-[30px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
