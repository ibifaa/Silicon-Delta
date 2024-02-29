import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import SmallAside from "../../../components/aside/SmallAside";
import Form from "../../../components/form/Form";

import "./AdminStudentsRegistration.css";

function AdminStudentRegistration() {
  return (
    <div>
      <div className="asr-navbar">
        <Navbar />
      </div>

      <div className="asr-content flex">
        <SmallAside />

        <main className="flex studentsReg">
          <div className="asr-text-section">
            <h2>Silicon Delta</h2>
            <p>INNOVATION HUB</p>

            <h4>Students Registration</h4>
          </div>

          <Form />
        </main>
      </div>
    </div>
  );
}

export default AdminStudentRegistration;
