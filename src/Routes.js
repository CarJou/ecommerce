import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";

function Routes() {
  return (
    <Router>
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default Routes;
