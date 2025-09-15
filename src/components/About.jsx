import React from 'react'
import Profile from '../images/IMG_4476.jpgk.jpg'

const About = () => {
  return (
    <div id="aboutme" className="flex flex-col items-center justify-center gap-10">
         <h1 style={{
      background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }} className='lg:text-5xl font-semibold my-6 md:text-3xl'>About me</h1>
      <div className='w-4/5 flex items-center justify-between lg:gap-10 md:gap-10'>
       <div className="lg:w-3/12 md:w-2/6">
        <img  src={Profile} alt="Anurag Pradhan" className="w-full  rounded-sm shadow-lg object-contain"/>
      </div>
  <div className="lg:w-2/3 max-w-3xl md:w-4/6 lg:text-lg  md:text-sm font-medium text-center leading-snug mx-auto">
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
   <p className='text-justify mt-6'>I’m excited to keep growing as a developer, taking on new challenges, and building products that make a real difference.</p>
</div>

        </div>
      
     
    </div>
  )
}

export default About
