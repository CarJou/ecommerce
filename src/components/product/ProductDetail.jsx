import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ match }) => {
  const { id } = useParams();

  return <>Product id: {id}</>;
};
export default ProductDetail;
