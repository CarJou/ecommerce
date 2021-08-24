import React from "react";
import Cart from "../../assets/icons/cart-nav.svg";

const Navbar = () => {
  return (
    <div className="container_navbar">
      <h1 className="brand_name">AeroTec</h1>
      <img className="cart_brand" src={Cart} alt="shopping cart" />
    </div>
  );
};
export default Navbar;
