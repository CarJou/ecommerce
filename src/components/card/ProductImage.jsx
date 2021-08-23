import React from "react";

const ProductImage = ({ product }) => {
  return (
    <>
      <img src={product.img} alt="img product" className="imgCard" />
    </>
  );
};
export default ProductImage;
