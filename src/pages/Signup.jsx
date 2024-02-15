import { useState } from "react";
import logo from "../assets/login-pic.png";
import sitelogo from "../assets/Silicon Delta logo2.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const coursesBySchool = {
    'School of Coding': ['MEAN Stack','MERN Stack', 'Web Fullstack Development', 'Mobile App Development', 'PHP Fullstack', 'Frontend Development', 'Backend Development', 'JavaScript Fullstack', 'Python Fullstack', 'Software engineering', 'Robotics/AI', 'Go Fullstack'],
    'School of Design': ['Graphic Design', 'Product Design', 'Motion Design', 'FlutterFlow'],
    'School of Digital Marketing': ['Marketing Automation', 'Content Writing', 'Visual Content Creation', 'Marketing Ads Campaign'],
    'Other': ['Cyber Security', 'Data Analytics', 'DevOps Engineering', 'Cloud Engineering', 'Project Mangement']
  };

  // Function to handle school selection
  const handleSchoolChange = (e) => {
    const selectedSchool = e.target.value;
    setSchool(selectedSchool);
    // Reset course selection when school changes
    setCourse('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append static data to the FormData object
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('school', school);
    formData.append('course', course);
    formData.append('image', image);

    console.log(formData.firstName)


    // // Make API call
    // try {
    //   const response = await fetch("https://api.example.com/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to login");
    //   }

    //   // Handle successful login
    //   console.log("Login successful");
    // } catch (error) {
    //   console.error("Login error:", error.message);
    // }
  };
  return (
    <>
      <header>
      <img src={sitelogo} alt="" />
        <div>
          <Link to={"/login"}>
            <button className="btn1">Sign In</button>
          </Link>
        </div>
      </header>
      <div className="login-container">
        <div>
          <div className="login-section1">
            <img src={logo} alt="" />
            <br />
          </div>
          <div className="login-section2">
            <div><br /><br />
              <h2>Hello There!</h2>
              <br />
              <p>Fill the form to create an account with us</p>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div>
        <select
          value={school}
          onChange={handleSchoolChange}
          required
        >
          <option value="">Select School</option>
          <option value="School of Coding">School of Coding</option>
          <option value="School of Design">School of Design</option>
          <option value="School of Digital Marketing">School of Digital Marketing</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          {/* Populate courses based on selected school */}
          {school && coursesBySchool[school] && coursesBySchool[school].map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
      </div>
                <div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    placeholder="Upload your image"
                    required
                  />
                </div>

                {/* <div className="checkbox-container">
              <input type="checkbox" name="" id="" />
              <span>Keep me logged in</span>
            </div> */}
                <button type="submit" className="login-btn">
                  Submit
                </button>
              </form>

              <p className="bottom-link">
                Already Have An account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
