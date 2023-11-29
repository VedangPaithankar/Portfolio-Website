import React from "react";

const GamingCard = (props) => {
    const { front, back } = props;
    return (
        <div className="card">
            <div className="front">
                <h2>
                {front}
                </h2>
            </div>
            <div className="back">
                <p>{back}</p>
            </div>
        </div>
    )
}

export default GamingCard;