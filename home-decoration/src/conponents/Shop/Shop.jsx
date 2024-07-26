import React from "react";
import "./Shop.css";
import background from "/images/image.jpg";

const Shop = () => {
  return (
    <div className="shop-container">
      <img src={background} alt="" />
      <div className="shop-text">
        <i class="fa-solid fa-store"></i>
        <div className="descr">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            labore delectus neque tenetur dolores inventore.
          </p>
          <button className="btn-sop">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
