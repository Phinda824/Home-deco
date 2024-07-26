import React, { useState } from "react";
import "./Couch.css";
import couch4 from "/images/couch4.webp";
import couch5 from "/images/couch5.webp";
import couch6 from "/images/couch6.webp";

const Couch = () => {
  const image = [
    {
      id: 0,
      value: couch6,
      name: "Armchair",
      price: "R2999.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus inventore officia consequatur quibusdam ullam.",
    },
    {
      id: 1,
      value: couch5,
      name: "Couch",
      price: "R2999.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quibusdam.",
    },
    {
      id: 2,
      value: couch4,
      name: "Table Chair",
      price: "R2999.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore quisquam nostrum.",
    },
  ];
  const [sliderData, setsliderData] = useState(image[0]);
  const handleClick = (index) => {
    const slider = image[index];
    setsliderData(slider);
  };
  return (
    <div className="couch-container">
      <div className="image-couch">
        <div className="big-card">
          <img src={sliderData.value} alt="" />
        </div>
        <div className="couch-list">
          {image.map((data, i) => (
            <div className="pick-couch">
              <img
                key={data.id}
                src={data.value}
                onClick={() => handleClick(i)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-couch">
        <h1>{sliderData.name}</h1>
        <div className="price-rate">
          <div className="price">{sliderData.price}</div>
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="descript">{sliderData.description}</div>
        <div className="deliver">
          <i class="fa-solid fa-truck-fast"></i>
          <p>6-8 Weeks Delivery</p>
        </div>
        <button className="btn-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Couch;
