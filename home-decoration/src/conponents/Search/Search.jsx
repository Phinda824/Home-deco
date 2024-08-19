import React, { useState } from "react";
import "./Search.css";

import products from "../../assets/data/products";

const Search = () => {
  const [productsData, setProductsData] = useState(products);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchProducts);
  };

  return (
    <div>
      <div className="search_container">
        <input
          type="text"
          placeholder="Search Furniture..."
          onChange={handleSearch}
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Search;
