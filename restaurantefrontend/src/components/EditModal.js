import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './Modal.css'

const EditModal = ({ data, type }) => {
  const { register, handleSubmit } = useForm();
  const [adoptionResponse, setAdoptionResponse] = useState("");
  const [productResponse, setProductResponse] = useState("");

  async function updateAdoption(dataForm) {
    const update = {
      adoption_comments: dataForm.commentsAdoption,
      status: dataForm.stateAdoption,
    };
    const response = await fetch(
      `http://localhost:8081/adoption/updateAdoption/${data.adoption_id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    );
    const dataBack = await response.text();
    setAdoptionResponse(dataBack);
  }

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
      {type === "adoption" && (
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
                <h5 className="modal-title">Editar adopción</h5>)
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row" onSubmit={handleSubmit(updateAdoption)}>
                  <div className="col-6">
                    <label
                      htmlFor="lastUpdateAdoption"
                      className="form-label fw-bolder"
                    >
                      Última modificación
                    </label>
                    <input
                      type="text"
                      className="form-control text-center border-2"
                      placeholder={data.date_update}
                      disabled
                    />
                  </div>
                  <div className="col-6">
                    <label
                      htmlFor="stateAdoption"
                      className="form-label fw-bolder"
                    >
                      Estado:
                    </label>
                    <select
                      className="form-select border-dark"
                      name="stateAdoption"
                      id="stateAdoption"
                      autoComplete="nope"
                      defaultValue={data.status}
                      {...register("stateAdoption", { required: true })}
                    >
                      <option value="En progreso">En progreso</option>
                      <option value="Aceptado">Aceptado</option>
                      <option value="Rechazado">Rechazado</option>
                    </select>
                  </div>
                  <div className="col-12 p-3">
                    <label
                      htmlFor="commentsAdoption"
                      className="form-label fw-bolder"
                    >
                      Comentarios:
                    </label>
                    <textarea
                      className="form-control border-dark"
                      name="commentsAdopton"
                      id="commentsAdopton"
                      defaultValue={data.adoption_comments}
                      style={{ resize: "none" }}
                      {...register("commentsAdoption")}
                    ></textarea>
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
              {adoptionResponse === "Adoption update successfully" ||
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
              {adoptionResponse === "Adoption update successfully" ||
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
