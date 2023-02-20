import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const MenuNoSession = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink
          to="/login"
          className="nav-link"
          style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}
        >
          Iniciar Sesión
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/menu"
          className="nav-link"
          style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}
        >
          Nuestro Menú
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/register"
          className="nav-link"
          style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}
        >
          Registrarse
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className="nav-link"
          style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}
        >
          Contactarnos
        </NavLink>
      </li>
    </>
  );
};

export default MenuNoSession;
