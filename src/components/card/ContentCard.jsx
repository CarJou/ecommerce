import React from "react";
import ButtonAdd from "./ButtonAdd";

const ContentCard = ({ product }) => {
  return (
    <>
      <h1 className="titleCard">{product.title}</h1>
      <div className="container_flex">
        <h2 className="priceCard">${product.price}</h2>
        <ButtonAdd />
      </div>
    </>
  );
};
export default ContentCard;
