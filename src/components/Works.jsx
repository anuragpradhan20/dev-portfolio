import React from 'react'
import  {workLinks} from '../util/data'
const Works = () => {
  return (
    <div id="works" className='flex flex-col items-center justify-center gap-10'>
     <h1 style={{
      background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }} className='lg:text-5xl font-semibold my-6 md:text-3xl'>My Works</h1>
    <div className='w-full  flex flex-wrap items-center justify-around mb-10'>
       {
         workLinks.map((work,index)=>(
        <div className='lg:w-1/4 md:w-2/6 md:p-2 rounded-lg p-2 flex flex-col items-center' key={index}>
        <a href={work.link} target="_blank" rel="noopener noreferrer"      
         className="hover:text-purple-500 transition-transform"
        ><img src={work.project} alt="" className="w-full object-cover rounded-lg hover:scale-105 hover:transition-transform duration-200"/></a>
          <div className='mt-2 flex items-center gap-4'>
            <button type="button" className='font-semibold px-3 py-1 border border-gray-500 rounded-lg hover:bg-purple-500 hover:text-white transition'> <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >Demo</a></button>
            <button type="button" className='font-semibold px-3 py-1 border border-gray-500 rounded-lg hover:bg-purple-500 hover:text-white transition'>
              <a
            href={work.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >Code</a>
            </button>
          </div>
          </div>
         ))
       }
    </div>
    </div>
  )
}

export default Works;