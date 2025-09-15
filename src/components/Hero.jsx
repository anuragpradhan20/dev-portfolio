import React from "react";
import Profile from "../images/IMG_4476.jpgk.jpg";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  return (
    <div className="py-10 flex flex-col gap-4 items-center justify-center">
      <img
        src={Profile}
        alt="profile image"
       className="sm:1/4 md:w-1/4 lg:w-1/5 aspect-square rounded-full object-center"
      />
      <div className="w-2/3  flex flex-col justify-center items-center gap-4">
        <h1 className="w-full lg:text-6xl md:text-3xl font-semibold text-center">
          <span
            style={{
              background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Hi, I'm Anurag Pradhan
          </span>
          , Frontend Web Developer
        </h1>
        <p className="w-3/4 lg:text-lg md:text-base font-semibold  text-center">
          I design and develop responsive, user-focused web applications with a
          strong focus on functionality and performance.
        </p>
      </div>
      <div className="lg:w-2/3 md:w-full flex items-center justify-center gap-3 my-4">
        <button
          type="button"
          className="w-44 px-2 py-4 rounded-full text-lg text-white font-semibold border cursor-pointer hover:border-purple-500 hover:text-purple-500"
        >
          <ScrollLink to="contact">Contact with me</ScrollLink>
        </button>
        <button
          type="button"
          className="w-44 px-2 py-4 rounded-full text-lg text-white font-semibold border hover:border-purple-500 hover:text-purple-500"
        >
          <a
            href="https://drive.google.com/file/d/1jqezyHgOjdTkijIcSetiz0O9Jmx-oHKT/view"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            View Resume
          </a>
        </button>
         <button
          type="button"
          className="w-44 px-2 py-4 rounded-full text-lg text-white font-semibold border hover:border-purple-500 hover:text-purple-500"
        >
          <a
            href="/calendar Aug sept 25 website.pdf"
            download="Anurag_Pradhan_ReactJS_Developer_Resume.pdf"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
