import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import EditModal from "./EditModal";
import DetailsModal from "./DetailsModal";
import { set } from "react-hook-form";

const Table = ({ data, dataType }) => {

  const [productEdit, setProductEdit] = useState({})
  const [elementId, setElementId] = useState(0)

  function searchProduct(productId) {
    const productData = data.find((product) => {
      return product.productId === productId;
    });
    setProductEdit(productData);
  }

  return (
    <div className="table-responsive">
      <table className="table caption-top bg bg-white border border-dark table-striped table-hover">
        {dataType === "products" && (
          <caption className="fs-3 fw-bolder" style={{ color: "#0f020a" }}>
            Gestion Productos
          </caption>
        )}
        {dataType === "clients" && (
          <caption className="fs-3 fw-bolder" style={{ color: "#0f020a" }}>
            Gestion Clientes
          </caption>
        )}
        {dataType === "domiciles" && (
          <caption className="fs-3 fw-bolder" style={{ color: "#0f020a" }}>
            Gestion Domicilios
          </caption>
        )}
        {dataType === "bookings" && (
          <caption className="fs-3 fw-bolder" style={{ color: "#0f020a" }}>
            Gestion Reservas
          </caption>
        )}
        <thead>
          {dataType === "products" && (
            <>
              <tr>
                <th scope="col">Id producto</th>
                <th scope="col">Precio producto</th>
                <th scope="col">Iva</th>
                <th scope="col">Descripción producto</th>
                <th scope="col">Stock</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </>
          )}
          {dataType === "clients" && (
            <>
              <tr>
                <th scope="col">Id Cliente</th>
                <th scope="col">Email</th>
                <th scope="col">Direccion</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Telefono</th>
              </tr>
            </>
          )}
          {dataType === "domiciles" && (
            <>
              <tr>
                <th scope="col">Id Domicilio</th>
                <th scope="col">Costo Domicilio</th>
                <th scope="col">Fecha Domicilio</th>
                <th scope="col">Id persona</th>
                <th scope="col"></th>
              </tr>
            </>
          )}
          {dataType === "bookings" && (
            <>
              <tr>
                <th scope="col">Id reserva</th>
                <th scope="col">Fecha reserva</th>
                <th scope="col">Hora reserva</th>
                <th scope="col">Id persona</th>
                <th scope="col"></th>
              </tr>
            </>
          )}
        </thead>
        <tbody>
          {dataType === "products" && (
            <>
              {data.map(
                ({
                  productId,
                  productPrice,
                  iva,
                  productDescription,
                  stock,
                }) => (
                  <tr key={productId}>
                    <th scope="row">{productId}</th>
                    <td>{productPrice}</td>
                    <td>{iva}</td>
                    <td>{productDescription}</td>
                    <td>{stock}</td>
                    <td align="center" className="">
                      {
                        <>
                          <button
                            type="button"
                            className="border-0 bg-transparent"
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                            onClick={() => searchProduct(productId)}
                          >
                            <i
                              className="bi bi-pencil"
                              style={{ fontSize: 20, color: "#0f020a" }}
                            ></i>
                          </button>
                          <EditModal data={productEdit} type={"product"}/>
                        </>
                      }
                    </td>
                    <td align="center" className="">
                      {
                        <>
                          <button
                            type="button"
                            className="border-0 bg-transparent"
                            data-bs-toggle="modal"
                            data-bs-target="#confirmModal"
                            onClick={() => setElementId(productId)}
                          >
                            <i
                              className="bi bi-trash"
                              style={{ fontSize: 20, color: "#0f020a" }}
                            ></i>
                          </button>
                          <ConfirmModal type={"products"} id={elementId}/>
                        </>
                      }
                    </td>
                  </tr>
                )
              )}
            </>
          )}
          {dataType === "clients" && (
            <>
              {data.map(
                ({
                  userDocumentId,
                  email,
                  userAddress,
                  userFirstName,
                  userLastName,
                  userPhoneNumber,
                }) => (
                  <tr key={userDocumentId}>
                    <th scope="row">{userDocumentId}</th>
                    <td>{email}</td>
                    <td>{userAddress}</td>
                    <td>{userFirstName}</td>
                    <td>{userLastName}</td>
                    <td>{userPhoneNumber}</td>
                  </tr>
                )
              )}
            </>
          )}
          {dataType === "domiciles" && (
            <>
              {data.map(({ domicileId, domicileCost, domicileDate, user }) => (
                <tr key={domicileId}>
                  <th scope="row">{domicileId}</th>
                  <td>{domicileCost}</td>
                  <td>{domicileDate}</td>
                  <td>{user.userDocumentId}</td>
                  <td align="center" className="">
                    {
                      <>
                        <button
                          type="button"
                          className="border-0 bg-transparent"
                          data-bs-toggle="modal"
                          data-bs-target="#detailsModal"
                        >
                          <i
                            className="bi bi-journals"
                            style={{ fontSize: 20, color: "#0f020a" }}
                          ></i>
                        </button>
                        <DetailsModal />
                      </>
                    }
                  </td>
                </tr>
              ))}
            </>
          )}
          {dataType === "bookings" && (
            <>
              {data.map(({ bookingId, bookingDate, bookingHour, user }) => (
                <tr key={bookingId}>
                  <th scope="row">{bookingId}</th>
                  <td>{bookingDate}</td>
                  <td>{bookingHour}</td>
                  <td>{user.userDocumentId}</td>
                  <td>
                    <>
                      <button
                        type="button"
                        className="border-0 bg-transparent"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                      >
                        <i
                          className="bi bi-pencil"
                          style={{ fontSize: 20, color: "#0f020a" }}
                        ></i>
                      </button>
                      <EditModal />
                    </>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
