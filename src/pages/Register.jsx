import React, { useState } from "react";
import logo from "../assets/AdminRegImg/logo.svg";

function Register() {
  const [school, setSchool] = useState("");
  const [courses, setCourse] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    dob: "",
    email: "",
    gender: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSchoolChange = (e) => {
    const selectedSchool = e.target.value;
    setSchool(selectedSchool);
    // Reset course selection when school changes
    setCourse("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  //   api call:
  // try {
  //     const response = await fetch(
  //       "https://sd-backend-jihz.onrender.com/api/auth/login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       }
  //     );

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error("Failed to login");
  //     }

  //     console.log(data);
  //     if (data.role === "admin") {
  //       navigate("/admin/dashboard");
  //     }

  //     // Handle successful login
  //     console.log("Login successful");
  //   } catch (error) {
  //     console.error("Login error:", error.message);
  //   }
  // };

  const progress = (step / 3) * 100;

  return (
    <div className="registration-form">
      <div className="image-section">
        <img src={logo} alt="" />
      </div>

      <div className="form-section">
        <div className="mobileImage">
          <img src={logo} alt="" />
        </div>
        <p>Student Course Registration - Step {step}</p>
        <div className="progressbar">
          <div className={`step step${step}`} style={{ width: `${progress}%` }}>
            Step {step}
          </div>
        </div>
        {step === 1 && (
          <form onSubmit={nextStep}>
            <div>
              <label className="label">
                First Name:
                <input
                  type="text"
                  id="input1"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label htmlFor="middleName">Middle Name:</label>
              <br />
              <input
                type="text"
                id="input2"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name:</label>
              <br id="input3" name="lastName" value={formData.lastName} />
              <input type="text" onChange={handleChange} />
            </div>
            <button className="next" type="submit">
              Next
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={nextStep}>
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <br />
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="gender">Gender:</label>
              <br />
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Student Email</label>
              <br />
              <input
                type="text"
                id="input4"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <button className="submitX" type="submit">
              Next
            </button>

            <button type="button" className="next" onClick={prevStep}>
              Previous
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={nextStep}>
            <div>
              <label htmlFor="input5">Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <select
              className="selectX"
              value={school}
              onChange={handleSchoolChange}
              required
            >
              <option value="">Select School</option>
              <option value="School of Coding">School of Coding</option>
              <option value="School of Design">School of Design</option>
              <option value="School of Digital Marketing">
                School of Digital Marketing
              </option>
              <option value="Other">Other</option>
            </select>
            <select
              className="selectX"
              value={courses}
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
            </select>{" "}
            <br />
            <button type="button" className="next" onClick={prevStep}>
              Previous
            </button>
            <button className="submitX" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
