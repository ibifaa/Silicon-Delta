import React from "react";
import "./AdminCoworkSpace.css";
import Navbar from "../../../components/navbar/Navbar";
import SmallAside from "../../../components/aside/SmallAside";
import Form from "../../../components/form/Form";

function AdminCoworkSpace() {
  return (
    <div className="asr-navbar">
      <Navbar />

      <div className="asr-content flex">
        <SmallAside />

        <main className="flex studentsReg">
          <div className="asr-text-section">
            <h2>Silicon Delta</h2>
            <p>INNOVATION HUB</p>

            <h4>Cowork Space Registration</h4>
          </div>

          <Form />
        </main>
      </div>
    </div>
  );
}

export default AdminCoworkSpace;
