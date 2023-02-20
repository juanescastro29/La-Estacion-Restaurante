import React, { useState } from "react";
import ModalConfirm from "./ModalConfirm";
import ModalForm from "./ModalForm";

const Table = ({ data, dataType }) => {
  const [adoptionEdit, setAdoptionEdit] = useState({});
  const [petEdit, setPetEdit] = useState({});

  function searchAdoption(adoption_id) {
    const adoptionData = data.find((adoption) => {
      return adoption.adoption_id === adoption_id;
    });
    setAdoptionEdit(adoptionData);
  }

  function searchPet(pet_id) {
    const petData = data.find((pet) => {
      return pet.pet_id === pet_id;
    });
    setPetEdit(petData);
  }

  return (
    <div className="table-responsive">
      <table className="table caption-top bg bg-white border border-dark table-striped table-hover">
        {dataType === "adoptions" && (
          <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
            Lista de adopciones
          </caption>
        )}
        {dataType === "sponsorships" && (
          <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
            Lista de apadrinamientos
          </caption>
        )}
        {dataType === "donations" && (
          <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
            Lista de donaciones
          </caption>
        )}
        {dataType === "pets" && (
          <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
            Lista de mascotas
          </caption>
        )}
        <thead>
          {dataType === "adoptions" && (
            <>
              <tr>
                <th scope="col">Id Adoption</th>
                <th scope="col">Id Mascota</th>
                <th scope="col">Id Usuario</th>
                <th scope="col">Fecha de solicitud</th>
                <th scope="col">Ultima actualización</th>
                <th scope="col">Comentarios</th>
                <th scope="col">Estado</th>
                <th scope="col"></th>
              </tr>
            </>
          )}
          {dataType === "sponsorships" && (
            <>
              <tr>
                <th scope="col">Id Apadrinamiento</th>
                <th scope="col">Id Mascota</th>
                <th scope="col">Id Usuario</th>
                <th scope="col">Estado</th>
                <th scope="col"></th>
              </tr>
            </>
          )}
          {dataType === "donations" && (
            <>
              <tr>
                <th scope="col">Id Donacion</th>
                <th scope="col">Id Usuario</th>
                <th scope="col">Fecha</th>
                <th scope="col">Valor</th>
                <th scope="col">Estado</th>
              </tr>
            </>
          )}
          {dataType === "pets" && (
            <>
              <tr>
                <th scope="col">Id mascota</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado de adopción</th>
                <th scope="col">Estado de apadrinamiento</th>
                <th scope="col">Edad</th>
                <th scope="col">Color</th>
                <th scope="col">Historia</th>
                <th scope="col">Raza</th>
                <th scope="col">Tamaño</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </>
          )}
        </thead>
        <tbody>
          {dataType === "adoptions" && (
            <>
              {data.map(
                ({
                  adoption_id,
                  adoption_comments,
                  date,
                  date_update,
                  status,
                  user,
                  pet,
                }) => (
                  <tr key={adoption_id}>
                    <th scope="row">{adoption_id}</th>
                    <td>{pet.pet_id}</td>
                    <td>{user.user_id}</td>
                    <td>{date}</td>
                    <td>{date_update}</td>
                    <td>{adoption_comments}</td>
                    <td>{status}</td>
                    <td align="center" className="">
                      {status !== "Rechazado" && (
                        <>
                          <button
                            type="button"
                            className="border-0 bg-transparent"
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                            onClick={() => searchAdoption(adoption_id)}
                          >
                            <i
                              className="bi bi-pencil-square"
                              style={{ fontSize: 20, color: "green" }}
                            ></i>
                          </button>
                          <ModalForm data={adoptionEdit} type={"adoption"} />
                        </>
                      )}
                    </td>
                  </tr>
                )
              )}
            </>
          )}
          {dataType === "sponsorships" && (
            <>
              {data.map(({ sponsorship_id, user, pet, status }) => (
                <tr key={sponsorship_id}>
                  <th scope="row">{sponsorship_id}</th>
                  <td>{pet.pet_id}</td>
                  <td>{user.user_id}</td>
                  <td>{status}</td>
                  <td align="center">
                    {status === "Activo" && (
                      <>
                        <button
                          type="button"
                          className="border-0 bg-transparent"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmModal"
                        >
                          <i
                            className="bi bi-trash"
                            style={{ fontSize: 20, color: "green" }}
                          ></i>
                        </button>
                        <ModalConfirm type={"sponsor"} id={sponsorship_id} />
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </>
          )}
          {dataType === "donations" && (
            <>
              {data.map(
                ({ donation_id, date, donation_value, status, user }) => (
                  <tr key={donation_id}>
                    <th scope="row">{donation_id}</th>
                    <td>{user.user_id}</td>
                    <td>{date}</td>
                    <td>{donation_value}</td>
                    <td>{status}</td>
                    <td>
                      <button type="button">show data</button>
                    </td>
                  </tr>
                )
              )}
            </>
          )}
          {dataType === "pets" && (
            <>
              {data.map(
                ({
                  pet_id,
                  pet_name,
                  adoption_status,
                  sponsorship_status,
                  pet_age,
                  pet_color,
                  pet_history,
                  pet_race,
                  pet_size,
                }) => (
                  <tr key={pet_id}>
                    <th scope="row">{pet_id}</th>
                    <td>{pet_name}</td>
                    {adoption_status ? (
                      <td>En adopción</td>
                    ) : (
                      <td>No disponible para adoptar</td>
                    )}
                    {sponsorship_status ? (
                      <td>En apadrinamiento</td>
                    ) : (
                      <td>No disponible para apadrinar</td>
                    )}
                    <td>{pet_age}</td>
                    <td>{pet_color}</td>
                    <td>{pet_history}</td>
                    <td>{pet_race}</td>
                    <td>{pet_size}</td>
                    <td align="center">
                      {adoption_status && sponsorship_status && (
                        <>
                        <button
                          type="button"
                          className="border-0 bg-transparent"
                          data-bs-toggle="modal"
                          data-bs-target="#editModal"
                          onClick={() => searchPet(pet_id)}
                        >
                          <i
                            className="bi bi-pencil-square"
                            style={{ fontSize: 20, color: "green" }}
                          ></i>
                        </button>
                        <ModalForm data={petEdit} type={"pet"} />
                      </>
                      )}
                    </td>
                    <td align="center">
                      {adoption_status && sponsorship_status && (
                        <>
                          <button
                            type="button"
                            className="border-0 bg-transparent"
                            data-bs-toggle="modal"
                            data-bs-target="#confirmModal"
                          >
                            <i
                              className="bi bi-trash"
                              style={{ fontSize: 20, color: "green" }}
                            ></i>
                          </button>
                          <ModalConfirm type={"pet"} id={pet_id} />
                        </>
                      )}
                    </td>
                  </tr>
                )
              )}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
