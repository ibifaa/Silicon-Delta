import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import calanderPic from "../../assets/calander-icon.png";
import "react-calendar/dist/Calendar.css";

import diversityPic from "../../assets/Diversity.png";
import workspacePic from "../../assets/Workspace.png";
import smsPic from "../../assets/Sms.png";
import emailPic from "../../assets/Email.png";

import newStudentPic from "../../assets/Student Registration.png";
import leasePic from "../../assets/Lease.png"; 
import staffPic from "../../assets/Woman Profile.png";
import clientPic from "../../assets/Client Management.png";
import coursePic from "../../assets/image 5.png"; 



import { useState } from 'react';
import Calendar from 'react-calendar';

const AdminDashboard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <AdminLayout>
        <div>
          <h1>Hello Cynthia Damian-Ekom!</h1>
          <p>Have a nice day at work and stay health</p>
          <br />
          <p>21/02/2024</p>
          <p>Here is a summary of your data</p>
        </div>
        <br />
        <br />
       <div className="panel-sections">
       <div className="panel-section1">
  
        <div className="overview-cards">
        <div className="panel-card">
            <h3>
             Registration
            </h3><br />

            <p className="flex"><img src={newStudentPic} alt="" /><span>New students registration</span></p>
            <p className="flex"><img src={leasePic} alt="" /><span>Lease Registration</span></p>
          </div>

          <div className="panel-card">
            <h3>ID Issuance</h3><br />
            <p className="flex"><img src={newStudentPic} alt="" /><span>Students ID</span></p>
            <p className="flex"><img src={staffPic} alt="" /><span>Staff ID</span></p>
            <p className="flex"><img src={clientPic} alt="" /><span>Client ID</span></p>
          </div>
          <div className="panel-card">
            <h3>
            <img src={coursePic} alt="" /> Course update and price
            </h3><br />

            <p><span>Software development</span></p>
            <p><span>UI/UX design</span></p>
            <p><span>Graphic Design</span></p>
          </div>

          <div className="panel-card">
            <h3><img src={diversityPic} alt="" /> Examination & Certification</h3><br />
            <p>Collation of results</p>
            <p>School of coding-10 students</p>
            <p>School of designs-15 students </p>
            <p>School of marketing- 10 students</p>
          </div>

          <div className="panel-card">
            <h3><img src={smsPic} alt="" /> Class/Attendance management</h3><br />
            <p>Colation of student Biodata</p>
            <p>Attendance sheet</p>
          </div>

          <div className="panel-card">
            <h3><img src={emailPic} alt="" /> Library management</h3><br />
            <p>Library ID card registration</p>
          </div>
        </div><br />

        
        </div>
        <div className="panel-section2">
        <div className="panel-card">
      <Calendar onChange={onChange} value={value} className="custom-calendar" calendarClassName="custom-calendar"/>
    </div>

        </div>
       </div>
       <br /><br />
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
