import React from "react";
import Slider from "./Slider";
import ProductsList from "./ProductsList";

const Home = () => {
  return (
    <section className="container custom-container">
      <Slider />
      <ProductsList />
    </section>
  );
};

export default Home;
