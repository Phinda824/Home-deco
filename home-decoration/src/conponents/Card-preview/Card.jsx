import React from "react";
import "./Card.css";
import preview3 from "/images/preview3.jpg";
import preview from "/images/preview.jpeg";

const Card = () => {
  return (
    <div className="container-prev">
      <div className="cover">
        <img src={preview3} alt="" />
        <div className="text">New Dinning Collection</div>
      </div>
      <div className="cover">
        <img src={preview} alt="" />
        <div className="text">New Dinning Collection</div>
      </div>
    </div>
  );
};

export default Card;
