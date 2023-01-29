import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/GeneralComponents/Loader";
const ProductsList = () => {
  let productsURL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState({
    loading: true,
    ProductList: [],
    error: "",
    category: "",
  });

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

  return (
    <div>
      <h1 className="text-success">Products</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <td className="fs-2">ID</td>
            <td className="fs-2">Product</td>
            <td className="fs-2">Category</td>
            <td className="fs-2">Price</td>
            <td className="fs-2">Operation</td>
          </tr>
        </thead>
        <tbody>
          {products.loading && (
            <tr>
              <td className="fs-1">
                <Loader />
              </td>
            </tr>
          )}
          {products.ProductList ? (
            products.ProductList.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{p.price}$</td>
                <td className="d-flex gap-3 pb-4">
                  <Link
                    to={`/admin/products/${p.id}`}
                    className="btn submit-btn"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/admin/products/${p.id}`}
                    className="btn submit-btn"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => {
                      // deleteProduct(p);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="fs-3">No Products To Show..🙁</tr>
          )}
          {products.error && (
            <tr>
              <td>Somthing Went Wrong!..</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
