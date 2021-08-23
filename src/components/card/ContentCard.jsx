import React from "react";

const ContentCard = ({ product }) => {
  return (
    <>
      <h1 className="titleCard">{product.title}</h1>
      <h2 className="priceCard">${product.price}</h2>
    </>
  );
};
export default ContentCard;
