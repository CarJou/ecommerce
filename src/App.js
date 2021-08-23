import React from "react";
import Routes from "./Routes";
import "./styles/style.scss";
import ProductProvider from "./context/ProductContext";
function App() {
  return (
    <>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </>
  );
}

export default App;
