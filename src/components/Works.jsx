import React from 'react'
import { workLinks } from '../util/data'

const Works = () => {
  return (
    <div id="works" className="flex flex-col items-center justify-center gap-10">
      <h1
        style={{
          background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        className="lg:text-5xl font-semibold my-6 md:text-3xl text-2xl"
      >
        My Works
      </h1>

      <div className="w-full flex flex-wrap items-center justify-center gap-6 mb-10 px-4">
        {workLinks.map((work, index) => (
          <div
            key={index}
            className="w-full sm:w-5/6 md:w-2/6 lg:w-1/4 rounded-lg p-2 flex flex-col items-center"
          >
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform"
            >
              <img
                src={work.project}
                alt=""
                className="w-full object-cover rounded-lg hover:scale-105 transition-transform duration-200"
              />
            </a>

            
            <div className="mt-2 flex items-center gap-4">
              <button
                type="button"
                className="font-semibold px-3 py-1 border border-gray-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
              >
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>

              <button
                type="button"
                className="font-semibold px-3 py-1 border border-gray-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
              >
                <a
                  href={work.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Works
