import React, { useState } from "react";
import { Link } from "react-router-dom";

import firstImage from "../../../assets/AdminRegImg/image10.png";
import firstImageBg from "../../../assets/AdminRegImg/image10bg.jpg";

import computer from "../../../assets/AdminRegImg/image9.png";
import computerBg from "../../../assets/AdminRegImg/image9bg.png";

import CardOption from "../../../components/card/CardOption";

import NewAdminLayout from "../../../components/admin/NewAdminLayout";
import "./AdminExamAndCert.css";

function AdminExamAndCert() {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardClick = (title) => {
    setSelectedTitle(title);
  };

  const cardOptions = [
    {
      icon: "",
      title: "Examination",
      image: window.innerWidth <= 600 ? firstImage : firstImageBg,
    },
    {
      icon: "",
      title: "Certification Issuance",
      image: window.innerWidth <= 600 ? computer : computerBg,
    },
  ];

  return (
    <NewAdminLayout>
      <h3 className="Title">Course Update</h3>
      <div className="aecItems flex">
        {cardOptions.map((item, index) => (
          <Link
            key={index}
            to={`/admin/certificate-issuance/${encodeURIComponent(item.title)}`}
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

export default AdminExamAndCert;
