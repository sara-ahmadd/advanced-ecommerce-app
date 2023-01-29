import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import Loader from "../../components/GeneralComponents/Loader";
const ProductsList = () => {
  let productsURL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState({
    loading: true,
    ProductList: [],
    error: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  const getAllProducts = () => {
    axios
      .get(productsURL)
      .then((res) => {
        setProducts({
          loading: false,
          ProductList: res.data,
          error: "",
          category: "",
        });
      })
      .catch((err) =>
        setProducts({
          loading: false,
          ProductList: [],
          error: err.message,
          category: "",
        })
      );
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const getIntoCategory = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setCategories(res.data);
        setProducts({
          loading: false,
          ProductList: res.data,
          error: "",
          category: "",
        });
      });
  };

  return (
    <div className="pt-5 ">
      <h1 className="fs-3 text-center text-success">
        BROWSE OUR NEW COLLECTION
      </h1>
      <Categories getCategory={getIntoCategory} getAll={getAllProducts} />
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
          {products.ProductList &&
            products.ProductList.map((p) => (
              <div
                key={p.id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 "
              >
                <ProductCard product={p} />
              </div>
            ))}
          {products.error && <h1>Somthing Went Wrong!..'{products.error}'</h1>}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
