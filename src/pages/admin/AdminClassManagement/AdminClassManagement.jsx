import React, { useState } from "react";
import { Link } from "react-router-dom";

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

import CardOption from "../../../components/card/CardOption";
import NewAdminLayout from "../../../components/admin/NewAdminLayout";

function AdminClassManagement() {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardClick = (title) => {
    setSelectedTitle(title);
  };

  const cardOptions = [
    {
      icon: "",
      title: "School of Coding",
      image: window.innerWidth <= 600 ? image1 : image1Bg,
    },
    {
      icon: "",
      title: "School of Design",
      image: window.innerWidth <= 600 ? image2 : image2Bg,
    },
    {
      icon: "",
      title: "School of Digital Marketing",
      image: window.innerWidth <= 600 ? image3 : image3Bg,
    },
    {
      icon: "",
      title: "Attendance",
      image: window.innerWidth <= 600 ? image4 : image4Bg,
    },
  ];

  return (
    <NewAdminLayout>
      <h3 className="acmTitle">Class Management</h3>
      <div className="acmCardItems flex">
        {cardOptions.map((item, index) => (
          <Link
            key={index}
            to={
              index <= 2
                ? `/admin/class-management/${encodeURIComponent(item.title)}`
                : index === 3
                ? `/admin/class-attendance/${encodeURIComponent(item.title)}`
                : ""
            }
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

export default AdminClassManagement;
