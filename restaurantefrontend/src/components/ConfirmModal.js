import React from 'react'

const ConfirmModal = ({ type, id }) => {

  async function deleteProduct() {
    console.log(id);
    await fetch(
      `http://localhost:8080/product/deleteProduct/${id}`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  }

  async function cancelBooking(bookingId) {
    await fetch(`http://localhost:8080/booking/cancelBooking/${bookingId}`, {
      method: "DELETE",
    });
    window.location.reload();
  }

  return (
    <>
      <div
        className="modal fade"
        id="confirmModal"
        tabIndex="-1"
        aria-labelledby="confirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {type === "products" && (
                <h4 className="text-center">¿Desea eliminar este producto?</h4>
              )}
              {type === "bookings" && (
                <h4 className="text-center">¿Desea cancelar esta reserva?</h4>
              )}
            </div>
            <div className="modal-footer justify-content-center">
              {type === "products" && (
                <button
                  type="button"
                  className="btn"
                  style={{background: "#0f020a", color: "white"}}
                  data-bs-dismiss="modal"
                  onClick={() => deleteProduct()}
                >
                  Aceptar
                </button>
              )}
              {type === "bookings" && (
                <button
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                  style={{background: "#0f020a", color: "white"}}
                  onClick={() => cancelBooking()}
                >
                  Aceptar
                </button>
              )}
              <button
                type="button"
                className="btn"
                style={{background: "#0f020a", color: "white"}}
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmModal