import React from "react";
import ExpSvg from "../assets/Group 798.png";

const Experience = () => {
    return (
        <div className="Skills relative z-0 mt-10 md:mt-20 lg:mt-40">
            <h1 className="font-fam text-[#02C9AF] text-2xl md:text-4xl lg:text-6xl text-center underline underline-offset-8 decoration[#02C9AF]">EXPERIENCE</h1>
            <div className="w-[80%] mx-auto mt-20">
                <img src={ExpSvg} alt="" />
            </div>
        </div>
    )
}

export default Experience;