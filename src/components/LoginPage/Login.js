// LoginPage.js
import React, { useState } from "react";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
      name:username,
      password:password,
      loggedIn: true,
      })
    );
  };

  return (
    <div className="wrapper">
      <form className="form-group custom-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <div className="input-box">
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="name" required placeholder="Username" />
        </div>

        <div className="input-box">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
