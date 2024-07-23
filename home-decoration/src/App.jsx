import React from "react";
import "./App.css";
import Cover from "./conponents/Cover-Page/Cover";
import Navbar from "./conponents/Navbar/Navbar";
import Card from "./conponents/Card-preview/Card";
import Content from "./conponents/Content/Content";

const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <Card />
      <Content />
    </div>
  );
};

export default App;
