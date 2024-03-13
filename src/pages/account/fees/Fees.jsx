import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../../components/navbar/Navbar";
import Aside from "../../../components/aside/Aside";

import image1 from "../../../assets/AdminRegImg/image3.png";
import image1Bg from "../../../assets/AdminRegImg/tuition.png";

import image2 from "../../../assets/AdminRegImg/image4.png";
import image2Bg from "../../../assets/AdminRegImg/cowork.png";

import image3 from "../../../assets/AdminRegImg/image5.png";
import image3Bg from "../../../assets/AdminRegImg/event.png";

import clientRegIcon from "../../../assets/AdminRegImg/Vector.svg";
import studentRegIcon from "../../../assets/AdminRegImg/studentReg.svg";
import adminRegIcon from "../../../assets/AdminRegImg/Client.svg";

import CardOption from "../../../components/card/CardOption";
import NewAdminLayout from "../../../components/admin/NewAdminLayout";

function Fees() {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardClick = (title) => {
    setSelectedTitle(title);
  };

  const cardOptions = [
    {
      icon: studentRegIcon,
      title: "Tuition",
      image: window.innerWidth <= 600 ? image1 : image1Bg,
    },
    {
      icon: clientRegIcon,
      title: "Co-work space",
      image: window.innerWidth <= 600 ? image2 : image2Bg,
    },
    {
      icon: adminRegIcon,
      title: "Events",
      image: window.innerWidth <= 600 ? image3 : image3Bg,
    },
  ];

  return (
    <div>
      <h3 className="idReg">Fees Management</h3>
      <div className="idCardItems flex">
        {cardOptions.map((item, index) => (
          <Link
            key={index}
            to={`/account/fees/${encodeURIComponent(item.title)}`}
            className=""
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
    </div>
  );
}

export default Fees;
