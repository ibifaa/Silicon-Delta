import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Aside from "../aside/Aside";
import "./NewAdminLayout.css";

function NewAdminLayout({ children }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [asideVisible, setAsideVisible] = useState(!isMobile);

  const toggleAside = () => {
    console.log("toggling aside visiblity....");
    setAsideVisible(!asideVisible);
  };

  return (
    <div className="">
      <Navbar onToggleAside={toggleAside} />

      <main className="parent">
        <div className="left">
          <Aside visible={asideVisible} />
        </div>

        <div className="right">{children}</div>
      </main>
    </div>
  );
}

export default NewAdminLayout;
