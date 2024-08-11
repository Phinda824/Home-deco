import React from "react";

import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import CommonSection from "../conponents/UI/CommonSection";
import "../styles/product-details.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

  return (
    <div>
      <CommonSection />

      <div className="detail_container">
        <div className="img_container">
          <img src={imgUrl} alt="" />
        </div>

        <div className="product_details">
          <h2>{productName}</h2>
          <div className="product_rating">
            <div className="stars">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star-half-stroke"></i>
              </span>
            </div>

            <p>
              (<span>{avgRating}</span> ratings)
            </p>
          </div>

          <div className="product_price">${price}</div>
          <div className="product_desc">{shortDesc}</div>

          <button className="buy_btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
