import React from "react";
import "./App.css";
import Cover from "./conponents/Cover-Page/Cover";
import Navbar from "./conponents/Navbar/Navbar";
import Card from "./conponents/Card-preview/Card";
import Content from "./conponents/Content/Content";
import List from "./conponents/Sub Navbar/List";
import { Route, Routes } from "react-router-dom";
import Chair from "./conponents/Sub Navbar/pages/Chair";
import All from "./conponents/Sub Navbar/pages/All";
import Couch from "./conponents/Sub Navbar/pages/Couch";
import Table from "./conponents/Sub Navbar/pages/Table";
import Home from "./conponents/Sub Navbar/pages/Home";
import Bed from "./conponents/Sub Navbar/pages/Bed";
import Shop from "./conponents/Shop/Shop";
import Testimonial from "./conponents/Testmonial/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <Content />
      <Card />
      <List />
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/chair" element={<Chair />} />
        <Route path="/couch" element={<Couch />} />
        <Route path="/table" element={<Table />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bed" element={<Bed />} />
      </Routes>
      <Shop />
      <Testimonial />
    </div>
  );
};

export default App;
