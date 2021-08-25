import React from "react";
import Cart from "../../assets/icons/cart-nav.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container_navbar">
      <Link to="/home">
        <h1 className="brand_name">AeroTec</h1>
      </Link>
      <img className="cart_brand" src={Cart} alt="shopping cart" />
    </div>
  );
};
export default Navbar;
