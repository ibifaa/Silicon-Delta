import React from "react";
import dashBoardIcon from "../../assets/AdminRegImg/dashboardIcon.svg";
import regIcon from "../../assets/AdminRegImg/regIcon.svg";
import classMgtIcon from "../../assets/AdminRegImg/classMgtIcon.svg";
import idIcon from "../../assets/AdminRegImg/idIcon.svg";
import courseIcon from "../../assets/AdminRegImg/courseIcon.svg";
import examIcon from "../../assets/AdminRegImg/Exam.svg";
import SmallAsideOption from "./SmallAsideOption";

function smallAside() {
  return (
    <div className="smregAside">
      <div className="sm-section flex">
        <SmallAsideOption icon={dashBoardIcon} />
        <SmallAsideOption icon={regIcon} />
        <SmallAsideOption icon={idIcon} />
        <SmallAsideOption icon={classMgtIcon} />
        <SmallAsideOption icon={courseIcon} />
        <SmallAsideOption icon={examIcon} />
      </div>
    </div>
  );
}

export default smallAside;
