import React from "react";
import "./Service.css";

const Service = () => {
  return (
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
  );
};

export default Service;
