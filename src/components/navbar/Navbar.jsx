import React from "react";
import search from "../../assets/AdminRegImg/Search.svg";
import logo from "../../assets/AdminRegImg/logo.svg";
import userIcon from "../../assets/AdminRegImg/userIcon.svg";
import doorBell from "../../assets/AdminRegImg/Doorbell.svg";
import harmburger from "../../assets/AdminRegImg/hamburgermenu.svg";

import "./navbar.css";

function Navbar({ onToggleAside }) {
  const toggleDashboardDivVisibility = () => {
    window.toggleDashboardDivVisibility();
  };
  // const handleClick = () => {
  //   console.log("Hamburger menu clicked!");
  //   onToggleAside(); // Ensure this function is being called
  // };
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
        <div className="flex" onClick={toggleDashboardDivVisibility}>
          <img className="navIcons" src={userIcon} alt="user icon" />
          <p className="name">Cynthia Damian-Ekom</p>
        </div>

        <div className="hamburger" onClick={onToggleAside}>
          <img src={harmburger} alt="hamburger icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
