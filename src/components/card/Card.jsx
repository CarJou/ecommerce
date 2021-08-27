import React, { useContext, useState } from "react";
import ProductImage from "./ProductImage";
import LikeButton from "./LikeButton";
import { ProductContext } from "../../context/ProductContext";
import ContentCard from "./ContentCard";

const Card = () => {
  const { products, setProducts, cart, setCart } = useContext(ProductContext);
  console.log(setProducts);

  return (
    <section className="container">
      {products.map((product) => {
        return (
          <div className="card_container" key={product.id}>
            <LikeButton />
            <ProductImage product={product} />
            <ContentCard product={product} setProducts={setProducts} />
          </div>
        );
      })}
    </section>
  );
};
export default Card;
