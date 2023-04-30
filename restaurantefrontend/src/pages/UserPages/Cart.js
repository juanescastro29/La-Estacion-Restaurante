import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import Cards from "../../components/Cards";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartProducts, setCartProducts, setCartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  async function createDomicile() {
    const domicileData = {
      domicileCost: total,
      user: user,
    };
    const response = await fetch(
      "http://localhost:8080/domicile/createDomicile",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(domicileData),
      }
    );
    const data = await response.json();
    cartProducts.forEach(async product => {
      const productResponse = await fetch(`http://localhost:8080/product/showProduct/${product.productId}`)
      const productData = await productResponse.json();
      const orderData = {
        domicile: data.domicile,
        product: productData,
        productAmount: parseInt(product.quantity)
      }
      await fetch(`http://localhost:8080/order/createOrder`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(orderData)
      })
    });
    
    setCartProducts([]);
    setCartItems(0);
    navigate("/user/domicile");
  }

  useEffect(() => {
    let sum = 0;
    cartProducts.map(
      ({ productPrice, quantity }) => (sum = sum + productPrice * quantity)
    );
    setTotal(sum);
  }, [cartProducts]);

  return (
    <>
      <div className="container-xl p-4 align-items-center justify-content-center d-flex flex-column min-vh-100">
        <div className="container">
          {cartProducts.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">
              No hay productos en el carrito.
            </p>
          ) : (
            <>
              <div className="row align-items-center justify-content-center">
                <div className="col-8 text-start">
                  <h2 className="p-4">Total: ${total}</h2>
                </div>
                <div className="col-4 text-center">
                  <button
                    type="submit"
                    className="btn"
                    style={{ background: "#0f020a", color: "#dad49c" }}
                    onClick={() => createDomicile()}
                  >
                    Realizar pedido
                  </button>
                </div>
              </div>
              <Cards data={cartProducts} type={"cart"} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
