import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Aside from "../../../components/aside/Aside";
import firstImage from "../../../assets/AdminRegImg/image10.png";
import firstImageBg from "../../../assets/AdminRegImg/image10bg.jpg";

import computer from "../../../assets/AdminRegImg/image9.png";
import computerBg from "../../../assets/AdminRegImg/image9bg.png";

import studentRegIcon from "../../../assets/AdminRegImg/studentReg.svg";
import clientRegIcon from "../../../assets/AdminRegImg/Vector.svg";

import "./AdminRegistration.css";
import CardOption from "../../../components/card/CardOption";

function AdminRegistration() {
  return (
    <div className="adminReg">
      <Navbar />
      <main className="flex">
        <Aside />
        <div className="content">
          <h3 className="reg">Registration</h3>
          <div className="cardItems flex">
            <div className="card">
              <CardOption
                icon={studentRegIcon}
                title={"Students Registration"}
                image={window.innerWidth <= 600 ? firstImage : firstImageBg}
              />
            </div>

            <div className="card">
              <CardOption
                icon={clientRegIcon}
                title={"Registration of Clients"}
                image={window.innerWidth <= 600 ? computer : computerBg}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminRegistration;
