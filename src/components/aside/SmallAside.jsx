import React from "react";
import { Link } from "react-router-dom";
import dashBoardIcon from "../../assets/AdminRegImg/dashboardIcon.svg";
import regIcon from "../../assets/AdminRegImg/regIcon.svg";
import classMgtIcon from "../../assets/AdminRegImg/classMgtIcon.svg";
import idIcon from "../../assets/AdminRegImg/idIcon.svg";
import courseIcon from "../../assets/AdminRegImg/courseIcon.svg";
import examIcon from "../../assets/AdminRegImg/Exam.svg";
import SmallAsideOption from "./SmallAsideOption";

function smallAside() {
  return (
    <div className="smAside">
      <div className="sm-section flex">
        <Link to="/admin/dashboard" className="link">
          {" "}
          <img src={dashBoardIcon} alt="icon" />
        </Link>

        <Link to="/admin/registration" className="link">
          {" "}
          <img src={regIcon} alt="icon" />{" "}
        </Link>

        <Link to="/admin/id-card-issuance" className="link">
          {" "}
          <SmallAsideOption icon={idIcon} />{" "}
        </Link>

        <Link to="/admin/class-management" className="link">
          {" "}
          <img src={classMgtIcon} alt="" />{" "}
        </Link>

        <Link to="/admin/course-update" className="link">
          {" "}
          <img src={courseIcon} alt="" />{" "}
        </Link>

        <Link to="/admin/examination-and-certification" className="link">
          {" "}
          <img src={examIcon} alt="" />{" "}
        </Link>
      </div>
    </div>
  );
}

export default smallAside;
