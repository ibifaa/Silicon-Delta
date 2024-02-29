import React from "react";

import footerLogo from "../../assets/AdminRegImg/logo2.svg";
import dashBoardIcon from "../../assets/AdminRegImg/dashboardIcon.svg";
import regIcon from "../../assets/AdminRegImg/regIcon.svg";
import classMgtIcon from "../../assets/AdminRegImg/classMgtIcon.svg";
import idIcon from "../../assets/AdminRegImg/idIcon.svg";
import courseIcon from "../../assets/AdminRegImg/courseIcon.svg";
import examIcon from "../../assets/AdminRegImg/Exam.svg";

import "./Aside.css";
import AsideOption from "./AsideOption";

function Aside() {
  return (
    <div className="regAside">
      <div className="top-section flex">
        <AsideOption icon={dashBoardIcon} title="Dashboard" />
        <AsideOption icon={regIcon} title="Registration" />
        <AsideOption icon={idIcon} title="ID Issuance" />
        <AsideOption icon={classMgtIcon} title="Class management" />
        <AsideOption icon={courseIcon} title="Course Update" />
        <AsideOption icon={examIcon} title="Examinations and certification" />
      </div>

      <div className="img-section">
        <img className="aside-footer-img" src={footerLogo} alt="company logo" />
      </div>
    </div>
  );
}

export default Aside;
