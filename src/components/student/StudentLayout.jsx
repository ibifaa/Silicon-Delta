import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaBars, FaBell, FaHome, FaUser, FaUserAlt, FaUserCircle } from 'react-icons/fa'

import sitelogo from "../../assets/Silicon Delta logo.png";
import dashboardLogo from "../../assets/dashboard button.png";
import homePic from "../../assets/Home.png";
import attendancePic from "../../assets/Attendance.png";
import coursesPic from "../../assets/School.png";
import testPic from "../../assets/Test Results.png";
import settingsPic from "../../assets/Settings.png";
import userPic from "../../assets/User.png";
import { Link, NavLink } from 'react-router-dom';


const StudentLayout = ({ children }) => {
    const [isAsideVisible, setIsAsideVisible] = useState(false);


  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
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

  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const asideClass = isAsideVisible ? `aside fadeIn` : `aside fadeOut noAside`;
  return (
    <div className="userlayout">
      <header className='dashboard-header'><img src={sitelogo} alt="" />
      <div className='header-aside'>
        <FaBell className='header-icon'></FaBell>
      <FaUserCircle className='header-icon' />
      <FaBars onClick={toggleAside} className='headerToggleIcon'  />
      </div>
      </header>
      <div className="user-content-wrapper">
        <div className={asideClass}>
        <nav>
          
          <div className="nav-item nav-item1">
          <img src={dashboardLogo} alt="" /> Dashboard
          </div>
<br />

<NavLink
            to="/student/dashboard"
            activeClassName="active"
            onClick={() => handleNavLinkClick('/student/dashboard')}>
          <div className="nav-item">
            <img src={homePic} alt="" /> Home
          </div>
          </NavLink>

          <NavLink
            to="/student/attendance"
            activeClassName="active"
            onClick={() => handleNavLinkClick('/student/attendance')}>
          <div className="nav-item">
            <img src={attendancePic} alt="" /> Attendance
          </div>
          </NavLink>
          <NavLink
            to="/student/courses"
            activeClassName="active"
            onClick={() => handleNavLinkClick('/student/courses')}>
          <div className="nav-item">
            <img src={coursesPic} alt="" /> Courses
          </div>
          </NavLink>
          <NavLink
            to="/student/assignments"
            activeClassName="active"
            onClick={() => handleNavLinkClick('/student/assignments')}>
          <div className="nav-item">
            <img src={testPic} alt="" /> Assignment
          </div>
          </NavLink>
          <NavLink
            to="/student/certificates"
            activeClassName="active"
            onClick={() => handleNavLinkClick('/student/certificates')}>
          <div className="nav-item">
            <img src={testPic} alt="" /> Certificates
          </div>
          </NavLink>
          <NavLink
            to="/student/profile"
            activeClassName="active"
            onClick={() => handleNavLinkClick('/student/profile')}> 
          <div className="nav-item">
            <img src={settingsPic} alt="" /> Profile
          </div>
          </NavLink>
        </nav>
        </div>
       
        <main className="user-main-content">
          <div className='user-main-wrapper'>
          {children}
          </div>
          <footer>Silicon Delta Student Portal &copy; 2024</footer>
          <ToastContainer />
        </main>
      </div>
      
    </div>
  );
};

export default StudentLayout;
