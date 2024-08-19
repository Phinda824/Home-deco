import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <div className="search_container">
        <input type="text" placeholder="Search Furniture..." />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Search;
