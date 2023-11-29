// Navbar.js

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="font-fam p-2 md:p-4 fixed w-full z-10 top-0 bg-[#212121]">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-5 md:mt-3">
          <li><ScrollLink to="home" smooth={true} className="text-[#02C9AF] underline-effect text-xs lg:text-2xl lg:mr-8">Home</ScrollLink></li>
          <li><ScrollLink to="portfolio" smooth={true} className="text-[#02C9AF] underline-effect text-xs lg:text-2xl lg:mr-8">Portfolio</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} className="text-[#02C9AF] underline-effect text-xs lg:text-2xl lg:mr-8">Skills</ScrollLink></li>
          <li><ScrollLink to="experience" smooth={true} className="text-[#02C9AF] underline-effect text-xs lg:text-2xl lg:mr-8">Experience</ScrollLink></li>
          <li><a href="mailto:vedangpaithankar@gmail.com" className="text-[#02C9AF] underline-effect text-xs lg:text-2xl">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;