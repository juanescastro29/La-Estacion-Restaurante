import React, { useContext, useEffect, useState } from "react";
import Table from "../../components/Table";
import { UserContext } from "../../context/UserContext";
import AddModal from "../../components/AddModal";

const Booking = () => {
  const { user } = useContext(UserContext);
  const [bookingsData, setBookingsData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchBookings() {
      const response = await fetch(
        `http://localhost:8080/booking/showBookings/user/${user.userDocumentId}/${page}`
      );
      const data = await response.json();
      setBookingsData(data);
    }
    console.log(user.userDocumentId);
    fetchBookings();
  }, [page, user]);

  return (
    <div className="container-fluid p-5 d-flex flex-column min-vh-100">
      {page >= 2 ? (
        <div className="container-fluid">
          {bookingsData.length === 0 ? (
            <>
              <Table data={bookingsData} dataType={"bookings"} />
              <p className="text-center fs-3 fw-bolder">
                No hay reservas para mostrar.
              </p>
            </>
          ) : (
            <Table data={bookingsData} dataType={"bookings"} />
          )}
          <div className="row">
            <div className="col text-end">
              <button
                className="btn border-0 bg-transparent"
                type="button"
                onClick={() => setPage(page - 1)}
              >
                <i
                  className="bi bi-caret-left-square"
                  style={{ fontSize: 35 }}
                ></i>
              </button>
            </div>
            <div className="col text-center pt-2">
              <p className="fs-3">{page}</p>
            </div>
            <div className="col text-start">
              {bookingsData.length < 6 ? (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  disabled
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              ) : (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page + 1)}
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          {bookingsData.length === 0 ? (
            <>
              <Table data={bookingsData} dataType={"bookings"} />
              <p className="text-center fs-3 fw-bolder">
                No hay reservas para mostrar.
              </p>
            </>
          ) : (
            <Table data={bookingsData} dataType={"bookings"} />
          )}
          <div className="row">
            <div className="col text-end">
              {page === 1 ? (
                <div>
                  <button
                    className="btn border-0 bg-transparent"
                    type="button"
                    disabled
                  >
                    <i
                      className="bi bi-caret-left-square"
                      style={{ fontSize: 35 }}
                    ></i>
                  </button>
                </div>
              ) : (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page - 1)}
                >
                  <i
                    className="bi bi-caret-left-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              )}
            </div>
            <div className="col text-center pt-2">
              <p className="fs-3">{page}</p>
            </div>
            <div className="col text-start">
              {bookingsData.length < 6 ? (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  disabled
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              ) : (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page + 1)}
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid text-end">
        <button
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
          style={{ background: "#0f020a", color: "#dad49c" }}
        >
          Agendar Reserva
        </button>
        <AddModal type={"booking"}/>
      </div>
    </div>
  );
};

export default Booking;
