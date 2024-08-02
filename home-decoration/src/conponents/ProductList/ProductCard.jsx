import React from "react";
import "../../styles/productCard.css";
import chair8 from "/images/chair8.webp";
import couch2 from "/images/couch2.webp";
import table1 from "/images/Table1.jpg";
import tvStand1 from "/images/Tv-stand1.webp";
import chair11 from "/images/chair11.jpg";
import bedroomtable from "/images/bedroomtable.jpg";
import table2 from "/images/table2.jpg";
import couch3 from "/images/couch3.jpg";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="content-section">
      <div className="content-sect">
        <div className="card-sect">
          <div className="image">
            <img src={chair8} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Comfortable Chair</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card-sect">
          <div className="image">
            <img src={couch2} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Comfortable Couch</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card-sect">
          <div className="image">
            <img src={tvStand1} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Tv Stand</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card-sect">
          <div className="image">
            <img src={table1} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Coffee Table</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
