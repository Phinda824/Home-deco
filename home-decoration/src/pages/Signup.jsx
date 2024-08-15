import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className="login_container">
      <div className="login_section">
        <h1>Signup</h1>
        <div className="line">
          <p></p>
        </div>

        <form className="login_form">
            <div className="form_sect">
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
             </div>

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

          <div className="form_sect">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button type="submit" className="login_btn">Create an Account</button>

          <p>
            Already have an account? <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
