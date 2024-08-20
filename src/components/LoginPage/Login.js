// LoginPage.js
import React, { useState } from "react";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const dispatch = useDispatch();

  const checkBoxInputs = [
    {
      id: 1,
      label: "Admin",
      value: "admin"
    },
    {
      id: 2,
      label: "Intern",
      value: "intern"
    }
  ];

  const [checkedvalue, setCheckedValue] = useState();

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckedValue(e.target.value);
      setRoles(e.target.value); // Update roles with the checked value
    } else {
      setCheckedValue(null); // Reset checkedValue when unchecked
      setRoles(""); // Clear roles when unchecked
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
      name:username,
      password:password,
      role: roles,
      loggedIn: true,
      })
    );
  };

  return (

    <div className="wrapper">
      <form
        className="form-group custom-form"
        onSubmit={(e) => handleSubmit(e)}
      >
      <h1 className="underline">Sign In</h1>
      <div className="checkbox-group">
      {checkBoxInputs.map((role, index) => (
        <div className="checkbox" key={index}>
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              className="checkbox-input"
              id={role.value}
              name="roles"
              value={role.value}
              checked={role.value === checkedvalue}
              onChange={handleCheckboxChange}
            />
            <span className="checkbox-tile">
              <span className="checkbox-icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="192"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none" />
                  <circle
                    cx="162"
                    cy="128"
                    r="34"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M128,94V26.00089H94a34,34,0,0,0,0,68Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M128,161.99911V94H94a34,34,0,0,0,0,68Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M128,94V26.00089h34a34,34,0,0,1,0,68Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                </svg>
              </span>
              <span className="checkbox-label">{role.label}</span>
            </span>
          </label>
        </div>
      ))}
      </div>

      
      <label>USERNAME</label>
      <div className="input-container">
        <input
          autocomplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="name"
          required
          placeholder="Username"
        />
      </div>

      <label>PASSWORD</label>
      <div className="input-container">
        <input
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
      </form>
    </div>

  );
};

export default Login;
