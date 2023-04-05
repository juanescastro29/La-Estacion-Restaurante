import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ productName, productPrice, productDescription, productImage, productId }) {
  const { session } = useContext(UserContext);

  return (
    <div className="card text-center bg-dark animate__animated animate__bounceIn mb-5 mt-4 border border-dark rounded rounded-2">
      <div className="overflow">
        <img src={productImage} alt="pet profile" className="card-img-top" />
      </div>
      <div className="card-body text-dark rounded-bottom">
        <h4 className="card-title bg-transparent">{productName}</h4>
        <p
          className="card-text bg-transparent text-secondary m-0"
          style={{ textAlign: "justify" }}
        >
          Descripcion: <br/>
          {productDescription && productDescription}
        </p>
        <p
          className="card-text bg-transparent text-secondary m-0"
          style={{ textAlign: "justify" }}
        >
          Precio: <br/>
          {productPrice && productPrice}
        </p>
        {session ? (
          <>
            <button
              className="btn mt-3"
              type="submit"
              style={{ background: "#0f020a", color: "#dad49c" }}
            >
              Agregar al carrito
            </button>
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

Card.propTypes = {
  pet_name: PropTypes.string.isRequired,
  pet_id: PropTypes.number.isRequired,
  text: PropTypes.string,
  pet_image: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Card;
