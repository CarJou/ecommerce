import React from "react";
import Cart from "../../assets/icons/cart-nav.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container_navbar">
      <Link to="/" className="link_none">
        <h1 className="brand_name">AeroTec</h1>
      </Link>
      <div className="buttons_navbar">
        <img className="cart_brand" src={Cart} alt="shopping cart" />
        <Link to="/login">
          <button className="button_signin">Sign in</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
