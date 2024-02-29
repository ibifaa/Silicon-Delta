import React from "react";

import Navbar from "../../../components/navbar/Navbar";
import Aside from "../../../components/aside/Aside";

import image1 from "../../../assets/AdminRegImg/image6.png";
import image1Bg from "../../../assets/AdminRegImg/image6bg.png";

import image2 from "../../../assets/AdminRegImg/image1.png";
import image2Bg from "../../../assets/AdminRegImg/image1bg.png";

import image3 from "../../../assets/AdminRegImg/image2.png";
import image3Bg from "../../../assets/AdminRegImg/image2bg.png";

import image4 from "../../../assets/AdminRegImg/image7.png";
import image4Bg from "../../../assets/AdminRegImg/image7bg.png";

import "./AdminClassManagement.css";
import "../AdminReg/AdminRegistration.css";
import CardOption from "../../../components/card/CardOption";

function AdminClassManagement() {
  return (
    <div className="adminReg">
      <Navbar />

      <main className="flex">
        <Aside />
        <div className="acmContent">
          <h3 className="acmTitle">Class Management</h3>

          <div className="acmCardItems flex">
            <div className="card">
              <CardOption
                icon={null}
                title={"School of Coding Biodata"}
                image={window.innerWidth <= 600 ? image1 : image1Bg}
              />
            </div>

            <div className="card">
              <CardOption
                icon={null}
                title={"School of Design Biodata"}
                image={window.innerWidth <= 600 ? image2 : image2Bg}
              />
            </div>

            <div className="card">
              <CardOption
                icon={null}
                title={"School of Digital Marketing Biodata"}
                image={window.innerWidth <= 600 ? image3 : image3Bg}
              />
            </div>

            <div className="card">
              <CardOption
                icon={null}
                title={"Attendance for all schools"}
                image={window.innerWidth <= 600 ? image4 : image4Bg}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminClassManagement;
