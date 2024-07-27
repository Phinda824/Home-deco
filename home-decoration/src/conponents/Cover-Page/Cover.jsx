import React from "react";
import "./Cover.css";
import { motion } from "framer-motion";
import couch1 from "/images/couch1.png";

const Cover = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-text">
          <div className="heading">
            Make Your Interior More Minimalistic & Modern
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni modi
            animi harum sit reprehenderit incidunt est distinctio cumque!
            Quaerat, hic!
          </p>
          <div className="shop-btn">
            <button className="submit">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="card-block">
        <div className="card-preview">
          <div className="block">
            <div className="icon">
              <i class="fa-solid fa-pen-ruler"></i>
            </div>
            <p>Great design at nice prices</p>
          </div>
          <div className="block">
            <div className="icon">
              <i class="fa-solid fa-rotate"></i>
            </div>
            <p>14 days to change your mind</p>
          </div>
          <div className="block">
            <div className="icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <p>In-room Delivery of your Furniture</p>
          </div>
          <div className="block">
            <div className="icon">
              <i class="fa-solid fa-tag"></i>
            </div>
            <p>12 Months Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
