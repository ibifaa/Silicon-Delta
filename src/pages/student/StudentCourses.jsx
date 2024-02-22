import React, { useState } from "react";
import StudentLayout from "../../components/student/StudentLayout";
import coursePic from "../../assets/Silicon Delta 2.png";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0); // Defaulting to the first tab

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={index === activeTab ? "active tab-button" : "tab-button"}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div className="tab">{children}</div>;
};

const StudentCourses = () => {
  return (
    <StudentLayout>
      <div className="courses-page">
        <h2>Your Courses</h2>
        <br />

        <Tabs>
          <Tab label="All">
            <div className="student-course-page">
              <div className="panel-card">
                <div className="course-pic">
                  <img src={coursePic} />
                </div>
                <div>
                  <h2>Mobile App Design</h2>Joshua
                  Greene
                </div>
              </div>
              <div className="panel-card">
                <div className="course-pic">
                  <img src={coursePic} />
                </div>
                <div>
                  <h2>School Of Coding</h2>Joshua
                  Greene
                </div>
              </div>
              <div className="panel-card">
                <div className="course-pic">
                  <img src={coursePic} />
                </div>
                <div>
                  <h2>School Of Digital Marketing</h2>Joshua
                  Greene
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Complete">
          <div className="student-course-page">
              <div className="panel-card">
                <div className="course-pic">
                  <img src={coursePic} />
                </div>
                <div>
                  <h2>Mobile App Design</h2>Joshua
                  Greene
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Favourite">
          <div className="student-course-page">
              <div className="panel-card">
                <div className="course-pic">
                  <img src={coursePic} />
                </div>
                <div>
                  <h2>School Of Digital Marketing</h2>Joshua
                  Greene
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </StudentLayout>
  );
};

export default StudentCourses;
