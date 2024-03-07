import React from "react";

function smallAsideOption({ icon }) {
  return (
    <div>
      <div className="flex small-aside-items">
        <img src={icon} alt="aside options icons" />
      </div>
    </div>
  );
}

export default smallAsideOption;
