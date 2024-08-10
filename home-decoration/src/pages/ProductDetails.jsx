import React from "react";

import { useParams } from "react-router-dom";
import products from "../conponents/UI/ProductList";
import CommonSection from "../conponents/UI/CommonSection";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  const { imgUrl, productName, price, avgRating, review, description } =
    product;

  return (
    <div>
      <CommonSection />

      <section>
        <div className="detail_container">
          <img src={imgUrl} alt="" />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
