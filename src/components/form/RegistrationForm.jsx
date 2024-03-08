import React, { useState } from "react";
import "./form.css";
import SmallBarLayout from "../admin/SmallBarLayout";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");

  const coursesBySchool = {
    "School of Coding": [
      "MEAN Stack",
      "MERN Stack",
      "Web Fullstack Development",
      "Mobile App Development",
      "PHP Fullstack",
      "Frontend Development",
      "Backend Development",
      "JavaScript Fullstack",
      "Python Fullstack",
      "Software engineering",
      "Robotics/AI",
      "Go Fullstack",
    ],
    "School of Design": [
      "Graphic Design",
      "Product Design",
      "Motion Design",
      "FlutterFlow",
    ],
    "School of Digital Marketing": [
      "Marketing Automation",
      "Content Writing",
      "Visual Content Creation",
      "Marketing Ads Campaign",
    ],
    Other: [
      "Cyber Security",
      "Data Analytics",
      "DevOps Engineering",
      "Cloud Engineering",
      "Project Mangement",
    ],
  };

  // Function to handle school selection
  const handleSchoolChange = (e) => {
    const selectedSchool = e.target.value;
    setSchool(selectedSchool);
    // Reset course selection when school changes
    setCourse("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            required
          />

          <select value={school} onChange={handleSchoolChange} required>
            <option value="">Select School</option>
            <option value="School of Coding">School of Coding</option>
            <option value="School of Design">School of Design</option>
            <option value="School of Digital Marketing">
              School of Digital Marketing
            </option>
            <option value="Other">Other</option>
          </select>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            {/* Populate courses based on selected school */}
            {school &&
              coursesBySchool[school] &&
              coursesBySchool[school].map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
          </select>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </>
  );
}

export default Form;
