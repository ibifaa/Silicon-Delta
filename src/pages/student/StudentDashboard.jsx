import React from "react";
import StudentLayout from "../../components/student/StudentLayout";
import attendancePic from "../../assets/Attendance.png";
import coursesPic from "../../assets/School.png";
import testPic from "../../assets/Test Results.png";
import settingsPic from "../../assets/Settings.png";

const StudentDashboard = () => {
  return (
    <StudentLayout>
      <div>
        <h3>Welcome, Student</h3><br />
      </div>
      <div className="dashboard-overview">
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
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
