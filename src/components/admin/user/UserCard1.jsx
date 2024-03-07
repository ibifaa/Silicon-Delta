import React from "react";
import arrow from "../../../assets/AdminRegImg/arrow.svg";
import userImage from "../../../assets/AdminRegImg/userImage.jpg";
import logo2 from "../../../assets/AdminRegImg/logo2.png";
import "./userCard.css";

import { useAppContext } from "../../../AppContext";

function UserCard1({ onClick }) {
  const handleClick = () => {
    // Call the onClick function passed from the parent component
    onClick();
  };

  return (
    <div className="userCard">
      <div className="name-section">
        <img src={userImage} alt="user image" />
        <h4>ImaChrist Davies</h4>
        <p>Community Manager</p>
        <p>Imachristt328@gmail.com</p>
      </div>
      <div className="footer-section">
        <h4 onClick={handleClick}> Setting</h4>
        <hr />
        <h4 className="red">Logout</h4>
      </div>

      <div className="logo-section">
        <div className="subLogo">
          <h4>Silicon Delta</h4>
          <p>INNOVATION HUB</p>
        </div>

        <img src={logo2} alt="" />
      </div>
    </div>
  );
}

export default UserCard1;
