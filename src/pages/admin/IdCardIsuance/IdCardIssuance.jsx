import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import NewAdminLayout from "../../../components/admin/NewAdminLayout";

function IdCardIssuance() {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardClick = (title) => {
    setSelectedTitle(title);
  };

  const cardOptions = [
    {
      icon: studentRegIcon,
      title: "Student ID",
      image: window.innerWidth <= 600 ? image1 : image1Bg,
    },
    {
      icon: clientRegIcon,
      title: "Staff ID",
      image: window.innerWidth <= 600 ? image2 : image2Bg,
    },
    {
      icon: adminRegIcon,
      title: "Client ID",
      image: window.innerWidth <= 600 ? image3 : image3Bg,
    },
  ];

  return (
    <NewAdminLayout>
      <h3 className="idReg">ID Card Issuance</h3>
      <div className="idCardItems flex">
        {cardOptions.map((item, index) => (
          <Link
            key={index}
            to={`/admin/card-issuance/${encodeURIComponent(item.title)}`}
            className="card"
            onClick={() => handleCardClick(item.title)}
          >
            <CardOption
              icon={item.icon}
              image={item.image}
              title={item.title}
            />
          </Link>
        ))}
      </div>
    </NewAdminLayout>
  );
}

export default IdCardIssuance;
