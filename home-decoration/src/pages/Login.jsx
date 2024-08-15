import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login_container">
      <div className="login_section">
        <h1>Login</h1>
        <div className="line">
          <p></p>
        </div>

        <form className="login_form">
          <div className="form_sect">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_sect">
            <input
              type="email"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login_btn">Login</button>

          <p>
            Don't have an account? <Link to="/signup"> Create an Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
