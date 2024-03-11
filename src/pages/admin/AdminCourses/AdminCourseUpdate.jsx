import React, { useState } from "react";
import { Link } from "react-router-dom";

import firstImage from "../../../assets/AdminRegImg/image10.png";
import firstImageBg from "../../../assets/AdminRegImg/image10bg.jpg";

import computer from "../../../assets/AdminRegImg/image9.png";
import computerBg from "../../../assets/AdminRegImg/image9bg.png";

import "./AdminCourseUpdate.css";
import CardOption from "../../../components/card/CardOption";
import NewAdminLayout from "../../../components/admin/NewAdminLayout";

function AdminCourseUpdate() {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardClick = (title) => {
    setSelectedTitle(title);
  };

  const cardOptions = [
    {
      icon: "",
      title: "School of Design",
      image: window.innerWidth <= 600 ? firstImage : firstImageBg,
    },
    {
      icon: "",
      title: "School of Coding",
      image: window.innerWidth <= 600 ? computer : computerBg,
    },
    {
      icon: "",
      title: "School of Marketing",
      image: window.innerWidth <= 600 ? firstImage : firstImageBg,
    },
  ];

  return (
    <NewAdminLayout>
      <h3 className="courseTitle">Course Update</h3>
      <div className="courseItems flex">
        {cardOptions.map((item, index) => (
          <Link
            key={index}
            to={`/admin/course-update-table/${encodeURIComponent(item.title)}`}
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
    </NewAdminLayout>
  );
}

export default AdminCourseUpdate;
