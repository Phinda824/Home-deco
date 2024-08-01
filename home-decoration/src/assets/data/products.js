import chair8 from "/images/chair8.webp";
import couch2 from "/images/couch2.webp";
import table1 from "/images/Table1.jpg";
import tvStand1 from "/images/Tv-stand1.webp";
import chair11 from "/images/chair11.jpg";
import bedroomtable from "/images/bedroomtable.jpg";
import table2 from "/images/table2.jpg";
import couch3 from "/images/couch3.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    id: "0",
    img: chair8,
    category: "Comfortable Chair",
    rate: "4.5",
    price_before: "R 2499.99",
    price_now: "R 9999.99",
  },
  {
    img: couch2,
    category: "Comfortable Couch",
    rate: "4.5",
    price_before: "R 2499.99",
    price_now: "R 9999.99",
  },
  {
    img: tvStand1,
    category: "TV Stand",
    rate: "4.5",
    price_before: "R 2499.99",
    price_now: "R 9999.99",
  },
  {
    img: table1,
    category: "Coffee Table",
    rate: "4.5",
    price_before: "R 2499.99",
    price_now: "R 9999.99",
  },
  {
    img: chair11,
    category: "Flat wooden Dining Chair",
    rate: "4.5",
    price_before: "R 2499.99",
    price_now: "R 9999.99",
  },
];

export default products;
