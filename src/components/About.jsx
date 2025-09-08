import React from 'react'
import Profile from '../images/pexels-mastercowley-1300402.jpg'

const About = () => {
  return (
    <div id="aboutme" className="flex flex-col items-center justify-center gap-10">
         <h1 style={{
      background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }} className='text-5xl font-semibold my-6'>About me</h1>
      <div className='w-3/4 flex gap-6'>
       <div className="w-2/6">
        <img  src={Profile} alt="Anurag Pradhan" className="w-full h-full rounded-lg shadow-lg object-cover"/>
      </div>
  <div className="w-2/3 max-w-3xl text-lg font-medium text-center leading-snug mx-auto">
  <p className="text-justify">
    I’m <span className="font-semibold">Anurag Pradhan</span>, a frontend developer 
    passionate about building responsive, user-friendly, and functional 
    web applications. I specialize in modern JavaScript frameworks like 
    <span className="font-semibold"> React</span>, and I enjoy transforming ideas into 
    clean, efficient, and scalable solutions.
  </p>
  
  <p className="text-justify mt-6">
    With a strong focus on detail and performance, I strive to create 
    digital experiences that are not only visually appealing but also 
    highly functional. My goal is to continuously learn and contribute to 
    innovative projects that make an impact.
  </p>
</div>

        </div>
      
     
    </div>
  )
}

export default About
