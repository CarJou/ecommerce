import React from "react";

const ProductImage = ({ product }) => {
  return (
    <div className="container_img">
      <img src={product.img} alt="img product" className="imgCard" />
    </div>
  );
};
export default ProductImage;
