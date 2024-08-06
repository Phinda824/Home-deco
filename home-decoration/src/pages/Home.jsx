import React, { useEffect, useState } from "react";
import "../styles/home.css";

import { Link } from "react-router-dom";
import products from "../assets/data/products";

import Service from "../conponents/Services/Service";
import ProductCard from "../conponents/ProductList/ProductCard";
import Collections from "../conponents/Collections/Collections";
import List from "../conponents/Sub Navbar/List";
import BestProducts from "../conponents/Best_Products/BestProducts";
import BestShoping from "../conponents/shoping/BestShoping";

const Home = () => {
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
            <button className="submit">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>

      <Service />
      <div className="sales-container">
        <div className="product-section">
          <h1>See Our Quality Product</h1>
          <ProductCard />
        </div>
        <div className="collections">
          <h1>New Collections</h1>
          <Collections />
        </div>
        <div className="sales">
          <h1>Our Best Sales</h1>
          <BestProducts />
        </div>
        <BestShoping />
      </div>
    </div>
  );
};

export default Home;
