import React, { useEffect, useState } from "react";
import "../styles/home.css";

import { Link } from "react-router-dom";
import products from "../assets/data/products";

import Service from "../conponents/Services/Service";
import ProductList from "../conponents/UI/ProductList";
import Collections from "../conponents/Collections/Collections";
import BestProducts from "../conponents/Best_Products/BestProducts";
import BestShoping from "../conponents/shoping/BestShoping";
import Testimonial from "../conponents/Testmonial/Testimonial";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category == "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category == "sofa"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

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
        <Service />
      </div>

      <div className="sales-container">
        <div className="product-section">
          <h1>See Our Quality Product</h1>
          <ProductList data={trendingProducts} />
        </div>
        <div className="collections">
          <h1>New Collections</h1>
          <Collections />
        </div>
        <div className="sales">
          <h1>Our Best Sales</h1>
          <ProductList data={bestSalesProducts} />
        </div>
        <BestShoping />
        <div className="sales">
          <h1>Testimonial</h1>
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
