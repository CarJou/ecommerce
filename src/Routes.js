import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/Sign_in/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
function Routes() {
  return (
    <Router>
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/myproducts" component={Cart} />
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default Routes;
