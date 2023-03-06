import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddModal = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [productResponse, setProductResponse] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(
        `http://localhost:8080/category/showCategories`
      );
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  async function createProduct(dataForm) {
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

    console.log(dataForm);

    dataForm.productCategory = categories.find((category) => {
      return category.categoryId === parseInt(dataForm.productCategory);
    });

    console.log(dataForm);

    const update = {
      productName: dataForm.productName,
      productPrice: parseFloat(dataForm.productPrice),
      productImage: dataForm.productImage,
      iva: parseFloat(dataForm.productIva),
      productDescription: dataForm.productDescription,
      stock: parseInt(dataForm.productStock),
      category: dataForm.productCategory,
    };

    console.log(update);

    const response = await fetch(
      `http://localhost:8080/product/createProduct/`,
      {
        method: "POST",
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
          id="addModal"
          tabIndex="-1"
          aria-labelledby="addModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar producto</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  className="row text-start"
                  onSubmit={handleSubmit(createProduct)}
                >
                  <div className="col-6 p-3">
                    <label
                      htmlFor="productName"
                      className="form-label fw-bolder"
                    >
                      Nombre del producto:
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark border-2"
                      {...register("productName", {
                        required: true,
                      })}
                    />
                    {errors.productName?.type === "required" && (
                      <div className="text-danger">
                        <small>Este campo es requerido.</small>
                      </div>
                    )}
                  </div>
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
                      {...register("productPrice", {
                        required: true,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.productPrice?.type === "required" && (
                      <div className="text-danger">
                        <small>Este campo es requerido.</small>
                      </div>
                    )}
                    {errors.productPrice?.type === "pattern" && (
                      <div className="text-danger">
                        <small>
                          No se permiten letras ni caracteres especiales.
                        </small>
                      </div>
                    )}
                  </div>
                  <div className="col-6 p-3">
                    <label htmlFor="formFile" className="form-label fw-bolder">
                      Imagen producto:
                    </label>
                    <input
                      className="form-control border-dark border-2"
                      type="file"
                      {...register("productImage", {
                        required: true,
                      })}
                    ></input>
                    {errors.productImage?.type === "required" && (
                      <div className="text-danger">
                        <small>Este campo es requerido.</small>
                      </div>
                    )}
                  </div>
                  <div className="col-6 p-3">
                    <label
                      htmlFor="productIva"
                      className="form-label fw-bolder"
                    >
                      Iva producto:
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark border-2"
                      {...register("productIva", {
                        required: true,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.productIva?.type === "required" && (
                      <div className="text-danger">
                        <small>Este campo es requerido.</small>
                      </div>
                    )}
                    {errors.productIva?.type === "patter" && (
                      <div className="text-danger">
                        <small>
                          No se permiten letras ni caracteres especiales.
                        </small>
                      </div>
                    )}
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
                      {...register("productDescription", {
                        required: true,
                      })}
                    />
                    {errors.productDescription?.type === "required" && (
                      <div className="text-danger">
                        <small>Este campo es requerido.</small>
                      </div>
                    )}
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
                      {...register("productStock", {
                        required: true,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.productStock?.type === "required" && (
                      <div className="text-danger">
                        <small>Este campo es requerido.</small>
                      </div>
                    )}
                    {errors.productStock?.type === "patter" && (
                      <div className="text-danger">
                        <small>
                          No se permiten letras ni caracteres especiales.
                        </small>
                      </div>
                    )}
                  </div>
                  <div className="col-6 p-3">
                    <label
                      htmlFor="productCategory"
                      className="form-label fw-bolder"
                    >
                      Categoria:
                    </label>
                    {categories.length !== 0 ? (
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        {...register("productCategory", {
                          required: true,
                        })}
                      >
                        <option value={"No hay categorias para seleccionar."}>
                          Seleccione la categoria
                        </option>
                        {categories.map(({ categoryId, categoryName }) => (
                          <option value={categoryId} key={categoryId}>
                            {categoryName}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        disabled
                      >
                        <option value={"No hay categorias para seleccionar."}>
                          No hay categorias para seleccionar.
                        </option>
                      </select>
                    )}
                    {errors.productCategory?.type === "required" && (
                      <div className="text-danger">
                        <small>Este campo es requerido.</small>
                      </div>
                    )}
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="submit"
                      className="btn"
                      style={{ background: "#0f020a", color: "#dad49c" }}
                      data-bs-target="#confirmEditModal"
                      data-bs-toggle="modal"
                    >
                      Crear producto
                    </button>
                    <button
                      type="button"
                      className="btn"
                      style={{ background: "#0f020a", color: "#dad49c" }}
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
              {productResponse === "Product create successfully" ? (
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
                    Producto creado correctamente.
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
                    Error al guardar el producto.
                  </p>
                </>
              )}
            </div>
            <div className="modal-footer justify-content-center">
              {productResponse === "Product create successfully" ? (
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
                  data-bs-target="#addModal"
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

export default AddModal;
