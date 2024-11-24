import React from "react";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Header Section */}
      <div
        className="relative h-[60vh] md:h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
          <Navbar />
          <div className="flex pb-20 items-end justify-center h-full z-30 absolute top-0 left-0 right-0 px-4  ">
            <span className="md:font-semibold text-xl font-normal md:text-4xl text-white animate-slide-fade text-center">
              "Every great design begins with an even{" "}
              <span className="fmd:font-semibold text-xl font-normal md:text-4xl text-[#FFBA0A] animate-slide-fade text-center">
                &nbsp;better story." – Lorinda Mamo
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Filmmaker Section */}
      <div>
        <div className="btn rounded-lg w-full max-w-[350px] md:max-w-[750px] mt-8 md:mt-16 mx-auto h-[60px] bg-black flex justify-center items-center">
          <span className="text-[#FFBA0A] text-center text-xl md:text-2xl font-semibold">
            Filmmaker with 8+ Years of Experience & Founder of Flicker Arts
          </span>
        </div>
        <div className="mt-8 w-full mx-4 md:mx-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 px-4 md:px-10 pt-8">
            <span className="text-black text-center md:text-left text-base md:text-xl font-semibold leading-relaxed tracking-wide">
              Since starting as an assistant director on Hostel Returns in 2014,
              I’ve contributed to films like Kaussidd, Bihe Pass, Ma Rajesh
              Hamal, and Bijuli. Over time, I founded Flicker Arts, a
              Kathmandu-based production house, dedicated to supporting
              independent filmmakers and producing films that challenge and
              inspire audiences.
            </span>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="public/assets/about_body.JPG"
              className="rounded-3xl w-[90%] mx-auto md:mx-0 shadow-lg shadow-gray-800"
              alt="About Image"
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="btn rounded-lg w-full max-w-[350px] md:max-w-[600px] mt-8 md:mt-16 mx-auto h-[60px] bg-black flex justify-center items-center">
          <span className="text-[#FFBA0A] text-center text-xl md:text-2xl font-semibold">
            Education, Skills & Award-Winning Short Films
          </span>
        </div>
        <div className="mt-8 w-full mx-4 md:mx-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <img
              src="public/assets/personal/1 (13).jpg"
              className="rounded-3xl w-[90%] mx-auto md:mx-0 shadow-lg shadow-gray-800"
              alt="Education Image"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 pt-8">
            <span className="text-black text-center md:text-left text-base md:text-xl font-semibold leading-relaxed tracking-wide">
              With a degree in Writing and Direction from Oscar International
              College, I’ve honed my storytelling skills, bringing them into
              every project I take on. My short films, such as KA, 2 4 Din, and
              The Doll’s House, have earned international recognition for their
              unique narratives and technical execution, gaining attention at
              global film festivals.
            </span>
          </div>
        </div>
      </div>

      {/* Educator Section */}
      <div>
        <div className="btn rounded-lg w-full max-w-[350px] md:max-w-[400px] mt-8 md:mt-16 mx-auto h-[60px] bg-black flex justify-center items-center">
          <span className="text-[#FFBA0A] text-center text-xl md:text-2xl font-semibold">
            Educator & Recent Work
          </span>
        </div>
        <div className="mt-8 w-full mx-4 md:mx-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 px-4 md:px-10 pt-8">
            <span className="text-black text-center md:text-left text-base md:text-xl font-semibold leading-relaxed tracking-wide">
              I’ve been privileged to mentor at top film academies in Nepal,
              nurturing future filmmakers. My recent projects, including
              Jalkapur, Jugina, and Chef Nepal, showcase my versatility in
              handling both large-scale productions and intricate storytelling.
              I’ve also worked internationally as a line producer for Tyson
              Naidu.
            </span>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="public/assets/personal/1 (30).jpg"
              className="rounded-3xl w-[90%] mx-auto md:mx-0 shadow-lg shadow-gray-800"
              alt="Recent Work Image"
            />
          </div>
        </div>
      </div>

      {/* Global Collaborations Section */}
      <div>
        <div className="btn rounded-lg w-full max-w-[350px] md:max-w-[500px] mt-8 md:mt-16 mx-auto h-[60px] bg-black flex justify-center items-center">
          <span className="text-[#FFBA0A] text-center text-xl md:text-2xl font-semibold">
            Global Collaborations & Role at FOPI
          </span>
        </div>
        <div className="mt-8 w-full mx-4 md:mx-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <img
              src="public/assets/personal/1 (6).jpg"
              className="rounded-3xl w-[90%] mx-auto md:mx-0 shadow-lg shadow-gray-800"
              alt="Global Collaborations Image"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 pt-8">
            <span className="text-black text-center md:text-left text-base md:text-xl font-semibold leading-relaxed tracking-wide">
              Through programs like Film Independent’s Global Media Makers and
              Tokyo Docs, I’ve expanded my global network and filmmaking
              perspective. As the content head at FOPI, I lead content
              production, helping to elevate Nepali cinema and broaden its
              digital reach.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
