import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import './Navbar.css'

const MenuSessionUser = () => {

  const {setUser, setSession} = useContext(UserContext)
  const navigate = useNavigate()

  function logout () {
    window.localStorage.removeItem("session");
    setSession(false);
    window.localStorage.removeItem("user");
    setUser({});
    navigate("/home")
  }

  return (
    <>
      <li>
        <NavLink to="/profile" className="dropdown-item" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          My profile
        </NavLink>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <NavLink to="" className="dropdown-item" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })} onClick={() => (logout())}>
          Log Out
        </NavLink>
      </li>
    </>
  );
};

export default MenuSessionUser;
