import { useState } from "react";
import logo from "../assets/login-pic.png";
import sitelogo from "../assets/Silicon Delta logo2.png";
import { Link } from "react-router-dom";

const Login = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API call
    try {
      const response = await fetch('https://api.example.com/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      // Handle successful login
      console.log('Login successful');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };
  return (
   <>
    <header>
      <img src={sitelogo} alt="" />
      <div>
        <Link to={'/signup'}><button className="btn1">Register</button></Link>
      </div>
    </header>
    <div className="login-container">
      <div>
        <div className="login-section1">
          <img src={logo} alt="" /><br />
        </div>
        <div className="login-section2">
          <div>
          <h2>Welcome Back!</h2><br />
          <p>Good to have you back</p><br />
          <form onSubmit={handleSubmit}>
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

            {/* <div className="checkbox-container">
              <input type="checkbox" name="" id="" />
              <span>Keep me logged in</span>
            </div> */}
            <button type="submit" className="login-btn">Sign in</button>
          </form>

          <p className="bottom-link">Don't Have An account? <Link to="/signup">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
