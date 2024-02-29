import React from "react";
import "./AsideOption.css";

function AsideOption({ icon, title }) {
  return (
    <div className="aside-items flex">
      <img src={icon} alt="aside options icons" />
      <p className="asideOptionTitle">{title}</p>
    </div>
  );
}

export default AsideOption;
