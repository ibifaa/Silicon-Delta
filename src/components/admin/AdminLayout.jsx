import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaBars,
  FaBell,
  FaCog,
  FaCogs,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";

import profilelogo from "../../assets/default-profile.png";
import sitelogo from "../../assets/small-logo.png";
import homePic from "../../assets/dashboard-icon.png";
import reportsPic from "../../assets/reports-icon.png";
import communitiesPic from "../../assets/community-icon.png";
import messagesPic from "../../assets/messages-icon.png";
import emailPic from "../../assets/email-icon.png";


import { Link, NavLink } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  // Check screen width and hide aside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsAsideVisible(false);
      } else {
        setIsAsideVisible(true);
      }
    };

    handleResize(); // Set initial visibility based on screen width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => { 
    setActiveLink(link);
  };

  const asideClass = isAsideVisible ? `aside fadeIn` : `aside fadeOut noAside`;
  return (
    <div className="userlayout cmlayout">
      <header className="dashboard-header">
        <img src={sitelogo} alt="" className="header-logo" />
        <div className="header-aside">
          <FaBell className="header-icon"></FaBell>
          <FaUserCircle className="header-icon" />&emsp; 
          <span className="userProfile" onClick={toggleProfile}>ImaChrist Davies</span>
          <FaBars onClick={toggleAside} className="headerToggleIcon" />
          
        </div>
      </header>
      {isProfileVisible && (
     <div className="headerNav">
     <center>
     <img src={profilelogo} alt="" />
     <h3>ImaChrist Davies</h3>
     <p>Community Manager</p>
     <p>Imachristt328@gmail.com</p>
     </center><br /><hr /><br />
     <div className="profileItems">
       <p><FaCog/>&ensp; Settings</p>
       <p className="red"><FaSignOutAlt/>&ensp; Log Out</p>
     </div>
     </div>
      )}
 
      <div className="user-content-wrapper">
        <div className={asideClass}>
          <nav>

            <NavLink
              to="/community-manager/dashboard"
              activeClassName="active"
              onClick={() => handleNavLinkClick("/community-manager/dashboard")}
            >
              <div className="nav-item">
                <img src={homePic} alt="" /> Dashboard
              </div>
            </NavLink>

            <NavLink
              to="/community-manager/reports"
              activeClassName="active"
              onClick={() => handleNavLinkClick("/community-manager/reports")}
            >
              <div className="nav-item">
                <img src={reportsPic} alt="" /> Reports
              </div>
            </NavLink>
            <NavLink
              to="/community-manager/communities"
              activeClassName="active"
              onClick={() => handleNavLinkClick("/community-manager/communities")}
            >
              <div className="nav-item">
                <img src={communitiesPic} alt="" /> Communities
              </div>
            </NavLink>
            <NavLink
              to="/community-manager/sms-management"
              activeClassName="active"
              onClick={() => handleNavLinkClick("/community-manager/sms-management")}
            >
              <div className="nav-item">
                <img src={messagesPic} alt="" /> Sms Management
              </div>
            </NavLink>
            <NavLink
              to="/community-manager/email-management"
              activeClassName="active"
              onClick={() => handleNavLinkClick("/community-manager/email-management")}
            >
              <div className="nav-item">
                <img src={emailPic} alt="" /> Email Management
              </div>
            </NavLink>
            <NavLink
              to="/community-manager/settings"
              activeClassName="active"
              onClick={() => handleNavLinkClick("/community-manager/settings")}
            >
              <div className="nav-item">
                <FaCog /> Settings
              </div>
            </NavLink>
          </nav>
        </div>

        <main className="user-main-content">
          <div className="user-main-wrapper">{children}</div>
          <footer>Silicon Delta Community Manager Portal &copy; 2024</footer>
          <ToastContainer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
