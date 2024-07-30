import React, { useState } from "react";
import "./Navbar.css";

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
          Home {menu == "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop{menu == "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          About Us{menu == "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contacts");
          }}
        >
          Contacts{menu == "contacts" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="rigth-side">
        <div className="nav-login">
          <button>Login</button>
        </div>
        <div className="cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <div className="cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
