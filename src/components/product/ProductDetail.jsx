import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Card from "../card/Card";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};
export default ProductDetail;
