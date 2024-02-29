import React from "react";

import Navbar from "../../../components/navbar/Navbar";
import Aside from "../../../components/aside/Aside";

import image1 from "../../../assets/AdminRegImg/image3.png";
import image1Bg from "../../../assets/AdminRegImg/image3bg.png";

import image2 from "../../../assets/AdminRegImg/image4.png";
import image2Bg from "../../../assets/AdminRegImg/image4bg.png";

import image3 from "../../../assets/AdminRegImg/image5.png";
import image3Bg from "../../../assets/AdminRegImg/image5bg.png";

import clientRegIcon from "../../../assets/AdminRegImg/Vector.svg";
import studentRegIcon from "../../../assets/AdminRegImg/studentReg.svg";
import adminRegIcon from "../../../assets/AdminRegImg/Client.svg";
import "./IdCardIssuance.css";

import CardOption from "../../../components/card/CardOption";

function IdCardIssuance() {
  return (
    <div>
      <Navbar />
      <main className="flex">
        <Aside />
        <div className="ici-content">
          <h3 className="idReg">ID Issuance </h3>

          <div className="flex idCardItems">
            <CardOption
              image={window.innerWidth <= 600 ? image1 : image1Bg}
              icon={studentRegIcon}
              title={"Students Registration"}
            />
            <CardOption
              image={window.innerWidth <= 600 ? image2 : image2Bg}
              icon={clientRegIcon}
              title={"Registration of Clients"}
            />

            <CardOption
              image={window.innerWidth <= 600 ? image3 : image3Bg}
              icon={adminRegIcon}
              title={"Registration of Clients"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default IdCardIssuance;
