import React from "react";
import "./Content.css";
import { motion } from "framer-motion";

import chair8 from "/images/chair8.webp";
import couch2 from "/images/couch2.webp";
import table1 from "/images/Table1.jpg";
import tvStand1 from "/images/Tv-stand1.webp";

const Content = () => {
  return (
    <div className="content-section">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        See Our Quality Product
      </motion.h1>
      <div className="content-sect">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={chair8} alt="" />
          </div>
          <p>Comfortable Chair</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 1,
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={tvStand1} alt="" />
          </div>
          <p>Tv Stand</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
        </motion.div>
        <div className="card-sect">
          <div className="image">
            <img src={couch2} alt="" />
          </div>
          <p>Comfortable Couch</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
        </div>
        <div className="card-sect">
          <div className="image">
            <img src={table1} alt="" />
          </div>
          <p>Coffee Table</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
        </div>
      </div>

      <div className="product-btn">
        <button className="btn">Vie All Products</button>
      </div>
    </div>
  );
};

export default Content;
