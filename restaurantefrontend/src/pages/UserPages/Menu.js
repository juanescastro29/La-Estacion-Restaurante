import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";

const Menu = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchSponsorships() {
      const response = await fetch(
        `http://localhost:8080/product/showProducts/${page}`
      );
      const data = await response.json();
      setProductsData(data);
    }
    fetchSponsorships();
  }, [page]);

  return (
    <div className="container-xl p-4 align-items-center justify-content-center d-flex flex-column min-vh-100">
      {page >= 2 ? (
        <div className="container">
          {productsData.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">
              No hay menú disponible.
            </p>
          ) : (
            <Cards data={productsData} type={"adoption"} />
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
              {productsData.length < 6 ? (
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
        <div className="container">
          {productsData.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">
              No hay menú disponible.
            </p>
          ) : (
            <Cards data={productsData} />
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
              {productsData.length < 6 ? (
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
    </div>
  );
};

export default Menu;
