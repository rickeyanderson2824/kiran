import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main>
      <div
        className="relative h-[60vh] md:h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/personal/1 (49).jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <Navbar />
          <div className="flex pb-20 items-end justify-center h-full absolute top-0 left-0 right-0">
            <span className="md:font-semibold text-xl font-normal md:text-4xl text-white animate-slide-fade shadow-lg text-center px-4">
              "The secret to film is that it's{" "}
              <span className="md:font-semibold md:text-4xl text-xl font-medium text-[#FFBA0A] animate-slide-fade shadow-lg">
                &nbsp;an illusion." - George Lucas
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-10">
        <div className="w-full max-w-[90%] mx-auto px-4 md:px-10 shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-auto md:h-[250px] flex justify-center items-center my-8">
          <span className="text-gray-900 text-center text-sm md:text-base lg:text-xl font-semibold leading-relaxed tracking-wide px-4">
            " I'm a filmmaker from Nepal with over eight years of experience in
            the industry. Starting as an assistant director on Hostel Returns in
            2014, I've since produced and directed films like Kaussidd and Bihe
            Pass. I founded Flicker Arts to support independent filmmakers and
            currently serve as content head at FOPI, Nepal's video-on-demand
            platform..."
          </span>
        </div>

        <div className="flex justify-center items-center mt-6 md:mt-10">
          <div className="btn rounded-lg w-full max-w-[350px] h-[60px] bg-black flex justify-center items-center">
            <span className="text-[#FFBA0A] text-center text-xl md:text-3xl font-semibold">
              Project Highlights
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] max-w-[90%] mx-auto px-4 md:px-10 shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-auto md:h-[150px] flex justify-center items-center mt-6 md:mt-20 my-8">
            <span className="text-gray-900 text-center text-sm md:text-base lg:text-xl font-semibold leading-relaxed tracking-wide px-4">
              I direct and produce films, lead independent projects through
              Flicker Arts, and oversee content at FOPI. I also collaborate
              internationally as a line producer and teach writing and direction
              at film academies. My work focuses on storytelling and elevating
              Nepali cinema.
            </span>
          </div>
          <div className="w-full md:w-[30%] mt-4 md:mt-0">
            <img
              src="public/assets/mirai.png"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col my-6 md:my-10">
          <div className="btn rounded-lg w-full max-w-[350px] h-[60px] bg-black flex justify-center items-center">
            <span className="text-[#FFBA0A] text-center text-xl md:text-2xl font-semibold">
              Feature Film Producer
            </span>
          </div>
        </div>

        <div className="columns-2 md:columns-3 gap-2">
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/ma rajesh hamal 1.jpg"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/posters/1 (1).jpeg"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/posters/1 (9).jpg"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
        </div>

        <div className="w-full max-w-[90%] mx-auto px-4 md:px-10 shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-auto md:h-[150px] flex justify-center items-center my-8">
          <span className="text-gray-900 text-center text-sm md:text-base lg:text-xl font-semibold leading-relaxed tracking-wide px-4">
            As a feature film producer, I’ve had the pleasure of bringing
            captivating stories to life with films like Ma Rajesh Hamal, Setu,
            and the eagerly awaited Bijuli. Each project is a new adventure,
            blending creativity with collaboration to deliver unforgettable
            cinematic experiences!
          </span>
        </div>

        <div className="flex justify-evenly items-center mt-6 md:mt-20 mb-10">
          <div className="btn rounded-lg w-full max-w-[500px] h-[60px] bg-black flex justify-center items-center">
            <span className="text-[#FFBA0A] text-center text-xl md:text-2xl font-semibold">
              Line Producer & Short Film Producer
            </span>
          </div>
        </div>

        <div className="columns-2 md:columns-3 gap-2">
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/posters/1 (6).jpg"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/dui char din.jpg"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/posters/tyson.png"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
        </div>

        <div className="w-full max-w-[90%] mx-auto px-4 md:px-10 shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-auto md:h-[125px] flex justify-center items-center my-8">
          <span className="text-gray-900 text-center text-sm md:text-base lg:text-xl font-semibold leading-relaxed tracking-wide px-4">
            Mastering the Art of Production! As the line producer for Tyson
            Naidu, I ensure every detail comes together seamlessly, making
            cinematic dreams a reality. Plus, I’ve brought to life impactful
            short films like KA and 2 4 Din, where creativity knows no bounds!
          </span>
        </div>

        <div className="flex justify-evenly items-center mt-6 md:mt-20 mb-10">
          <div className="btn rounded-lg w-full max-w-[400px] h-[60px] bg-black flex justify-center items-center">
            <span className="text-[#FFBA0A] text-center text-xl md:text-2xl font-semibold">
              Advertisement & TV Shows
            </span>
          </div>
        </div>

        <div className="columns-2 md:columns-3 gap-2">
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/haddi.png"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/chef.png"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
          <div className="w-full h-auto break-inside-avoid">
            <img
              src="public/assets/Screenshot (2).png"
              alt="abc"
              className="max-w-full max-h-full object-contain bg-black bg-opacity-40 mt-4"
            />
          </div>
        </div>

        <div className="w-full max-w-[90%] mx-auto px-4 md:px-10 shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-auto md:h-[100px] flex justify-center items-center my-8">
          <span className="text-gray-900 text-center text-sm md:text-base lg:text-xl font-semibold leading-relaxed tracking-wide px-4">
            Bringing stories to life through the lens! From the culinary
            excitement of Chef Nepal and the flavorful drama of Biriyani to the
            heartfelt tales of Sadgamay, I craft engaging visuals that resonate.
            Whether directing TV shows or creating memorable ads, my passion for
            storytelling shines through every project!
          </span>
        </div>
      </div>
    </main>
  );
};

export default Home;
