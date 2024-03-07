// ToggleButton.js
import React from "react";

function ToggleButton({ onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {/* Replace the image source with your actual image URL */}
      <img src="toggle-icon.png" alt="Toggle Aside" />
    </div>
  );
}

export default ToggleButton;
