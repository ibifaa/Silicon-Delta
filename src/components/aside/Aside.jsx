import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/AdminRegImg/logo2.svg";
import dashBoardIcon from "../../assets/AdminRegImg/dashboardIcon.svg";
import regIcon from "../../assets/AdminRegImg/regIcon.svg";
import classMgtIcon from "../../assets/AdminRegImg/classMgtIcon.svg";
import idIcon from "../../assets/AdminRegImg/idIcon.svg";
import courseIcon from "../../assets/AdminRegImg/courseIcon.svg";
import examIcon from "../../assets/AdminRegImg/Exam.svg";

import "./Aside.css";
import AsideOption from "./AsideOption";

function Aside({ visible }) {
  return (
    <div>
      <div className={`regAside ${visible ? "visible" : ""}`}>
        <div className="top-section">
          <Link to="/admin/dashboard" className="link">
            {" "}
            <AsideOption icon={dashBoardIcon} title="Dashboard" />
          </Link>

          <Link to="/admin/registration" className="link">
            {" "}
            <AsideOption icon={regIcon} title="Registration" />{" "}
          </Link>

          <Link to="/admin/id-card-issuance" className="link">
            {" "}
            <AsideOption icon={idIcon} title="ID Issuance" />{" "}
          </Link>

          <Link to="/admin/class-management" className="link">
            {" "}
            <AsideOption icon={classMgtIcon} title="Class management" />{" "}
          </Link>

          <Link to="/admin/course-update" className="link">
            {" "}
            <AsideOption icon={courseIcon} title="Course Update" />{" "}
          </Link>

          <Link to="/admin/exam-and-certification" className="link">
            {" "}
            <AsideOption
              icon={examIcon}
              title="Examinations and certification"
            />{" "}
          </Link>
        </div>

        <div className="img-section">
          <img
            className="aside-footer-img"
            src={footerLogo}
            alt="company log"
          />
        </div>
      </div>
    </div>
  );
}

export default Aside;
