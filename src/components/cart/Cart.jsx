import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Card from "../../components/card/Card";
const Cart = () => {
  const { products, setProducts, cart, setCart } = useContext(ProductContext);

  return (
    <>
      <h1>
        Soy un carrito
        {cart.length === 0 ? (
          <p>0</p>
        ) : (
          cart.map((products) => (
            <Card
              key={products.id}
              products={products}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
      </h1>
    </>
  );
};
export default Cart;
