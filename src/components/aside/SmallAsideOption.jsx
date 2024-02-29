import React from "react";

function smallAsideOption({ icon }) {
  return (
    <div>
      <div className="flex">
        <img src={icon} alt="aside options icons" />
      </div>
    </div>
  );
}

export default smallAsideOption;
