import React, { useState } from "react";
import "./All.css";
import table5 from "/images/table5.png";
import chair3 from "/images/chair3.webp";
import chair4 from "/images/chair4.png";

const Table = () => {
  const image = [
    {
      id: 0,
      value: chair4,
      name: "Armchair",
      price: "R2999.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus inventore officia consequatur quibusdam ullam.",
    },
    {
      id: 1,
      value: chair3,
      name: "Couch",
      price: "R2999.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quibusdam.",
    },
    {
      id: 2,
      value: table5,
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
    <div className="all-container">
      <div className="image-side">
        <div className="big-img">
          <img src={sliderData.value} alt="" />
        </div>
        <div className="chair-list">
          {image.map((data, i) => (
            <div className="pick-img">
              <img
                key={data.id}
                src={data.value}
                onClick={() => handleClick(i)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-side">
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

export default Table;
