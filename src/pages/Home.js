import React from "react";
import DisplayPicture from "../assets/DisplayPicture.jpg";

const Home = () => {
    return (
        <div className="Home relative z-0">
          <div className="container relative">
            <div className="image relative max-w">
              <div className="flex items-center justify-center">
                <h2 className="text-sm md:text-8xl font-fam-graffiti text-[#049CE4] flex flex-row items-center justify-center mt-20 md:mt-10 lg:ml-0 md:ml-60">
                  <img
                    src={DisplayPicture}
                    alt=""
                    className="rounded-2xl h-20 w-20 rotate-[-20deg] mt-10 md:w-40 lg:w-80 md:h-40 lg:h-80 md:rotate-[-20deg] md:mr-20  lg:mr-60 md:mt-40"
                  />
                  <div className="flex flex-col items-center justify-center ml-20 mt-10 md:mt-20 text-2xl md:text-6xl lg:text-8xl md:ml-0">
                    <span>Vedang</span>
                    <span>Paithankar</span>
                  </div>
                </h2>
              </div>
            </div>
            <article className="flex flex-col font-fam text-white text-[8px] mt-20 bg-[#ffffff] p-4 text-center justify-center bg-opacity-5 rounded-md w-[400px] md:w-[900px] mx-auto md:text-xl">
                <span>Hello World! I'm your friendly neighborhood code-slinger with a passion for pixel perfection.</span>
                <span>Part-time coder, part-time designer – I'm on a mission to blend the best of both worlds.</span>
                Welcome to my digital playground where I turn caffeine into code and chaos into creativity!
            </article>
          </div>
        </div>
    );
};
  
export default Home;