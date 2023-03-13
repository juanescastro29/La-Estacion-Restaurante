import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';

const MenuSessionAdmin = () => {
  const {setAdminSession} = useContext(AdminContext)
  const navigate = useNavigate()

  function logout () {
    window.localStorage.removeItem("adminSession");
    setAdminSession(false);
    window.localStorage.removeItem("user");
    navigate("/home")
  }

  return (
    <>
      <li className='nav-item'>
        <NavLink to="/admin/products" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          Productos
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/admin/clients" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          Clientes
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/admin/domiciles" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          Domicilios
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/admin/bookings" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })}>
          Reservas
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/home" className="nav-link" style={({ isActive }) => ({
            background: isActive && "#dfcc97",
          })} onClick={() => (logout())}>
          Cerrar Sesión
        </NavLink>
      </li>
    </>
  );
}

export default MenuSessionAdmin