import React, { useState } from "react";
import { Link } from "react-router-dom";

import firstImage from "../../../assets/AdminRegImg/image10.png";
import firstImageBg from "../../../assets/AdminRegImg/image10bg.jpg";

import computer from "../../../assets/AdminRegImg/image9.png";
import computerBg from "../../../assets/AdminRegImg/image9bg.png";

import studentRegIcon from "../../../assets/AdminRegImg/studentReg.svg";
import clientRegIcon from "../../../assets/AdminRegImg/Vector.svg";

import "./AdminRegistration.css";
import CardOption from "../../../components/card/CardOption";
import NewAdminLayout from "../../../components/admin/NewAdminLayout";

function AdminRegistration() {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardClick = (title) => {
    setSelectedTitle(title);
  };

  const cardOptions = [
    {
      icon: studentRegIcon,
      title: "Staff Registration",
      image: window.innerWidth <= 600 ? firstImage : firstImageBg,
    },
    {
      icon: clientRegIcon,
      title: "Intern Registration",
      image: window.innerWidth <= 600 ? computer : computerBg,
    },
    {
      icon: studentRegIcon,
      title: "Students Registration",
      image: window.innerWidth <= 600 ? firstImage : firstImageBg,
    },
    {
      icon: clientRegIcon,
      title: " Clients Registration",
      image: window.innerWidth <= 600 ? computer : computerBg,
    },
  ];

  return (
    <NewAdminLayout>
      <h3 className="regTitle">Registration</h3>
      <div className="regCardItems">
        {cardOptions.map((item, index) => (
          <Link
            key={index}
            to={`/admin/registration-form/${encodeURIComponent(item.title)}`}
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

export default AdminRegistration;
