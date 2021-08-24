import React from "react";
import Cart from "../../assets/icons/shopping-cart.svg";
const ButtonAdd = () => {
  function add() {
    console.log("click");
  }
  return (
    <div className="buttonContainer">
      <button onClick={add} className="addButton">
        <img src={Cart} alt="shopping cart" className="icon_cart" />
      </button>
    </div>
  );
};
export default ButtonAdd;
