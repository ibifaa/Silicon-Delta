import React, { useState, useEffect } from "react";
import "./form.css";

function CertificateForm() {
  const [fullName, setFullName] = useState("");
  const [stack, setStack] = useState("");
  const [duration, setDuration] = useState("");
  const [dateIssued, setDateIssued] = useState("");
  const [founderName, setFounderName] = useState("");

  // Function to handle school selection

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      stack,
      duration,
      dateIssued,
      founderName,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "/admin/certificate";

    setFullName("");
    setStack("");
    setDuration("");
    setDateIssued("");
    setFounderName("");
  };

  return (
    <>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student's full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            type="text"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            placeholder="Stack"
            required
          />

          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
            required
          />

          <input
            type="text"
            value={dateIssued}
            onChange={(e) => setDateIssued(e.target.value)}
            placeholder="Phone number"
            required
          />

          <input
            type="text"
            value={founderName}
            onChange={(e) => setFounderName(e.target.value)}
            placeholder="Founder's Name"
            required
          />

          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </>
  );
}
export default CertificateForm;
