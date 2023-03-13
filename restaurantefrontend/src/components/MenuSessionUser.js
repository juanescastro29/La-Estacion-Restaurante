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
      <li className="nav-item">
        <NavLink to="/menu" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          Menú
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/user/domicile" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          Mis Domicilios
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/user/booking" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          Mis Reservas
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/home" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })} onClick={() => (logout())}>
          Cerrar Sesión
        </NavLink>
      </li>
    </>
  );
};

export default MenuSessionUser;
