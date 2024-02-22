import React from "react";
import StudentLayout from "../../components/student/StudentLayout";
import attendancePic from "../../assets/Attendance.png";
import coursesPic from "../../assets/School.png";
import testPic from "../../assets/Test Results.png";
import settingsPic from "../../assets/Settings.png";
import studentPic from "../../assets/studentpic1.png";
import ProgressBar from "../../components/ProgressBar";

const StudentDashboard = () => {
  return (
    <StudentLayout>
      <div className="dashboard-page">
        <div className="dashboard-panel-card panel-card">
          <div>
            <h1>Welcome, student</h1>
          </div>
          <div>
            <img src={studentPic} alt="Student img" />
          </div>
        </div><br /><br />

        {/* <div className="dashboard-overview">
        <div className="panel-card ml">
          <center>
            <div>
              <div>
                <img src={attendancePic} alt="" className="icon" />
              </div>
              <p>Attendance</p>
            </div>
          </center>
        </div>
        <div className="panel-card ml">
          <center>
            <div>
              <div>
                <img src={coursesPic} alt="" className="icon" />
              </div>
              <p>Courses</p>
            </div>
          </center>
        </div>
        <div className="panel-card">
          <center>
            <div>
              <div>
                <img src={testPic} alt="" className="icon" />
              </div>
              <p>Assignment</p>
            </div>
          </center>
        </div>

        <div className="panel-card ml">
          <center>
            <div>
              <div>
                <img src={testPic} alt="" className="icon" />
              </div>
              <p>Results</p>
            </div>
          </center>
        </div>
        <div className="panel-card ml">
          <center>
            <div>
              <div>
                <img src={settingsPic} alt="" className="icon" />
              </div>
              <p>Settings</p>
            </div>
          </center>
        </div>
      </div> */}

        <div className="dashboard-panels">
          <div className="dashboard-panel">
            <h2>My Current Course</h2><br />
            <div className="card">
              <div><div className="course-pic">
                <img src={coursesPic} />
              </div>
              <div>
                <p><b>Foundations of User Experience </b></p>
                <ProgressBar targetProgress={80} />
              </div></div>
              <div>
                <button>View Course</button>
              </div>
            </div>
            <div className="card">
              <div><div className="course-pic">
                <img src={coursesPic} />
              </div>
              <div>
              <p><b>Foundations of User Experience </b></p>
                <ProgressBar targetProgress={80} />
              </div></div>
              <div>
                <button>View Course</button>
              </div>
            </div>
          </div>

          <div className="dashboard-panel">
            <h2>My Assignments</h2><br />
            <div className="card">
              <div><div className="course-pic">
                <img src={coursesPic} />
              </div>
              <div>
                <p><b>Design Priciples</b></p>
                <ProgressBar targetProgress={80} />
              </div></div>
              <div>
                <button>View</button>
              </div>
            </div>
            <div className="card">
              <div><div className="course-pic">
                <img src={coursesPic} />
              </div>
              <div>
                <p><b>Design Priciples</b></p>
                <ProgressBar targetProgress={80} />
              </div></div>
              <div>
                <button>View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
