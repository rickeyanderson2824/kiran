import React from "react";
import { films, international_projects, advertisement } from "../../constants";
import Navbar from "@/components/Navbar";

const posters = [
  "1 (1).jpeg",
  "1 (1).jpg",
  "1 (1).png",
  "1 (2).jpeg",
  "1 (2).jpg",
  "1 (3).jpg",
  "1 (4).jpg",
  "1 (5).JPG",
  "1 (6).jpg",
  "1 (7).jpg",
  "1 (8).jpg",
  "1 (9).jpg",
];

const images = [
  "1 (1).jpeg",
  "1 (1).JPG",
  "1 (10).jpg",
  "1 (11).jpg",
  "1 (12).jpg",
  "1 (13).jpg",
  "1 (14).JPG",
  "1 (15).jpg",
  "1 (16).jpg",
  "1 (17).JPG",
  "1 (18).JPG",
  "1 (19).JPG",
  "1 (2).jpeg",
  "1 (2).JPG",
  "1 (20).JPG",
  "1 (21).JPG",
  "1 (22).JPG",
  "1 (23).JPG",
  "1 (24).JPG",
  "1 (25).JPG",
  "1 (26).JPG",
  "1 (27).JPG",
  "1 (28).JPG",
  "1 (29).JPG",
  "1 (3).jpeg",
  "1 (3).JPG",
  "1 (30).jpg",
  "1 (31).jpg",
  "1 (32).jpg",
  "1 (33).JPG",
  "1 (34).JPG",
  "1 (35).JPG",
  "1 (36).JPG",
  "1 (37).jpg",
  "1 (38).JPG",
  "1 (39).jpg",
  "1 (4).jpeg",
  "1 (4).JPG",
  "1 (40).jpg",
  "1 (41).jpg",
  "1 (42).jpg",
  "1 (43).jpg",
  "1 (44).jpg",
  "1 (45).jpg",
  "1 (46).jpg",
  "1 (47).jpg",
  "1 (48).jpg",
  "1 (49).jpg",
  "1 (5).jpeg",
  "1 (5).JPG",
  "1 (50).jpg",
  "1 (51).jpg",
  "1 (52).JPG",
  "1 (53).JPG",
  "1 (54).JPG",
  "1 (55).jpg",
  "1 (56).jpg",
  "1 (57).jpg",
  "1 (58).jpg",
  "1 (59).JPG",
  "1 (6).jpeg",
  "1 (6).JPG",
  "1 (7).jpeg",
  "1 (7).JPG",
  "1 (8).jpeg",
  "1 (8).jpg",
  "1 (9).jpg",
];

const Gallery = () => {
  return (
    <main>
      <div
        className="relative h-[60vh] md:h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/gallery.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
          <Navbar />
          <div className="flex items-end justify-center h-full z-30 absolute top-0 left-0 right-0 p-4 md:pb-20 ">
            <span className="md:font-semibold text-xl font-normal md:text-4xl text-white animate-slide-fade">
              &quot;Photography is the story we fail to{" "}
              <span className="md:font-semibold text-xl font-normal md:text-4xl text-[#FFBA0A] animate-slide-fade">
                &nbsp;put into words.&quot; – Destin Sparks
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-10">
        <div>
          <div className="btn rounded-lg w-full max-w-[350px] h-[60px] mx-auto bg-black flex justify-center items-center mt-8 md:mt-16 mb-4 md:mb-8">
            <span className="text-[#FFBA0A] text-center text-xl md:text-3xl font-semibold">
              Personal Shots
            </span>
          </div>
          <div className="w-full max-w-[80%] mx-auto shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-[100px] flex justify-center items-center mb-8">
            <span className="text-gray-900 text-center text-base md:text-xl font-semibold">
              &quot;Every captured moment tells a part of my journey, both on and off
              the set.&quot; - Kedal Bhusal
            </span>
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-2">
              <img
                src={`/assets/personal/${image}`}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div>
          <div className="btn rounded-lg w-full max-w-[350px] h-[60px] mx-auto bg-black flex justify-center items-center mt-8 md:mt-16 mb-4 md:mb-8">
            <span className="text-[#FFBA0A] text-center text-xl md:text-3xl font-semibold">
              Posters
            </span>
          </div>
          <div className="w-full max-w-[80%] mx-auto shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-[100px] flex justify-center items-center mb-8">
            <span className="text-gray-900 text-center text-base md:text-xl font-semibold">
              &quot;With each film, I blend artistic vision and compelling
              narratives, aiming to captivate both local and global audiences.&quot;
              - Kedal Bhusal
            </span>
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {posters.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-2">
              <img
                src={`/assets/posters/${image}`}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div>
          <div className="btn rounded-lg w-full max-w-[350px] h-[60px] mx-auto bg-black flex justify-center items-center mt-8 md:mt-16 mb-4 md:mb-8">
            <span className="text-[#FFBA0A] text-center text-xl md:text-3xl font-semibold">
              Films & Music Videos
            </span>
          </div>
          <div className="w-full max-w-[80%] mx-auto shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-[100px] flex justify-center items-center mb-8">
            <span className="text-gray-900 text-center text-base md:text-xl font-semibold">
              &quot;Through my lens, I craft stories that capture the heart of Nepali
              culture and resonate with audiences beyond borders.&quot; - Kedal
              Bhusal
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {films.map(({ id, link, title }) => (
            <div key={id}>
              <h2 className="font-bold text-base md:text-xl text-center my-2">
                {title}
              </h2>
              <iframe
                width="100%"
                height="315"
                src={link}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <div>
          <div className="btn rounded-lg w-full max-w-[350px] h-[60px] mx-auto bg-black flex justify-center items-center mt-8 md:mt-16 mb-4 md:mb-8">
            <span className="text-[#FFBA0A] text-center text-xl md:text-3xl font-semibold">
              International Projects
            </span>
          </div>
          <div className="w-full max-w-[80%] mx-auto shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-[100px] flex justify-center items-center mb-8">
            <span className="text-gray-900 text-center text-base md:text-xl font-semibold">
              &quot;My work is deeply rooted in Nepal, but its reach knows no
              borders.&quot; - Kedal Bhusal
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {international_projects.map(({ id, link, title }) => (
            <div key={id}>
              <h2 className="font-bold text-base md:text-xl text-center my-2">
                {title}
              </h2>
              <iframe
                width="100%"
                height="315"
                src={link}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <div>
          <div className="btn rounded-lg w-full max-w-[350px] h-[60px] mx-auto bg-black flex justify-center items-center mt-8 md:mt-16 mb-4 md:mb-8">
            <span className="text-[#FFBA0A] text-center text-xl md:text-3xl font-semibold">
              Advertisement Work
            </span>
          </div>
          <div className="w-full max-w-[80%] mx-auto shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-[100px] flex justify-center items-center mb-8">
            <span className="text-gray-900 text-center text-base md:text-xl font-semibold">
              &quot;I aim to bring products to life through the lens, ensuring they
              leave a lasting impression.&quot; - Kedal Bhusal
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {advertisement.map(({ id, link, title }) => (
            <div key={id}>
              <h2 className="font-bold text-base md:text-xl text-center my-2">
                {title}
              </h2>
              <iframe
                width="100%"
                height="315"
                src={link}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
