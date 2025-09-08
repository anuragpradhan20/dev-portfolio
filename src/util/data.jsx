import html from "../images/html5-original.svg";
import css from "../images/css3-original.svg";
import js from "../images/javascript-original.svg";
import react from "../images/react-original.svg";
import redux from "../images/redux-original.svg";
import tailwind from "../images/tailwindcss-original.svg";
import bootstrap from "../images/Bootstrap_logo.png";
import git from "../images/git-original.svg";
import project1 from "../images/Screenshot 2025-08-24 205828.png";
import project2 from "../images/Screenshot 2025-08-24 210901.png";
import project3 from "../images/Screenshot 2025-08-24 212013.png";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import jest from "../images/Jest.png"
export const skillImages = [
  { link: html, label: "HTML" },
  { link: css, label: "CSS" },
  { link: js, label: "JS" },
  { link: react, label: "React" },
  { link: redux, label: "Redux" },
  { link: tailwind, label: "Tailwind" },
  {link: bootstrap,label:"Bootstrap"},
  {link:git,label:"Git"},
  {link:jest,label:"Jest"}
];
export const navLinks = [
  { to: "home", label: "Home" },
  { to: "aboutme", label: "About me" },
  { to: "skills", label: "Skills" },
  { to: "works", label: "My Works" },
  { to: "contact", label: "Contact" },
];
export const workLinks=[
  {link:"https://crypto-price-tracking-app-blush.vercel.app/",githubLink:"https://github.com/anuragpradhan20/Crypto-Price-Tracking-App-.git",project:project1},
  {link:"https://doctor-booking-website-coral.vercel.app/",githubLink:"https://github.com/anuragpradhan20/Doctor-Booking-Website.git",project:project2},
  {link:"https://online-shopping-website-lilac.vercel.app/",githubLink:"https://github.com/anuragpradhan20/Online-Shopping-Website.git",project:project3}
]

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/anurag-pradhan-bb6b152b2/",
    icon: <PiLinkedinLogo size={26} />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername", 
    icon: <RiTwitterXFill size={26} />,
    label: "Twitter",
  },
  {
    href: "https://github.com/anuragpradhan20",
    icon: <FiGithub size={26} />,
    label: "GitHub",
  },
];
