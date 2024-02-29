import React from "react";
import CardOption from "./CardOption";
import firstImage from "../../assets/AdminRegImg/image 8.jpg";
import computer from "../../assets/AdminRegImg/computer.png";
import studentRegIcon from "../../assets/AdminRegImg/studentReg.svg";
import clientRegIcon from "../../assets/AdminRegImg/Vector.svg";

import "./Card.css";

function Card() {
  return (
    <div className="flex cardItems">
      <CardOption
        image={firstImage}
        icon={studentRegIcon}
        title={"Students Registration"}
      />
    </div>
  );
}

export default Card;
