// Footer.js

import React from "react";
import instalogo from "../assets/instagram-logo.png";
import linkedin from "../assets/linkedin-logo.png";
import hackerrank from "../assets/hackerrank-logo.png";
import leetcode from "../assets/leetcode-logo.png";
import github from "../assets/github-logo.png";
import behance from "../assets/Behance.png";

const Footer = () => {
    return (
        <div className="flex flex-col background-color bg-opacity-80 text-gray-900 p-4 mt-10 md:mt-10 lg:flex">
            <div className="font-fam-graffiti text-2xl md:text-4xl lg:text-8xl text-center">
                Vedang <br/>
                Paithankar
            </div>
            <div className="flex mt-10 space-x-4 justify-center">
                <a href="https://www.instagram.com/vedang_1122/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={instalogo} alt="" className="cb" style={{ padding: '5%'}}/>
                </a>
                <a href="https://www.linkedin.com/in/vedang-paithankar/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" className="cb" style={{ padding: '5%'}} />
                </a>
                <a href="https://www.hackerrank.com/profile/vedangpaithanka1" target="_blank" rel="noopener noreferrer">
                    <img src={hackerrank} alt="" className="cb" style={{ padding: '5%'}} />
                </a>
                <a href="https://www.instagram.com/vedang_1122/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={leetcode} alt="" className="cb" style={{ padding: '5%'}} />
                </a>
                <a href="https://github.com/VedangPaithankar" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="" className="cb" style={{ padding: '5%'}} />
                </a>
                <a href="https://www.behance.net/vedangpaithan" target="_blank" rel="noopener noreferrer">
                    <img src={behance} alt="" className="cb" style={{ padding: '5%'}} />
                </a>
            </div>
        </div>
    );
}

export default Footer;