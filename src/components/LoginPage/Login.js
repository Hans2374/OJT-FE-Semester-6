// LoginPage.js
import React, { useState } from "react";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [roles, setRoles] = useState([]);
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
      if (!roles.includes(e.target.value)) {
        setRoles([...roles, e.target.value]);
      }
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
        <h1>Login</h1>
        <div className="input-box">
          <input
            autocomplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="name"
            required
            placeholder="Username"
          />
        </div>

        <div className="input-box">
          <input
            autocomplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
          />
        </div>

        <div>
          <div className="change-role">Choose user roles:</div>
          <ul>
            {checkBoxInputs.map((role, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={role.value}
                  name="roles"
                  value={role.value}
                  checked={role.value === checkedvalue}
                  onChange={handleCheckboxChange}         
                />
                <label htmlFor={role.value} className="text-sm ml-1">
                  {role.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
