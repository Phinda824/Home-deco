import React from "react";
import "./Cover.css";
import { motion } from "framer-motion";
import couch1 from "/images/couch1.png";

const Cover = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="heading"
          >
            Make Your Interior More Minimalistic & Modern
          </motion.div>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni modi
            animi harum sit reprehenderit incidunt est distinctio cumque!
            Quaerat, hic!
          </motion.p>
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
            className="shop-btn"
          >
            Shop Now
          </motion.button>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
          }}
          className="right-side"
        >
          <img src={couch1} alt="" />
        </motion.div>
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
