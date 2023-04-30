import React, { useEffect, useState } from "react";
import AddModal from "../../components/AddModal";
import Table from "../../components/Table";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:8080/product/showProducts/${page}`
      );
      const data = await response.json();
      setProductsData(data);
    }
    fetchProducts();
  }, [page]);

  return (
    <div className="container-fluid p-5 d-flex flex-column min-vh-100">
      {page >= 2 ? (
        <div className="container-fluid">
          {productsData.length === 0 ? (
            <>
              <Table data={productsData} dataType={"products"} />
              <p className="text-center fs-3 fw-bolder">No hay productos.</p>
            </>
          ) : (
            <Table data={productsData} dataType={"products"} />
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
        <div className="container-fluid">
          {productsData.length === 0 ? (
            <>
              <Table data={productsData} dataType={"products"} />
              <p className="text-center fs-3 fw-bolder">No hay productos.</p>
            </>
          ) : (
            <Table data={productsData} dataType={"products"} />
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
      <div className="container-fluid text-end">
        <button
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
          style={{ background: "#0f020a", color: "#dad49c" }}
        >
          Agregar Productos
        </button>
        <AddModal type={"product"}/>
      </div>
    </div>
  );
};

export default Products;
