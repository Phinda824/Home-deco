import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./List.css";

const List = () => {
  return (
    <nav>
      <h1>Our Porduct Categories</h1>
      <ul>
        <li>
          <NavLink to="/All">All</NavLink>
        </li>
        <li>
          <NavLink to="/chair">Chair</NavLink>
        </li>
        <li>
          <NavLink to="/couch">Couch</NavLink>
        </li>
        <li>
          <NavLink to="/table">Table</NavLink>
        </li>
        <li>
          <NavLink to="/bed">Bed</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default List;
