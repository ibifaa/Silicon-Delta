import React from "react";
import arrow from "../../../assets/AdminRegImg/arrow.svg";
import userImage from "../../../assets/AdminRegImg/userImage.jpg";
import logo2 from "../../../assets/AdminRegImg/logo2.png";
import "./userCard.css";

function UserCard4({ onClick }) {
  const handleClick = () => {
    // Call the onClick function passed from the parent component
    onClick();
  };
  return (
    <div className="userCard">
      <div className="name-section">
        <div className="flex">
          <img src={userImage} alt="user image" />
          <div>
            <h4>ImaChrist Davies</h4>
            <p>Community Manager</p>
            <p>Imachristt328@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h4>Edit profile</h4>

        <h4 onClick={handleClick} className="">
          change password
        </h4>
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

export default UserCard4;
