import React from "react";
import "./Content.css";
import chair8 from "/images/chair8.webp";
import chair7 from "/images/chair7.avif";
import chair9 from "/images/chair9.jpg";

const Content = () => {
  return (
    <div className="content-section">
      <h1>See Our Quality Product</h1>
      <div className="content-sect">
        <div className="card-sect">
          <div className="image">
            <img src={chair8} alt="" />
          </div>
          <p>Leather Cover Sofa</p>
          <div className="price">R800.00</div>
        </div>
        <div className="card-sect">
          <div className="image">
            <img src={chair7} alt="" />
          </div>
          <p>Leather Cover Sofa</p>
          <div className="price">R800.00</div>
        </div>
        <div className="card-sect">
          <div className="image">
            <img src={chair9} alt="" />
          </div>
          <p>Leather Cover Sofa</p>
          <div className="price">R800.00</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
