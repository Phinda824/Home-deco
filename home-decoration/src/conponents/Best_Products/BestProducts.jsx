import React, { useState } from "react";
import "../../styles/bestProducts.css";

import chair1 from "/images/chair1.webp";
import chair3 from "/images/chair3.webp";
import chair4 from "/images/chair4.png";
import chair5 from "/images/chair5.jpg";
import table2 from "/images/table2.jpg";
import couch5 from "/images/couch5.webp";
import couch4 from "/images/couch4.webp";
import tvstand1 from "/images/tvstand1.png";

import { Link } from "react-router-dom";

const BestProducts = () => {
  const [action, setAction] = useState(true);

  return (
    <div className="content_section">
      <div className="content_sect">
        <div className="card_sect">
          <div className="image">
            <img src={chair1} alt="" />
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

        <div className="card_sect">
          <div className="image">
            <img src={chair3} alt="" />
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

        <div className="card_sect">
          <div className="image">
            <img src={chair4} alt="" />
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

        <div className="card_sect">
          <div className="image">
            <img src={chair5} alt="" />
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

      <div className="content_sect">
        <div className="card_sect">
          <div className="image">
            <img src={chair1} alt="" />
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

        <div className="card_sect">
          <div className="image">
            <img src={chair3} alt="" />
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

        <div className="card_sect">
          <div className="image">
            <img src={chair4} alt="" />
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

        <div className="card_sect">
          <div className="image">
            <img src={chair5} alt="" />
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
      {action ? (
        <div></div>
      ) : (
        <div className="content_sect">
          <div className="card_sect">
            <div className="image">
              <img src={couch5} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Flat wooden Dining Chair</Link>
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

          <div className="card_sect">
            <div className="image">
              <img src={couch4} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Flat wooden Dining Chair</Link>
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

          <div className="card_sect">
            <div className="image">
              <img src={table2} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Flat wooden Dining Chair</Link>
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

          <div className="card_sect">
            <div className="image">
              <img src={tvstand1} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Flat wooden Dining Chair</Link>
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

export default BestProducts;
