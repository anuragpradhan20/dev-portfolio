import React from "react";
import Profile from "../images/pexels-mastercowley-1300402.jpg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  return (
    <div className="py-10 flex flex-col gap-4 items-center justify-center">
      <img
        src={Profile}
        alt="profile image"
        className="w-64 h-64 rounded-full object-cover"
      />
      <div className="w-2/3  flex flex-col justify-center items-center gap-4">
        <h1 className="w-full text-6xl font-semibold text-center">
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
        <p className="w-3/4  text-lg font-semibold  text-center">
          I design and develop responsive, user-focused web applications with a
          strong focus on functionality and performance.
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-around gap-4 my-4">
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
