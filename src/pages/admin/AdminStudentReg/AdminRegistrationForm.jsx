import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import SmallAside from "../../../components/aside/SmallAside";
import Form from "../../../components/form/RegistrationForm";

import "./AdminStudentsRegistration.css";
import SmallBarLayout from "../../../components/admin/SmallBarLayout";

function AdminStudentRegistration() {
  let { title } = useParams();
  return (
    <SmallBarLayout>
      <main className="flex studentsReg">
        <div className="asr-text-section">
          <h2>Silicon Delta</h2>
          <p>INNOVATION HUB</p>

          <h4>{title}</h4>
        </div>

        <Form />
      </main>
    </SmallBarLayout>
  );
}

export default AdminStudentRegistration;
