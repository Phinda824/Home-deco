import React from "react";
import "./Content.css";
import { motion } from "framer-motion";

import chair8 from "/images/chair8.webp";
import couch2 from "/images/couch2.webp";
import table1 from "/images/Table1.jpg";
import tvStand1 from "/images/Tv-stand1.webp";
import chair11 from "/images/chair11.jpg";
import bedroomtable from "/images/bedroomtable.jpg";
import table2 from "/images/table2.jpg";
import couch3 from "/images/couch3.jpg";

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
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
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
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
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
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={couch2} alt="" />
          </div>
          <p>Comfortable Couch</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={table1} alt="" />
          </div>
          <p>Coffee Table</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </motion.div>
      </div>
      <div className="content-sect">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={chair11} alt="" />
          </div>
          <p>Flat wooden Dining Chair</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={bedroomtable} alt="" />
          </div>
          <p>Tv Stand</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={table2} alt="" />
          </div>
          <p>Comfortable Couch</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            opacity: { duration: 0.2 },
            ease: "easeIn",
          }}
          className="card-sect"
        >
          <div className="image">
            <img src={couch3} alt="" />
          </div>
          <p>Valvet sleeper couch</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R2999.99</div>
            <div className="current">R1999.99</div>
          </div>
        </motion.div>
      </div>

      <div className="product-btn">
        <button className="btn">Vie All Products</button>
      </div>
    </div>
  );
};

export default Content;
