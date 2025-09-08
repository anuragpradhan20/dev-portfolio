import React from 'react'
import { skillImages } from '../util/data';
const Skill = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center gap-10">
     <h1 style={{
      background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }} className='text-5xl font-semibold my-6'>Skill</h1>
    <div className='w-3/4 flex flex-wrap items-center justify-between mb-10'>
      {
         skillImages.map((image,index)=>(
          <div className='flex flex-col gap-2 item-center justify-center  hover:scale-110 hover:transition-transform duration-200 hover:text-purple-500' key={index}>
            <img src={image.link} alt="skill image" className='w-16 '/>
            <p className='text-center text-lg font-semibold'>{image.label}</p>
          </div>
         ))
      }
    </div>

    </div>
  )
}

export default Skill;