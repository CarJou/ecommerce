import React from "react";
import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
import AlertsState from "./context/alerts/alertsState";

function Routes() {
  return (
    <AlertsState>
      <Router>
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myproducts" component={Cart} />
        <Route exact path="/register" component={Register} />
      </Router>
    </AlertsState>
  );
}

export default Routes;
