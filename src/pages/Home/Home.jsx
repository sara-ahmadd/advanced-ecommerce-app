import React from "react";
import Slider from "./Slider";

import GetAllProducts from "../../components/products/GetAllProducts";

const Home = () => {
  return (
    <section className="container custom-container">
      <Slider />
      <GetAllProducts page={"home"} />
    </section>
  );
};

export default Home;
