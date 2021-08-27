import React, { useState, useContext } from "react";
import Cart from "../../assets/icons/shopping-cart.svg";
import { ProductContext } from "../../context/ProductContext";

const ButtonAdd = ({ id }) => {
  const { products, setProducts, cart, setCart } = useContext(ProductContext);

  const addProduct = () => {
    const product = products.filter((products) => products.id === products.id);
    console.log("Hola", id);
    setCart([...cart, ...products]);
  };
  //console.log(id);

  return (
    <div className="buttonContainer">
      <button onClick={() => addProduct(products.id)} className="addButton">
        <img src={Cart} alt="shopping cart" className="icon_cart" />
      </button>
    </div>
  );
};
export default ButtonAdd;
