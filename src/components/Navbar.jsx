import React from 'react'
import { Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { RiTwitterXFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { navLinks } from '../util/data';
import { socialLinks } from '../util/data';
const Navbar = () => {
  return (
    <div className='w-full  p-10 flex justify-between items-center'>
    <Link to="/"  className="md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#DF8908] via-[#FF4D8D] to-[#B415FF] 
             bg-clip-text text-transparent transition-transform duration-500 
             hover:scale-105 hover:opacity-100">Anurag</Link>
    <nav className="flex lg:gap-6 md:gap-4">
     {navLinks.map((link) => (
    <ScrollLink
      key={link.to}
      to={link.to}
      smooth={true}
      duration={500}
      className="relative font-medium md:text-base lg:text-lg cursor-pointer text-white
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[2px] after:bg-[#B415FF] 
             after:transition-all after:duration-300 
             hover:after:w-full"
    >
      {link.label}
    </ScrollLink>
  ))}
</nav>

    <div className='flex gap-4 items-center'>
        {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"                 
          rel="noopener noreferrer"      
          aria-label={label}
          className="hover:scale-110 hover:text-purple-500 transition-transform duration-200"
        >
          {icon}
        </a>
      ))}
    </div>
    </div>
  )
}

export default Navbar;