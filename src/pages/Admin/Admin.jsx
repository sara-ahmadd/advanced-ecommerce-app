import React from "react";
import "./_Admin.scss";
import AdminSidebar from "./AdminSidebar";
import GetAllProducts from "../../components/products/GetAllProducts";
const Admin = () => {
  return (
    <section className="container custom-container">
      <AdminSidebar />
      <GetAllProducts page={"admin"} />
    </section>
  );
};

export default Admin;
