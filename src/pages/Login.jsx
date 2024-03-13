import { useState } from "react";
import logo from "../assets/AdminRegImg/loginImg.png";
import sitelogo from "../assets/Silicon Delta logo2.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API call
    try {
      const response = await fetch(
        "https://sd-backend-jihz.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      console.log(data);
      if (data.role === "admin") {
        navigate("/admin/dashboard");
      }

      // Handle successful login
      console.log("Login successful");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };
  return (
    <>
      <div className="">
        <div>
          <div className="login-section1">
            <img src={logo} alt="" />
            <br />
          </div>

          <div className="">
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <h2>Welcome</h2>
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
                <div className="check">
                  <button className="remember" htmlFor="checkbox">
                    <input type="checkbox" /> Remember me
                  </button>
                </div>

                <button type="submit" className="login-btn">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
