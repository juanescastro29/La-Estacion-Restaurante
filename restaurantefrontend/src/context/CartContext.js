import React from "react";
import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(window.localStorage.getItem("cartProducts")) ?? []
  );
  const [cartItems, setCartItems] = useState(cartProducts.length ?? 0)

  const values = useMemo(
    () => ({
      cartProducts,
      setCartProducts,
      cartItems,
      setCartItems
    }),
    [cartProducts, cartItems]
  );

  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

CartProvider.protoTypes = {
  children: PropTypes.object,
};
