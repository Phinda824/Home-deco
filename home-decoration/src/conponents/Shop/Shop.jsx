import React from "react";
import "./Shop.css";
import background from "/images/image.jpg";

const Shop = () => {
  return (
    <div className="shop-container">
      <img src={background} alt="" />
      <div className="shop-text">
        <i class="fa-thin fa-shop"></i>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          sequi. Autem, numquam ut! Quas, repellendus.
        </p>
      </div>
    </div>
  );
};

export default Shop;
