import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [errorResponse, setErrorResponse] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function registUser(dataForm) {
    const dataUser = {
      userDocumentId: dataForm.userId,
      userFirstName: dataForm.userName,
      userLastName: dataForm.userLastName,
      email: dataForm.userEmail,
      userPhoneNumber: dataForm.userPhoneNumber,
      userAddress: dataForm.userAddress,
      userName: dataForm.userNameUser,
      password: dataForm.userPassword,
    };

    const response = await fetch("http://localhost:8080/user/newUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataUser),
    });
    const data = await response.json();
    console.log(data);
    if (data.error !== "Usuario ya registrado") {
      navigate(data.route);
    } else {
      setErrorResponse(data.error);
    }
  }

  return (
    <form className="row" onSubmit={handleSubmit(registUser)}>
      <div className="col-12 p-2">
        <h2>Registrarse</h2>
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userId" className="form-label fw-bolder">
          Cedula de ciudadania:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userId"
          id="userId"
          {...register("userId", {
            required: true,
            pattern: /^[0-9]+$/,
            minLength: 7,
            maxLength: 10,
          })}
        />
        {errors.userId?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
        {errors.userId?.type === "minLength" && (
          <div className="text-danger">
            <small>Número de identificación no valido.</small>
          </div>
        )}
        {errors.userId?.type === "maxLength" && (
          <div className="text-danger">
            <small>Número de identificación no valido.</small>
          </div>
        )}
        {errors.userId?.type === "pattern" && (
          <div className="text-danger">
            <small>Número de identificación no valido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userName" className="form-label fw-bolder">
          Nombres:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userName"
          id="userName"
          autoComplete="nope"
          {...register("userName", {
            required: true,
          })}
        />
        {errors.userName?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userLastName" className="form-label fw-bolder">
          Apellidos:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userLastName"
          id="userLastName"
          autoComplete="nope"
          {...register("userLastName", {
            required: true,
          })}
        />
        {errors.userLastName?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userNameUser" className="form-label fw-bolder">
          Usuario:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userNameUser"
          id="userNameUser"
          autoComplete="nope"
          {...register("userNameUser", { required: true })}
        />
        {errors.userNameUser?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
        {errorResponse === "Nombre de usuario ya registrado" && (
          <div>
            <small>{errorResponse}</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userPassword" className="form-label fw-bolder">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control border-dark"
          name="userPassword"
          id="userPassword"
          autoComplete="nope"
          {...register("userPassword", { required: true })}
        />
        {errors.userPassword?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userRePassword" className="form-label fw-bolder">
          Repetir contraseña:
        </label>
        <input
          type="password"
          className="form-control border-dark"
          name="userRePassword"
          id="userRePassword"
          {...register("userRePassword", {
            required: true,
            validate: (value) => value === watch("userPassword"),
          })}
        />
        {errors.userRePassword?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
        {errors.userRePassword?.type === "validate" && (
          <div className="text-danger">
            <small>Las contraseñas no coinciden.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userPhoneNumber" className="form-label fw-bolder">
          Telefono:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userPhoneNumber"
          id="userPhoneNumber"
          autoComplete="nope"
          {...register("userPhoneNumber", {
            required: true,
            pattern: /[0-9]/,
          })}
        />
        {errors.userPhoneNumber?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es obligatorio.</small>
          </div>
        )}
        {errors.userPhoneNumber?.type === "pattern" && (
          <div className="text-danger">
            <small>No se permiten letras ni caracteres especiales.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userEmail" className="form-label fw-bolder">
          Correo electrónico:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userEmail"
          id="userEmail"
          {...register("userEmail", {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.userEmail?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
        {errors.userEmail?.type === "pattern" && (
          <div className="text-danger">
            <small>Ingrese una direccion de correo electrónico valida.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userAddress" className="form-label fw-bolder">
          Direccion:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userAddress"
          id="userAddress"
          {...register("userAddress", {
            required: true,
          })}
        />
        {errors.userAddress?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="d-grid col-12 mx-auto p-2 my-2">
        <button
          className="btn"
          type="submit"
          style={{ background: "#0f020a", color: "#dad49c" }}
        >
          Registrarse
        </button>
      </div>
      {errorResponse !== "Nombre de usuario ya registrado" && (
        <div className="text-center text-danger p-2">
          <p className="fs-6">{errorResponse}</p>
        </div>
      )}
    </form>
  );
};

export default FormRegister;
