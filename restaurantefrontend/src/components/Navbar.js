import React, { useContext } from "react";
import Logo from "../assets/LaEstacionLogo.png";
import { UserContext } from "../context/UserContext";
import { AdminContext } from "../context/AdminContext";
import MenuSessionUser from "./MenuSessionUser";
import MenuSessionAdmin from "./MenuSessionAdmin"
import MenuNoSession from "./MenuNoSession.js";
import "./Navbar.css";

const Navbar = () => {
  const { session } = useContext(UserContext);
  const { adminSession } = useContext(AdminContext);

  return (
    <nav
      className="navbar"
      style={{ background: "#b5ab85" }}
    >
      <div className="container-fluid">
        <a href="/home" className="navbar-brand">
          <img
            src={Logo}
            alt="logo"
            width="50"
            height="50"
            className="d-inline-block align-text-center ms-5"
          />
        </a>
        <p className="navbar-brand" style={{ color: "#0f020a" }}>
          Restaurante La Estación
        </p>
        <button
          className="navbar-toggler border-2 me-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          style={{ borderColor: "#0f020a" }}
        >
          {session ? (
            <span className="">
              <i
                className="bi bi-person"
                style={{ fontSize: 30, color: "#0f020a" }}
              ></i>
            </span>
          ) : (
            <i
              className="bi bi-list"
              style={{ fontSize: 30, color: "#0f020a" }}
            ></i>
          )}
        </button>
        <div
          className="offcanvas offcanvas-end custom-bg"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Hola, bienvenido
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {
                session && <MenuSessionUser /> 
              }
              {
                adminSession && <MenuSessionAdmin />
              }
              { (session === false && adminSession === false) && <MenuNoSession />}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
