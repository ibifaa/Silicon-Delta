import React from "react";

import Navbar from "../../../components/navbar/Navbar";
import Aside from "../../../components/aside/Aside";
import image1 from "../../../assets/AdminRegImg/image3.png";
import image2 from "../../../assets/AdminRegImg/image4.png";
import image3 from "../../../assets/AdminRegImg/image5.png";
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
        <div className="asr-content">
          <h3 className="reg">Registration</h3>
          <div className="flex idCardItems">
            <CardOption
              image={image1}
              icon={studentRegIcon}
              title={"Students Registration"}
            />
            <CardOption
              image={image2}
              icon={clientRegIcon}
              title={"Registration of Clients"}
            />

            <CardOption
              image={image3}
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
