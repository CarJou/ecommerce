import React, { useContext } from "react";
import ProductImage from "./ProductImage";
import LikeButton from "./LikeButton";
import { ProductContext } from "../../context/ProductContext";
import ContentCard from "./ContentCard";
import { Link } from "react-router-dom";
const Card = () => {
  const { products } = useContext(ProductContext);
  return (
    <section className="container">
      {products.map((product) => {
        return (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="card_container">
              <LikeButton />
              <ProductImage product={product} />
              <ContentCard product={product} />
            </div>
          </Link>
        );
      })}
    </section>
  );
};
export default Card;
