import React, { useState, useEffect } from "react";
import NewAdminLayout from "../../../components/admin/NewAdminLayout";
import calanderPic from "../../../assets/calander-icon.png";
import "react-calendar/dist/Calendar.css";

import diversityPic from "../../../assets/Diversity.png";
import workspacePic from "../../../assets/Workspace.png";
import smsPic from "../../../assets/Sms.png";
import emailPic from "../../../assets/Email.png";

import newStudentPic from "../../../assets/Student Registration.png";
import leasePic from "../../../assets/Lease.png";
import staffPic from "../../../assets/Woman Profile.png";
import clientPic from "../../../assets/Client Management.png";
import coursePic from "../../../assets/image 5.png";
import "./AdminDashboard.css";
import Chart from "../../../components/admin/charts/Chart";

import AdminCalender from "../../../components/admin/calendar/AdminCalender";
import UserCard1 from "../../../components/admin/user/UserCard1";
import UserCard2 from "../../../components/admin/user/UserCard2";
import UserCard3 from "../../../components/admin/user/UserCard3";
import UserCard4 from "../../../components/admin/user/UserCard4";
import { AppProvider } from "../../../AppContext";

const AdminDashboard = () => {
  const [value, onChange] = useState(new Date());
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isDivVisible, setIsDivVisible] = useState(true);

  window.toggleDashboardDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardChange = (cardNumber) => {
    setSelectedCard(selectedCard === 4 ? 1 : selectedCard + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderCardComponent = () => {
    switch (selectedCard) {
      case 1:
        return <UserCard1 onClick={() => handleCardChange(2)} />;
      case 2:
        return <UserCard4 onClick={() => handleCardChange(3)} />;
      case 3:
        return <UserCard2 onClick={() => handleCardChange(4)} />;
      case 4:
        return <UserCard3 />;
      default:
        return <UserCard1 />;
    }
  };

  return (
    <AppProvider>
      <NewAdminLayout>
        <div className="dashMain">
          <div className="userDetails">
            <div className="userInfo">
              <h2>Hello Cynthia Damian-Ekom!</h2>
              <p>Have a nice day at work and stay health</p>
              <p>21/02/2024</p>
              <p>Here is a summary of your data</p>
            </div>
            <div className="user-summary">
              {isDivVisible && renderCardComponent()}
            </div>
          </div>

          <div className="info-section ">
            <div className="sub-section">
              <div className="card">
                <h3>Registration</h3>
                <div className="flex">
                  <img src={newStudentPic} alt="" />
                  <p>New students registration</p>
                </div>

                <div className="flex">
                  <img src={leasePic} alt="" />
                  <span>Lease Registration</span>
                </div>
              </div>

              <div className="card">
                <h3>ID Issuance</h3>
                <div className="flex">
                  <img src={newStudentPic} alt="" />
                  <span>Students ID</span>
                </div>
                <div className="flex">
                  <img src={staffPic} alt="" />
                  <span>Staff ID</span>
                </div>
                <div className="flex">
                  <img src={clientPic} alt="" />
                  <span>Client ID</span>
                </div>
              </div>

              <div className="card">
                <div className="flex">
                  <img src={coursePic} alt="" />
                  <h3>Course update and price</h3>
                </div>

                <div className="flex">
                  <p>Software development</p>
                  <p>#350</p>
                </div>
                <div className="flex">
                  <p>UI/UX design</p>
                  <p>#300</p>
                </div>
                <div className="flex">
                  <p>Graphic Design</p>
                  <p>#300</p>
                </div>
              </div>

              <div className="card">
                <div className="flex">
                  <img src={diversityPic} alt="" />
                  <h3>Examination & Certification</h3>
                </div>
                <p>Collation of results</p>
                <p>School of coding-10 students</p>
                <p>School of designs-15 students </p>
                <p>School of marketing- 10 students</p>
              </div>

              <div className="card">
                <div className="flex">
                  <img src={emailPic} alt="" />
                  <h3>Library management</h3>
                </div>
                <p>Library ID card registration</p>
              </div>

              <div className="card">
                <div className="flex">
                  <img src={smsPic} alt="" />
                  <h3>Class/Attendance management</h3>
                </div>
                <p>Colation of student Biodata</p>
                <p>Attendance sheet</p>
              </div>
            </div>

            <div className="diagram-section">
              <div className="calender">
                <AdminCalender />
              </div>

              <div>
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </NewAdminLayout>
    </AppProvider>
  );
};

export default AdminDashboard;
