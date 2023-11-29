// App.js

import React from 'react';
import { Element } from 'react-scroll';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import backgroundimage from './assets/Background.svg';

function App() {
  return (
    <div className='relative bg-[#212121]'>
      <div className="absolute top-0 left-0 w-full h-full" style={{ userSelect: 'none', zIndex: 1 }}>
        <img
          src={backgroundimage}
          alt=""
          className="w-full h-auto mt-[-1%] max-h-full" // Adjust max-height as needed
          style={{ zIndex: 2 }}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="portfolio" className="element">
          <Portfolio />
        </Element>
        <Element name="skills" className="element">
          <Skills />
        </Element>
        <Element name="experience" className="element">
          <Experience />
        </Element>
        <Footer />
      </div>
    </div>
  );
}

export default App;