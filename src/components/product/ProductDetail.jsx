import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return <>Product id: {id}</>;
};
export default ProductDetail;
