import React from "react";
import arrow from "../../../assets/AdminRegImg/arrow.svg";
import userImage from "../../../assets/AdminRegImg/userImage.jpg";
import logo2 from "../../../assets/AdminRegImg/logo2.png";

import userIcon1 from "../../../assets/AdminRegImg/userIcon1.svg";
import userIcon2 from "../../../assets/AdminRegImg/userIcon2.svg";
import userIcon3 from "../../../assets/AdminRegImg/userIcon3.svg";
import camera from "../../../assets/AdminRegImg/camera.svg";
import "./userCard.css";

function UserCard2({ onClick }) {
  const handleClick = () => {
    // Call the onClick function passed from the parent component
    onClick();
  };
  return (
    <div className="userCard" onClick={handleClick}>
      <div className="name-section">
        <div className="arrow-section flex">
          <img src={arrow} alt="arrow" />
          <p>Edit profile</p>
        </div>
        <img src={userImage} alt="user image" />
        <div>
          <div className="flex icon-section">
            <h4>ImaChrist Davies</h4>
            <img src={userIcon1} alt="icon" />
          </div>
          <div className="flex icon-section">
            <p>Community Manager</p>
            <img src={userIcon2} alt="icon" />
          </div>
          <div className="flex icon-section">
            <p>Imachristt328@gmail.com</p>
            <img src={userIcon3} alt="icon" />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <hr />
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

export default UserCard2;
