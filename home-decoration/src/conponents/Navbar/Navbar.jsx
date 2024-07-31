import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="nav">
      <div className="logo">
        <p>H.Decor</p>
      </div>
      <ul>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/">Home</Link> {menu == "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/shop">Shop</Link>
          {menu == "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link to="/about">About Us</Link>
          {menu == "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contacts");
          }}
        >
          <Link to="/contacts">Contacts</Link>
          {menu == "contacts" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="rigth-side">
        <div className="nav-login">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <i class="fa-solid fa-bag-shopping"></i>
          </Link>
          <div className="cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
