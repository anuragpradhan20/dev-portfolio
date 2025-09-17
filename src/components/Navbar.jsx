import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, socialLinks } from '../util/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:p-10 md:p-10 p-4 flex justify-between items-center relative">
      <Link
        to="/"
        className="md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#DF8908] via-[#FF4D8D] to-[#B415FF] 
             bg-clip-text text-transparent transition-transform duration-500 
             hover:scale-105 hover:opacity-100"
      >
        Anurag
      </Link>

      <nav className="hidden md:flex lg:gap-6 md:gap-4">
        {navLinks.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            className="relative font-medium md:text-base lg:text-lg text-xs cursor-pointer text-white
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[2px] after:bg-[#B415FF] 
             after:transition-all after:duration-300 
             hover:after:w-full"
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>

      <div className="hidden md:flex gap-4 items-center">
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

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 bg-black md:hidden">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg"
            >
              {link.label}
            </ScrollLink>
          ))}
          <div className="flex gap-6">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-purple-500"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
