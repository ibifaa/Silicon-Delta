import React from "react";
import arrow from "../../../assets/AdminRegImg/arrow.svg";
import userImage from "../../../assets/AdminRegImg/userImage.jpg";
import logo2 from "../../../assets/AdminRegImg/logo2.png";

import userIcon1 from "../../../assets/AdminRegImg/userIcon1.svg";
import userIcon2 from "../../../assets/AdminRegImg/userIcon2.svg";
import userIcon3 from "../../../assets/AdminRegImg/userIcon3.svg";
import camera from "../../../assets/AdminRegImg/camera.svg";
import "./userCard.css";

function UserCard3() {
  return (
    <div className="userCard">
      <div className="name-section">
        <div className="arrow-section flex">
          <img src={arrow} alt="arrow" />
          <p>change password</p>
        </div>

        <div>
          <form action="" className="userCardForm">
            <div>
              <input type="text" placeholder="old password" />
            </div>
            <div>
              <input type="text" placeholder="new password" />
            </div>
            <div>
              <input type="text" placeholder="confirm password" />
            </div>
            <div>
              <input type="submit" value="Submit" className="submit" />
            </div>
          </form>
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
    </div>
  );
}

export default UserCard3;
