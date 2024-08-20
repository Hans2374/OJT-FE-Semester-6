import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook for routing

  const checkBoxInputs = [
    { id: 1, label: "Admin", value: "admin" },
    { id: 2, label: "Intern", value: "intern" }
  ];

  const [checkedValue, setCheckedValue] = useState();

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckedValue(e.target.value);
      setRoles(e.target.value);
    } else {
      setCheckedValue(null);
      setRoles("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ name: username, password, role: roles, loggedIn: true }));

    // Redirect based on role
    if (roles === "admin") {
      navigate("/admin-home"); // Route to AdminHomePage
    } else if (roles === "intern") {
      navigate("/home"); // Route to HomePage
    }
  };

  return (
    <div className="wrapper">
      <form className="form-group custom-form" onSubmit={handleSubmit}>
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
                  checked={role.value === checkedValue}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-tile">
                  <span className="checkbox-icon">
                    {/* SVG Icon */}
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
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
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
