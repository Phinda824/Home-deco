import React from "react";
import ProductCard from "./ProductCard";
import "../../styles/flex.css";

const ProductList = ({ data }) => {
  return (
    <div className="item_container">
      {data?.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

export default ProductList;
