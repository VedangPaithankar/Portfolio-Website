import React from "react";
import InfoCard1 from "../components/InfoCard1";
import InfoCard2 from "../components/InfoCard2";
import InfoCard3 from "../components/InfoCard3";
import InfoCard4 from "../components/InfoCard4";
import FP1 from "../assets/fp1.png";
import FP2 from "../assets/fp2.png";
import VB1 from "../assets/vb1.png";
import VB2 from "../assets/vb2.png";
import WA1 from "../assets/wa1.png";
import WA2 from "../assets/wa2.png";
import MR1 from "../assets/mr1.png";
import MR2 from "../assets/mr2.png";

const Portfolio = () => {
    const infoCardProps1 = {
        image1: FP1,
        image2: FP2,
        heading: "Foodys Paradise",
        description: [
            "Savor the culinary adventure at Foodys Paradise! Discover over 5000+",
            "delectable Indian recipes. Unleash the magic of our ingenious feature",
            "- effortlessly input fridge items and unleash a flood of personalized",
            "recipe recommendations. Elevate your cooking experience now!",
            "",
            "Tech-Stack: React.js, Tailwind CSS, Express Js, Node Js, MongoDB",
        ],
        link: "https://foodysparadisef.onrender.com/",
        assetlink:[
            "https://foodysparadisef.onrender.com/",
        ]
    };

    const infoCardProps2 = {
        image1: VB1,
        image2: VB2,
        heading: "VOXBOT",
        description: [
            "Your AI companion, fueled by OpenAI and supercharged with PyQt ",
            "for seamless, interactive, and intelligent conversations.",
            "Tech-Stack: Python - GUI, Python, Open AI API",
        ],
        link: "https://github.com/VedangPaithankar/VoxBot",
        assetlink:[
            "https://www.freepik.com/free-vector/chat-bot-concept-illustration_12781044.htm#query=chatbot&position=23&from_view=search&track=sph&uuid=2bc273c9-8ba9-4076-8bbc-77a9d757fee3",
        ]
    };

    const infoCardProps3 = {
        image1: WA1,
        image2: WA2,
        heading: "Weather WebApp",
        description: [
            "The Weather App is a dynamic and user-friendly application ",
            "built using the React framework, which allows users to ",
            "access real-time weather information for any location worldwide.",
            "Powered by the OpenWeatherAPI.",
            "Tech-Stack: React.js, Javascript",
        ],
        link: "https://github.com/VedangPaithankar/Weather-App",
        assetlink:[
            "https://www.freepik.com/free-vector/weather-concept-illustration_6982820.htm#query=weather%20app&position=19&from_view=search&track=ais&uuid=de539697-acc1-4e87-adc5-c8cc3505a58b",
            "https://www.freepik.com/free-vector/weather-icons-collection_1044316.htm#query=weather%20app&position=29&from_view=search&track=ais&uuid=de539697-acc1-4e87-adc5-c8cc3505a58b"
        ]
    };

    const infoCardProps4 = {
        image1: MR1,
        image2: MR2,
        heading: "Movie Recommendation",
        description: [
            "A movie recommendation system using Python with three  ",
            "approaches: collaborative filtering, content-based filtering, and ",
            "popularity-based filtering. Collaborative filtering suggests movies ",
            "based on user similarity, content-based filtering recommends movies",
            "similar to ones the user likes, and popularity-based filtering",
            "Tech-Stack: Python, Deepnote",
        ],
        link: "https://github.com/VedangPaithankar/Movie-Recommendation-System",
        assetlink:[
            "https://unblast.com/movie-director-vector-illustration-ai/",
            "https://www.flaticon.com/free-stickers/movies",
        ]
    };

    return (
        <div className="Portfolio relative z-0 mt-10 md:mt-20 lg:mt-40">
            <h1 className="font-fam text-[#02C9AF] text-2xl md:text-4xl lg:text-6xl text-center underline underline-offset-8 decoration-[#02C9AF]">PORTFOLIO</h1>
            <div className="justify-center ">
                <InfoCard1 {...infoCardProps1} />
                <InfoCard2 {...infoCardProps2} />
                <InfoCard3 {...infoCardProps3} />
                <InfoCard4 {...infoCardProps4} />
            </div>
        </div>
    );
};
  
export default Portfolio;