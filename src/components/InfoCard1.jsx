import React from "react";
import PropTypes from "prop-types";
import "../pages/styles.css";

const InfoCard = (props) => {
    const { image1, image2, heading, description, link, assetlink } = props;

    return (
        <div className="FoodysParadise mt-10 flex justify-center">
            <div className="imgs relative">
                <img src={image1} alt="" className="relative z-10 w-1/50 lg:w-1/25" onClick={() => window.open(assetlink[0])} />
                <img src={image2} alt="" className="" onClick={() => window.open(assetlink[1])} />
            </div>
            <div className="fp_info">
                <h2 className="text-[#049CE4] text-2xl md:text-4xl lg:text-6xl mb-2 font-fam-vin">{heading}</h2>
                <p className="text-white text-xs md:text-lg mb-4 md:mb-10 lg:mb-10 md:mt-10 font-fam">
                    <span>{description[0]}</span><br />
                    <span>{description[1]}</span><br />
                    <span>{description[2]}</span><br />
                    <span>{description[3]}</span><br />
                    <span>{description[4]}</span><br /><br />
                    <span>{description[5]}</span><br /><br />
                </p>
                <a href={link} className="link underline text-[#049CE4] font-fam-vin text-lg md:text-[0.125rem] lg:text-3xl" target="__blank" rel="noopener noreferrer">
                    Website ↗
                </a>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
};

export default InfoCard;