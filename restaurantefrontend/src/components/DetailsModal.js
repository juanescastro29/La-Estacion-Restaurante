import React from "react";

const DetailsModal = ({ details }) => {
  return (
    <div
      className="modal fade"
      id="detailsModal"
      tabIndex="-1"
      aria-labelledby="detailsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalles del domicilio</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-5">
                  <label
                    className="form-label fw-bolder"
                    style={{ color: "#0f020a" }}
                  >
                    Nombre de la persona:
                  </label>
                </div>
                <div className="col-7">
                  <label className="form-label" style={{ color: "#0f020a" }}>
                    {details.length !== 0 &&
                      details[0].domicile.user.userFirstName +
                        " " +
                        details[0].domicile.user.userLastName}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label
                    className="form-label fw-bolder"
                    style={{ color: "#0f020a" }}
                  >
                    Cantidad
                  </label>
                </div>
                <div className="col-6">
                  <label
                    className="form-label fw-bolder"
                    style={{ color: "#0f020a" }}
                  >
                    Producto
                  </label>
                </div>
                <div className="col-2">
                  <label
                    className="form-label fw-bolder"
                    style={{ color: "#0f020a" }}
                  >
                    Valor Unitario
                  </label>
                </div>
                <div className="col-2">
                  <label
                    className="form-label fw-bolder"
                    style={{ color: "#0f020a" }}
                  >
                    Total
                  </label>
                </div>
              </div>
              {details.length !== 0 &&
                details.map(({ productAmount, product, orderId }) => (
                  <div className="row" key={orderId}>
                    <div className="col-2">
                      <label
                        className="form-label"
                        style={{ color: "#0f020a" }}
                      >
                        {productAmount}
                      </label>
                    </div>
                    <div className="col-6">
                      <label
                        className="form-label"
                        style={{ color: "#0f020a" }}
                      >
                        {product.productName}
                      </label>
                    </div>
                    <div className="col-2">
                      <label
                        className="form-label"
                        style={{ color: "#0f020a" }}
                      >
                        {product.productPrice}
                      </label>
                    </div>
                    <div className="col-2">
                      <label
                        className="form-label"
                        style={{ color: "#0f020a" }}
                      >
                        {product.productPrice * productAmount}
                      </label>
                    </div>
                  </div>
                ))}
              <div className="row">
                <div className="col-10">
                  <label
                    className="form-label fw-bolder"
                    style={{ color: "#0f020a" }}
                  >
                    Total de la orden
                  </label>
                </div>
                <div className="col-2">
                  <label
                    className="form-label fw-bolder"
                    style={{ color: "#0f020a" }}
                  >
                    {details.length !== 0 && details[0].domicile.domicileCost}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
