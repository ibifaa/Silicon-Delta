import React from "react";
import "./CardOption.css";

function CardOption({ image, title, icon }) {
  return (
    <div className="regCard">
      <div className="subRegCard">
        <div className="image-section">
          <img className="cardImg" src={image} alt="image" />
        </div>

        <div className="footer-section flex">
          <img src={icon} alt="icon" />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default CardOption;
