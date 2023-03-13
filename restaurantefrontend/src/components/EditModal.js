import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Modal.css";

const EditModal = ({ data, type }) => {
  const { register, handleSubmit } = useForm();
  const [bookingResponse, setBookingResponse] = useState("")
  const [productResponse, setProductResponse] = useState("");

  async function updateProduct(dataForm) {
    if (dataForm.productImage[0]) {
      const image = new FormData();
      image.append("file", dataForm.productImage[0]);
      image.append("upload_preset", "restaurante");
      const responseCloud = await fetch(
        "https://api.cloudinary.com/v1_1/dbhl95fyu/image/upload",
        {
          method: "POST",
          body: image,
        }
      );
      const imageUrl = await responseCloud.json();
      dataForm.productImage = imageUrl.secure_url;
    } else {
      dataForm.productImage = "";
    }

    const update = {
      productPrice: dataForm.productPrice,
      productImage: dataForm.productImage,
      iva: dataForm.iva,
      productDescription: dataForm.productDescription,
      stock: dataForm.stock,
    };

    console.log(update);

    const response = await fetch(
      `http://localhost:8080/product/updateProduct/${data.productId}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    );
    const dataBack = await response.text();
    setProductResponse(dataBack);
  }

  async function updateBooking(dataForm) {
    const response = await fetch(
      `http://localhost:8080/booking/updateBooking/${data.bookingId}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForm),
      }
    );
    const dataBack = await response.text();
    setBookingResponse(dataBack);
  }

  return (
    <>
      {type === "product" && (
        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar producto</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row" onSubmit={handleSubmit(updateProduct)}>
                  <div className="col-6 p-3">
                    <label
                      htmlFor="productPrice"
                      className="form-label fw-bolder"
                    >
                      Precio producto:
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark border-2"
                      defaultValue={data.productPrice}
                      {...register("productPrice")}
                    />
                  </div>
                  <div className="col-6 p-3">
                    <label htmlFor="formFile" className="form-label fw-bolder">
                      Imagen producto:
                    </label>
                    <input
                      className="form-control border-dark border-2"
                      type="file"
                      {...register("productImage")}
                    ></input>
                  </div>
                  <div className="col-6 p-3">
                    <label htmlFor="iva" className="form-label fw-bolder">
                      Iva producto:
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark border-2"
                      defaultValue={data.iva}
                      {...register("iva")}
                    />
                  </div>
                  <div className="col-6 p-3">
                    <label
                      htmlFor="productDescription"
                      className="form-label fw-bolder"
                    >
                      Descripcion producto:
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark border-2"
                      defaultValue={data.productDescription}
                      {...register("productDescription")}
                    />
                  </div>
                  <div className="col-6 p-3">
                    <label
                      htmlFor="productStock"
                      className="form-label fw-bolder"
                    >
                      Stock:
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark border-2"
                      defaultValue={data.stock}
                      {...register("stock")}
                    />
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="submit"
                      className="btn"
                      style={{ background: "#0f020a", color: "white" }}
                      data-bs-target="#confirmEditModal"
                      data-bs-toggle="modal"
                    >
                      Guardar cambios
                    </button>
                    <button
                      type="button"
                      className="btn"
                      style={{ background: "#0f020a", color: "white" }}
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "booking" && (
        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar reserva</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row" onSubmit={handleSubmit(updateBooking)}>
                  <div className="col-12 p-3">
                    <label htmlFor="bookingId" className="form-label fw-bolder">
                      Id de la reserva:
                    </label>
                    <input
                      className="form-control border-dark border-2"
                      defaultValue={data.bookingId}
                      disabled
                    />
                  </div>
                  <div className="col-6 p-3">
                    <label
                      htmlFor="bookingDate"
                      className="form-label fw-bolder"
                    >
                      Fecha de la reserva:
                    </label>
                    <div className="input-group date" data-provide="datepicker">
                      <input
                        type="text"
                        className="form-control border-dark"
                        data-date-format="mm/dd/yyyy"
                        defaultValue={data.bookingDate}
                        {...register("bookingDate")}
                      />
                      <div className="input-group-addon">
                        <span className="glyphicon glyphicon-th"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 p-3">
                    <label
                      htmlFor="bookingHour"
                      className="form-label fw-bolder"
                    >
                      Hora:
                    </label>
                    <select
                      className="form-select border-dark"
                      autoComplete="nope"
                      defaultValue={data.bookingHour}
                      {...register("bookingHour", { required: true })}
                    >
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="submit"
                      className="btn"
                      style={{ background: "#0f020a", color: "white" }}
                      data-bs-target="#confirmEditModal"
                      data-bs-toggle="modal"
                    >
                      Guardar cambios
                    </button>
                    <button
                      type="button"
                      className="btn"
                      style={{ background: "#0f020a", color: "white" }}
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="modal fade"
        id="confirmEditModal"
        aria-hidden="true"
        aria-labelledby="confirmEditModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {bookingResponse === "Booking update successfully" ||
              productResponse === "Product update successfully" ? (
                <>
                  <div className="f-modal-alert">
                    <div className="f-modal-icon f-modal-success animate">
                      <span className="f-modal-line f-modal-tip animateSuccessTip"></span>
                      <span className="f-modal-line f-modal-long animateSuccessLong"></span>
                      <div className="f-modal-placeholder"></div>
                      <div className="f-modal-fix"></div>
                    </div>
                  </div>
                  <p className="fs-4 fw-bolder text-center">
                    Los cambios se guardaron correctamente.
                  </p>
                </>
              ) : (
                <>
                  <div className="f-modal-alert">
                    <div className="f-modal-icon f-modal-error animate">
                      <span className="f-modal-x-mark">
                        <span className="f-modal-line f-modal-left animateXLeft"></span>
                        <span className="f-modal-line f-modal-right animateXRight"></span>
                      </span>
                      <div className="f-modal-placeholder"></div>
                      <div className="f-modal-fix"></div>
                    </div>
                  </div>
                  <p className="fs-4 fw-bolder text-center">
                    Error al guardar los cambios.
                  </p>
                </>
              )}
            </div>
            <div className="modal-footer justify-content-center">
              {bookingResponse === "Booking update successfully" ||
              productResponse === "Product update successfully" ? (
                <button
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                  style={{ background: "#0f020a", color: "white" }}
                  onClick={() => window.location.reload(false)}
                >
                  Aceptar
                </button>
              ) : (
                <button
                  type="button"
                  className="btn"
                  style={{ background: "#0f020a", color: "white" }}
                  data-bs-target="#editModal"
                  data-bs-toggle="modal"
                >
                  Aceptar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
