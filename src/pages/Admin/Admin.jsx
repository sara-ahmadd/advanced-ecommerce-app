import React from "react";
import "./_Admin.scss";
import AdminSidebar from "./AdminSidebar";
import ProductsList from "./ProductsList";
const Admin = () => {
  return (
    <section className="container custom-container">
      <AdminSidebar />
      <ProductsList />
    </section>
  );
};

export default Admin;
