import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Navbar from "../navbar/Navbar";
import SmallAside from "../aside/SmallAside";
import "./SmallBarLayout.css";

function SmallBarLayout({ children }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [asideVisible, setAsideVisible] = useState(!isMobile);

  const toggleAside = () => {
    console.log("toggling aside visiblity....");
    setAsideVisible(!asideVisible);
  };

  return (
    <div className="">
      <Navbar onToggleAside={toggleAside} />

      <main className="smParent">
        <div className="smLeft">
          <SmallAside visible={asideVisible} />
        </div>

        <div className="smRight">{children}</div>
      </main>
    </div>
  );
}

export default SmallBarLayout;
