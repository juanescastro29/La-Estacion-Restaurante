import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Card.css";
import { CartContext } from "../context/CartContext";
import { useEffect } from "react";

function Card({
  productName,
  productPrice,
  productDescription,
  productImage,
  productId,
  quantity,
  type,
}) {
  const { session } = useContext(UserContext);
  const [animate, setAnimate] = useState("animate__bounceIn");
  const { cartProducts, setCartProducts, cartItems, setCartItems } =
    useContext(CartContext);

  function addCartProducts(productId, productImage, productPrice) {
    if (cartProducts) {
      if (cartProducts.find((product) => product.productId === productId)) {
        const products = cartProducts.map((product) =>
          product.productId === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        setCartItems(cartItems + 1);
        setAnimate("animate__bounce");
        setTimeout(() => setAnimate(""), 1000);
        return setCartProducts([...products]);
      }
    }

    const cartProduct = {
      productId: productId,
      productImage: productImage,
      productPrice: productPrice,
      quantity: 1,
    };

    setCartItems(cartItems + 1);
    setAnimate("animate__bounce");
    setTimeout(() => setAnimate(""), 1000);
    return setCartProducts([...cartProducts, cartProduct]);
  }

  function deleteProduct(productId, quantity) {
    setAnimate("animate__fadeOutTopRight");
    setTimeout(() => {
      const newCart = cartProducts.filter(function (product) {
        return product.productId !== productId;
      });
      setCartProducts(newCart);
      setCartItems(cartItems - quantity);
    }, 1000);
  }

  useEffect(() => {
    window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts])
  

  return (
    <div
      className={`card text-center bg-dark animate__animated ${animate} mb-5 mt-4 border border-dark rounded rounded-2`}
    >
      <div className="overflow">
        <img src={productImage} alt="pet profile" className="card-img-top" />
      </div>
      <div className="card-body text-dark rounded-bottom">
        <h4 className="card-title bg-transparent">{productName}</h4>
        {type === "cart" ? (
          <></>
        ) : (
          <p
            className="card-text bg-transparent text-secondary m-0"
            style={{ textAlign: "justify" }}
          >
            Descripcion: <br />
            {productDescription && productDescription}
          </p>
        )}
        <p
          className="card-text bg-transparent text-secondary m-0"
          style={{ textAlign: "justify" }}
        >
          Precio: <br />
          {productPrice && productPrice}
        </p>
        {type === "cart" && (
          <p
            className="card-text bg-transparent text-secondary m-0"
            style={{ textAlign: "justify" }}
          >
            Cantidad: <br />
            {quantity && quantity}
          </p>
        )}
        {session ? (
          <>
            {type === "cart" ? (
              <button
                className="btn mt-3"
                type="submit"
                style={{ background: "#0f020a", color: "#dad49c" }}
                onClick={() => deleteProduct(productId, quantity)}
              >
                Eliminar del carrito
              </button>
            ) : (
              <button
                className="btn mt-3"
                type="submit"
                style={{ background: "#0f020a", color: "#dad49c" }}
                onClick={() =>
                  addCartProducts(productId, productImage, productPrice)
                }
              >
                Agregar al carrito
              </button>
            )}
          </>
        ) : (
          <>
            {!session && (
              <NavLink to={"/login"}>
                <button
                  className="btn"
                  type="submit"
                  style={{ background: "#0f020a", color: "#dad49c" }}
                >
                  Iniciar sesion
                </button>
              </NavLink>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
