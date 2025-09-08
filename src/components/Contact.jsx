import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div id="contact" className='flex flex-col items-center justify-center gap-10'>
    <h1 style={{
      background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }} className='text-5xl font-semibold my-6'>Get in touch</h1>
    <div className='w-4/5 flex gap-10'>
      <div className='w-2/5 flex flex-col gap-4 items-start'>
         <h1 style={{
      background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }} className='text-4xl font-semibold'>Let's talk</h1>
     <p className='text-base font-semibold text-justify leading-snug'>I’m currently working with a startup company, but I’m always open to exciting new projects and collaborations.
         If you’d like to work together or discuss an idea, feel free to reach out anytime!</p>
     <p className='text-base font-semibold text-justify leading-snug flex gap-2 items-center'><CiMail size={20} /> anurag.pra20@gmail.com</p>
     <p className='text-base font-semibold text-justify leading-snug flex gap-2 items-center'><IoIosCall size={20} /> 9949523811</p>
     <p className='text-base font-semibold text-justify leading-snug flex gap-2 items-center'><CiLocationOn size={20}/> Pune,India</p>
      </div>
       <div className='w-3/5'>
          <ContactForm/>
       </div>
    </div>
    </div>
  )
}

export default Contact;