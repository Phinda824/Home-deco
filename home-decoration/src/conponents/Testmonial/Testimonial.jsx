import React from "react";
import "./Testimonial.css";
import face1 from "/images/face1.png";
import face2 from "/images/face2.jpg";

const Testimonial = () => {
  return (
    <div className="testimony">
      <div className="testimony-container">
        <div className="person">
          <div className="person-face">
            <img src={face1} alt="" />
          </div>
          <div className="name">Fiona Helen</div>
          <div className="quotes">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum
            esse explicabo non fugiat quis.
          </p>
        </div>
        <div className="person">
          <div className="person-face">
            <img src={face2} alt="" />
          </div>
          <div className="name">Fiona Helen</div>
          <div className="quotes">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum
            esse explicabo non fugiat quis.
          </p>
        </div>
        <div className="person">
          <div className="person-face">
            <img src={face2} alt="" />
          </div>
          <div className="name">Fiona Helen</div>
          <div className="quotes">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum
            esse explicabo non fugiat quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
