import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div id="home" className='w-screen h-full text-white  overflow-x-hidden'  style={{ backgroundColor: "#181C14",}}>
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home;