import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default Routes;
