import React from "react";
import ButtonAdd from "./ButtonAdd";
import { Link } from "react-router-dom";

const ContentCard = ({ product, setProducts }) => {
  return (
    <>
      <Link
        to={`/product/${product.id}`}
        key={product.id}
        className="link_none"
      >
        <h1 className="titleCard">{product.title}</h1>
      </Link>
      <div className="container_flex">
        <h2 className="priceCard">${product.price}</h2>
        <ButtonAdd
          id={product.id}
          product={product}
          setProducts={setProducts}
        />
      </div>
    </>
  );
};
export default ContentCard;
