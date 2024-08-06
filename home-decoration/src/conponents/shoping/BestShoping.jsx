import React from "react";
import "../../styles/bestShoping.css";
import background from "/images/image.jpg";
import { Link } from "react-router-dom";

const BestShoping = () => {
  return (
    <div className="shop_container">
      <img src={background} alt="" />
      <div className="shop_text">
        <i class="fa-solid fa-store"></i>
        <div className="descr">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            labore delectus neque tenetur dolores inventore.
          </p>
          <div className="btn-container">
            <button className="btn_sop">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestShoping;
