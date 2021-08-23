import React, { useContext } from "react";
import ProductImage from "./ProductImage";
import ButtonAdd from "./ButtonAdd";
import LikeButton from "./LikeButton";
import { ProductContext } from "../../context/ProductContext";
import ContentCard from "./ContentCard";

const Card = () => {
  const { products } = useContext(ProductContext);
  console.log("holu", products);
  return (
    <section className="container">
      {products.map((product) => {
        return (
          <div className="card_container" key={product.id}>
            <LikeButton />
            <ProductImage product={product} />
            <ContentCard product={product} />
          </div>
        );
      })}
    </section>
  );
};
export default Card;
