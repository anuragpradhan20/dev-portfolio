import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-10">
      <h1
        style={{
          background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        className="lg:text-5xl md:text-3xl text-2xl font-semibold my-6"
      >
        Get in touch
      </h1>

      {/* Responsive flex → stack on mobile */}
      <div className="lg:w-4/5 md:w-full md:p-4 flex flex-col md:flex-row gap-10 p-4">
        {/* Left text */}
        <div className="md:w-2/5 w-full flex flex-col gap-4 items-start">
          <h1
            style={{
              background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl font-semibold"
          >
            Let's talk
          </h1>
          <p className="text-base font-semibold text-justify leading-snug">
            I’m currently working with a startup company, but I’m always open to
            exciting new projects and collaborations. If you’d like to work
            together or discuss an idea, feel free to reach out anytime!
          </p>

          <p className="text-base font-semibold flex gap-2 items-center">
            <CiMail size={20} /> anurag.pra20@gmail.com
          </p>
          <p className="text-base font-semibold flex gap-2 items-center">
            <IoIosCall size={20} /> 9949523811
          </p>
          <p className="text-base font-semibold flex gap-2 items-center">
            <CiLocationOn size={20} /> Pune, India
          </p>
        </div>

        {/* Right form */}
        <div className="md:w-3/5 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;
