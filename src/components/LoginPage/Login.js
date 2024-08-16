// LoginPage.js
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <form className="form-group custom-form">
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" required placeholder="Username or Email" />
        </div>

        <div className="input-box">
          <input type="password" required placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-success btn-md">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
