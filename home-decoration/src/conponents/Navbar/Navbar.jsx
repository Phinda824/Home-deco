import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <p>H.Decor</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Contacts</li>
      </ul>
      <div className="rigth-side">
        <div className="search">
          <input type="text" placeholder="Search" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <div className="dot">
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
