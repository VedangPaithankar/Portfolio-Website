import Card from "../components/GamingCard"

const Skills = () => {
    const WebDev = {
        front: "Web Development Wizardy",
        back: "Crafting captivating online experiences, I've showcased my Web Development Wizardry with projects like Foodys Paradise, Blogging Website, and the Weather App. From dynamic recipe hubs to sleek blogging platforms, these projects highlight my prowess in creating user-friendly and visually appealing web applications.",
    };

    const React = {
        front: "React.js Sorcery",
        back: "Delving into the realm of React.js Sorcery, I've conjured interactive magic with projects like the Weather App, Blogging Website, and Foodys Paradise. Leveraging the power of React.js, these applications showcase my ability to build responsive and dynamic user interfaces that elevate the user experience.",
    };

    const Python = {
        front: "Python Prowess",
        back: "In the realm of Python Prowess, my projects span from VoxBot, a conversational AI companion, to Data Analyser, utilizing Python's versatility for GUI and sentiment analysis. From AI-powered conversations to data-driven insights, Python is the tool of choice in my coding arsenal.",
    };

    const MLM = {
        front: "Machine Learning Mastery",
        back: "With projects like Comment Critique and Feelings In Pixels, my Machine Learning Mastery comes to life. These applications showcase my proficiency in creating models that analyze comments for toxicity and determine the emotions portrayed in images, demonstrating a deep understanding of machine learning concepts.",
    };

    const UIUX = {
        front: "UI/UX Enhancement",
        back: "In the realm of Python Prowess, my projects span from VoxBot, a conversational AI companion, to Data Analyser, utilizing Python's versatility for GUI and sentiment analysis. From AI-powered conversations to data-driven insights, Python is the tool of choice in my coding arsenal.",
    };

    const Data = {
        front: "Data Dexterity",
        back: "Navigating the world of Data Dexterity, projects like Comment Critique and Data Analyser showcase my ability to extract insights from diverse datasets. Whether it's analyzing sentiments from news data or creating an AI model for comment toxicity, these projects demonstrate my skill in handling and deriving meaningful information from data.",
    };

    return (
        <div className="Skills relative z-0 mt-10 md:mt-20 lg:mt-40">
            <h1 className="font-fam text-[#02C9AF] text-2xl md:text-4xl lg:text-6xl text-center underline underline-offset-8 decoration[#02C9AF]">SKILLS</h1>
            <div className="flex flex-col justify-center items-center mt-20">
                <div className="flex flex-row">
                    <Card {...WebDev}/>
                    <Card {...React}/>
                    <Card {...Python}/>
                </div>
                <div className="flex flex-row">
                    <Card {...MLM}/>
                    <Card {...UIUX}/>
                    <Card {...Data}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;