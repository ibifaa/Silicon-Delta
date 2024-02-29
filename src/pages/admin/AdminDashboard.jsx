import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import calanderPic from "../../assets/calander-icon.png";
import "react-calendar/dist/Calendar.css";

import diversityPic from "../../assets/Diversity.png";
import workspacePic from "../../assets/Workspace.png";
import smsPic from "../../assets/Sms.png";
import emailPic from "../../assets/Email.png";

import { useState } from "react";
import Calendar from "react-calendar";

const AdminDashboard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <AdminLayout>
        <div>
          <h1>Hello ImaChrist Davies!</h1>
          <p>Have a nice day at work and stay health</p>
          <br />
          <p>21/02/2024</p>
        </div>
        <br />
        <br />
        <div className="panel-sections">
          <div className="panel-section1">
            <div className="panel-card">
              <h2>Upcoming Event</h2>
              <br />

              <div className="event-card">
                <img src={calanderPic} alt="" />
                <span>
                  16/03/2024 - Bits and Banter (Involving everyone even outside)
                </span>
              </div>

              <div className="event-card">
                <img src={calanderPic} alt="" />
                <span>
                  16/03/2024 - Bits and Banter (Involving everyone even outside)
                </span>
              </div>

              <div className="event-card">
                <img src={calanderPic} alt="" />
                <span>
                  16/03/2024 - Bits and Banter (Involving everyone even outside)
                </span>
              </div>
            </div>

            <div className="overview-cards">
              <div className="panel-card">
                <h3>
                  <img src={workspacePic} alt="" /> Bookings
                </h3>
                <br />

                <p>Returned clients-30%</p>
                <p>Satisfied clients-80%</p>
                <p>Complaints-10%</p>
              </div>

              <div className="panel-card">
                <h3>
                  <img src={diversityPic} alt="" /> Community
                </h3>
                <br />
                <p>Total Members : 100</p>
                <p>Active Members: 39</p>
                <p>Community growth: 10% from last month </p>
              </div>

              <div className="panel-card">
                <h3>
                  <img src={smsPic} alt="" /> SMS Management
                </h3>
                <br />
                <p>Students: 20 sms sent</p>
                <p>Clients: 10 sms sent</p>
                <p>Interns: 10 sms sent</p>
              </div>

              <div className="panel-card">
                <h3>
                  <img src={emailPic} alt="" /> Email Management
                </h3>
                <br />
                <p>Total sent -30</p>
                <p>Employees-10</p>
                <p>Interns-10</p>
                <p>Trainees -10</p>
              </div>
            </div>
            <br />
          </div>
          <div className="panel-section2">
            <div className="panel-card">
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="panel-card">
              <h2>Announcements</h2>
              <br />
              <p>
                <span className="red-dot"></span> Virtual meeting tomorrow by
                3pm
              </p>
              <p>
                <span className="red-dot"></span> Orientation for interns on
                28/03/2024
              </p>
              <p>
                <span className="red-dot"></span> Social event on 15/03/2024
              </p>
              <p>
                <span className="red-dot"></span> Update on the communities
                forum
              </p>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
