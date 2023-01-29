import React from "react";
import "./_Admin.scss";
import ProductsList from "./ProductsList";
const Admin = () => {
  return (
    <section className="container custom-container">
      <ProductsList />
    </section>
  );
};

export default Admin;
