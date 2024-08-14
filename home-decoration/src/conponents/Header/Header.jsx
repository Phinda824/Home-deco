import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

import { useSelector } from "react-redux";

const nav_links = [
  {
    path: "home",
    display: "home",
  },
  {
    path: "shop",
    display: "shop",
  },
  {
    path: "cart",
    display: "cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="navbar">
      <div className="top_nav">
        <div className="logo">
          <i class="fa-solid fa-chair"></i>
          <p>H.Decor</p>
        </div>

        <div className="rigth_side">
          <div className="nav_login">
            <button>Login</button>
          </div>
          <div className="nav_icons">
            <span className="fav_icon">
              <i class="fa-regular fa-heart"></i>
              <span className="count">0</span>
            </span>
            <span className="cart_icon" onClick={navigateToCart}>
              <i class="fa-solid fa-bag-shopping"></i>
              <span className="count">{totalQuantity}</span>
            </span>
          </div>

          <div className="menu_icon">
            <span onClick={menuToggle}>
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </div>

      <ul className="menu" ref={menuRef} onClick={menuToggle}>
        {nav_links.map((item, index) => (
          <li className="nav_item" key={index}>
            <NavLink
              to={item.path}
              className={(navClass) => (navClass.isActive ? "nav_active" : "")}
            >
              {item.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
