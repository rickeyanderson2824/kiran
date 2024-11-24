import React from "react";
import { services } from "../../constants";
import Navbar from "@/components/Navbar";

const Services = () => {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] sm:h-[60vh] md:h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/services.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
          <Navbar />
          <div className="flex pb-10 md:pb-20 items-end justify-center h-full z-30 absolute top-0 left-0 right-0">
            <span className="text-base sm:text-lg md:text-4xl font-normal md:font-semibold text-white animate-slide-fade text-center">
              &quot;Creativity is intelligence{" "}
              <span className="text-base sm:text-lg md:text-4xl font-normal md:font-semibold text-[#FFBA0A] animate-slide-fade text-center">
                &nbsp;having fun.&quot; – Albert Einstein
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Services Button */}
      <div className="flex justify-center mt-10 md:mt-16">
        <div className="btn rounded-lg w-[250px] sm:w-[300px] md:w-[350px] h-[50px] sm:h-[55px] md:h-[60px] bg-black flex justify-center items-center">
          <span className="text-[#FFBA0A] text-center text-xl sm:text-2xl md:text-3xl font-semibold">
            Our Services
          </span>
        </div>
      </div>

      {/* Services List */}
      <div className="w-[95%] sm:w-[90%] mx-auto mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {services.map(({ id, title, description }) => (
            <li
              key={id}
              className="w-[300px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[275px] md:h-[300px] flex justify-center items-center flex-col shadow-lg group shadow-gray-700 rounded-lg bg-gray-900 bg-opacity-90 text-[#FFBA0A] mx-auto"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-semibold w-[90%] mx-auto mb-5 sm:mb-8 md:mb-10 text-center group-hover:text-2xl sm:group-hover:text-2xl md:group-hover:text-3xl">
                {title}
              </span>
              <span className="text-sm sm:text-base md:text-lg group-hover:text-base sm:group-hover:text-lg md:group-hover:text-lg text-white font-normal w-[90%] mx-auto text-center">
                {description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Services;
