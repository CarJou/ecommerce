import React from "react";
import Cart from "../../assets/icons/shopping-cart.png";
const ButtonAdd = ({ key }) => {
  function add() {
    console.log("click");
  }
  return (
    <div className="buttonContainer">
      <button onClick={add} key={key} className="addButton">
        <img src={Cart} alt="shopping cart" className="icon_cart" /> Add to card
      </button>
    </div>
  );
};
export default ButtonAdd;
