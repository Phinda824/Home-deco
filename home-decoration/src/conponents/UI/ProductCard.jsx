import React, { useEffect, useState } from "react";

import "../../styles/product-card.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={item.imgUrl} alt="" />
      </div>
      <div className="product_info">
        <h3 className="product_name">
          <Link to={`/shop/$item.id`}>{item.productName}</Link>
        </h3>
        <span>{item.category}</span>
      </div>
      <div className="product_card-bottom">
        <span className="price">${item.price}</span>
        <span>
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
