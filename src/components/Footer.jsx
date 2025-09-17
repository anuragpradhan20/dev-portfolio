import React from 'react'

const Footer = () => {
  return (
    <div className="md:w-full lg:w-4/5 mx-auto flex flex-col items-center justify-center gap-4 my-10 md:p-4 p-4">
      <div className="w-full flex flex-col gap-1 items-start border-b-2 py-2">
        <h1
          style={{
            background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          className="text-4xl font-semibold"
        >
          Anurag
        </h1>
        <p>Hi, I'm Anurag Pradhan, Frontend Web Developer.</p>
      </div>

      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="text-center sm:text-left">
          © 2025 Anurag Pradhan. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span>Term of Services</span>
          <span>Privacy Policy</span>
          <span>Connect with me</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
