import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const Logout = () =>{

  const dispacth = useDispatch();
  
  const handleLogout = (e) =>{
    e.preventDefault();


    dispacth(logout());
  };

  return(
  <button onClick={(e) => handleLogout(e)}>
    Logout
  </button>
  );
};

export default Logout;