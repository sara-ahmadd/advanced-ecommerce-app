import React from "react";
import Slider from "./Slider";
import Products from "./Products";

const Home = () => {
  return (
    <section className="container custom-container">
      <Slider />
      <Products />
    </section>
  );
};

export default Home;
