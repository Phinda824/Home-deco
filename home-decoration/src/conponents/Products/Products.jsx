import React from "react";
import "./Products.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chair8 from "/images/chair8.webp";
import couch1 from "/images/couch1.png";
import couch2 from "/images/couch2.webp";
import table1 from "/images/Table1.jpg";
import tvstand1 from "/images/Tv-stand1.webp";
import table2 from "/images/table2.jpg";
import table3 from "/images/table3.png";

const data = [
  {
    img: chair8,
    name: "Chair",
    rate: "4.5",
    beforPrice: "3599.99",
    price: "2999.99",
  },
  {
    img: tvstand1,
    name: "Chair",
    rate: "5.0",
    beforPrice: "3599.99",
    price: "2999.99",
  },
  {
    img: table1,
    name: "Chair",
    rate: "5.0",
    beforPrice: "3599.99",
    price: "2999.99",
  },
  {
    img: couch2,
    name: "Chair",
    rate: "5.0",
    beforPrice: "3599.99",
    price: "2999.99",
  },
  {
    img: tvstand1,
    name: "Chair",
    rate: "5.0",
    beforPrice: "3599.99",
    price: "2999.99",
  },
  {
    img: table2,
    name: "Chair",
    rate: "5.0",
    beforPrice: "3599.99",
    price: "2999.99",
  },
  {
    img: table3,
    name: "Chair",
    rate: "5.0",
    beforPrice: "3599.99",
    price: "2999.99",
  },
];

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="product-container">
      <div className="content-p">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="card-p">
              <div className="section-p">
                <img src={d.img} alt="" />
              </div>

              <div className="p-text">
                <h1>{d.name}</h1>
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <div className="p-rate">{d.rate}</div>
                </div>
                <div className="price-p">
                  <div className="before-p">R{d.beforPrice}</div>
                  <div className="price-p">R{d.price}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
