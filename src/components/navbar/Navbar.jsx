import React from "react";
import search from "../../assets/AdminRegImg/Search.svg";
import logo from "../../assets/AdminRegImg/logo.svg";
import userIcon from "../../assets/AdminRegImg/userIcon.svg";
import doorBell from "../../assets/AdminRegImg/Doorbell.svg";
import harmburger from "../../assets/AdminRegImg/hamburgermenu.svg";

import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar flex">
      <div className="left-side">
        <img className="navIcons" src={logo} alt="company logo" />
      </div>

      <div className=" menu">
        <div className="navItems ">
          <img className="navIcons" src={search} alt="search icon" />
          <img className="navIcons" src={doorBell} alt="doorBell icon" />
        </div>
        <img className="navIcons" src={userIcon} alt="user icon" />
        <p className="name">Cynthia Damian-Ekom</p>
        <div className="hamburger">
          <img src={harmburger} alt="hamburger icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
