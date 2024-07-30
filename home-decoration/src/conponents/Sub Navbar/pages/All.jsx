import React, { useState } from "react";
import "./All.css";
import chair1 from "/images/chair1.webp";
import chair3 from "/images/chair3.webp";
import chair4 from "/images/chair4.png";
import chair5 from "/images/chair5.jpg";
import table2 from "/images/table2.jpg";
import couch5 from "/images/couch5.webp";
import couch4 from "/images/couch4.webp";
import tvstand1 from "/images/tvstand1.png";
import tvstand3 from "/images/tvstand3.jpg";

const All = () => {
  const [action, setAction] = useState(true);

  return (
    <div className="items-container">
      <div className="content-items">
        <div className="item-card">
          <div className="item-img">
            <img src={chair1} alt="" />
          </div>
          <div className="name-cart">
            <h1>Dinning Chair</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
        <div className="item-card">
          <div className="item-img">
            <img src={tvstand3} alt="" />
          </div>
          <div className="name-cart">
            <h1>Dinning Chair</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
        <div className="item-card">
          <div className="item-img">
            <img src={table2} alt="" />
          </div>
          <div className="name-cart">
            <h1>Dinning Chair</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
        <div className="item-card">
          <div className="item-img">
            <img src={chair4} alt="" />
          </div>
          <div className="name-cart">
            <h1>Dinning Chair</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
      </div>

      <div className="content-items">
        <div className="item-card">
          <div className="item-img">
            <img src={chair5} alt="" />
          </div>
          <div className="name-cart">
            <h1>Dinning Chair</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
        <div className="item-card">
          <div className="item-img">
            <img src={couch5} alt="" />
          </div>
          <div className="name-cart">
            <h1>Dinning Chair</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
        <div className="item-card">
          <div className="item-img">
            <img src={couch4} alt="" />
          </div>
          <div className="name-cart">
            <h1>Dinning Chair</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
        <div className="item-card">
          <div className="item-img">
            <img src={tvstand1} alt="" />
          </div>
          <div className="name-cart">
            <h1>Tv Stand</h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="items-rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="item-prices">
            <div className="current-p">R 3000.00</div>
            <div className="past-p">R 3000.00</div>
          </div>
        </div>
      </div>

      {action ? (
        <div></div>
      ) : (
        <div className="content-items">
          <div className="item-card">
            <div className="item-img">
              <img src={chair5} alt="" />
            </div>
            <div className="name-cart">
              <h1>Dinning Chair</h1>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="items-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="item-prices">
              <div className="current-p">R 3000.00</div>
              <div className="past-p">R 3000.00</div>
            </div>
          </div>
          <div className="item-card">
            <div className="item-img">
              <img src={couch5} alt="" />
            </div>
            <div className="name-cart">
              <h1>Dinning Chair</h1>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="items-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="item-prices">
              <div className="current-p">R 3000.00</div>
              <div className="past-p">R 3000.00</div>
            </div>
          </div>
          <div className="item-card">
            <div className="item-img">
              <img src={couch4} alt="" />
            </div>
            <div className="name-cart">
              <h1>Dinning Chair</h1>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="items-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="item-prices">
              <div className="current-p">R 3000.00</div>
              <div className="past-p">R 3000.00</div>
            </div>
          </div>
          <div className="item-card">
            <div className="item-img">
              <img src={tvstand1} alt="" />
            </div>
            <div className="name-cart">
              <h1>Tv Stand</h1>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="items-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="item-prices">
              <div className="current-p">R 3000.00</div>
              <div className="past-p">R 3000.00</div>
            </div>
          </div>
        </div>
      )}

      <div className="product-btn" onClick={() => setAction(!action)}>
        {action ? (
          <button className="btn">View All Products</button>
        ) : (
          <button className="btn">Show Less</button>
        )}
      </div>
    </div>
  );
};

export default All;
