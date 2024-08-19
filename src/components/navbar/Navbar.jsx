import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/0ff12dfae735436b1a24.png";
import { getTopNav } from "../../data/navbars";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout,selectUser } from "../../features/userSlice"; // Chỉnh lại đường dẫn tùy vào cấu trúc thư mục của bạn

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    console.log("Toggler clicked");
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // Thực hiện hành động logout
    navigate("/"); // Điều hướng về trang login sau khi logout
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <img src={logo} alt="Logo" />
          <h1>Welcome <span>{user.name}</span></h1>
          <ul className={collapse}>
            {navItems.map((item) =>
              item.label === "Logout" ? (
                <li key={item.id} className="nav__item">
                  <button
                    className="nav__link logout-button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li key={item.id} className="nav__item">
                  <Link to={item.href} className="nav__link">
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
