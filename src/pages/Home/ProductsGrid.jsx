import React from "react";
import Loader from "../../components/GeneralComponents/Loader";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products = [] }) => {
  return (
    <div className="container ">
      <div className="row my-4 align-items-strech">
        {products.loading && (
          <>
            <Loader />
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        )}
        {products.ProductList
          ? products.ProductList.map((p) => (
              <div
                key={p.id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 "
              >
                <ProductCard product={p} />
              </div>
            ))
          : null}
        {products.error && <h1>Somthing Went Wrong!..'{products.error}'</h1>}
      </div>
    </div>
  );
};

export default ProductsGrid;
