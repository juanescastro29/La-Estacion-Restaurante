import React from "react";

const Home = () => {
  return (
      <div className="container-xl p-4 align-items-center justify-content-center" style={{height: "76vh"}}>
        <div className="row g-2 p-4">
          <div className="col-md-6 bg bg-dark text-white d-flex align-items-center text-center p-4">
            <h1>
              Restaurante<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Estacion
            </h1>
          </div>
          <div className="col-md-6 p-4" style={{color: "#0f020a"}}>
            <h1>¿Quienes somos?</h1>
            <p style={{ textAlign: "justify" }}>
              Hola nosotros somos restaurante la estacion, prestamos los siguientes servicios
            </p>
            <ul
              className="list-group list-group-flush"
              style={{ textAlign: "justify"}}
            >
              <li
                className="list-group-item"
                style={{ backgroundColor: "transparent" }}
              >
                1. Platos a la carta.
              </li>
              <li
                className="list-group-item"
                style={{ backgroundColor: "transparent" }}
              >
                2. Domicilios a cualquier lugar de la ciudad.
              </li>
              <li
                className="list-group-item"
                style={{ backgroundColor: "transparent" }}
              >
                3. Agendamiento de reservas para ocaciones especiales.
              </li>
              <li
                className="list-group-item"
                style={{ backgroundColor: "transparent" }}
              >
                4. Bonos con descuentos para nuestros clientes mas fieles.
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Home;
