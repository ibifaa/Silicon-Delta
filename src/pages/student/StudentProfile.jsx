import React from "react";
import StudentLayout from "../../components/student/StudentLayout";
import profilePic from "../../assets/default-profile.png";
import { FaAngleRight, FaCaretRight, FaUser } from "react-icons/fa";

const StudentProfile = () => {
  return (
    <StudentLayout>
      <div>
        <h3>Student Profile</h3>
        <br />

        <div className="student-profile-page">
          <div className="profile-card">
            <div>
              <img
                src={profilePic}
                alt="Default profile"
                className="profile-pic"
              />
            </div>
            <div>
              <h2>Stephanie Michael</h2>
              <p>Stephmichael@gmail.com</p>
            </div>
          </div><br /><br />

          <div>
            <div className="card">
              <div>
                <FaUser />
                <b>Profile settings</b>
              </div>
              <div>
                <FaAngleRight />{" "}
              </div>
            </div>
            <div className="card">
              <div>
                <FaUser />
                <b>Security settings</b>
              </div>
              <div>
                <FaAngleRight />{" "}
              </div>
            </div>
            <div className="card">
              <div>
                <FaUser />
                <b>Payment method</b>
              </div>
              <div>
                <FaAngleRight />{" "}
              </div>
            </div>
            <div className="card">
              <div>
                <FaUser />
                <b>Logout</b>
              </div>
              <div>
                <FaAngleRight />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentProfile;
