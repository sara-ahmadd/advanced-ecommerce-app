import React from "react";
import Loader from "../../components/GeneralComponents/Loader";
import { Link } from "react-router-dom";

const ProductsTable = ({ products, currentProducts, deleteProductAlert }) => {
  return (
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
        {currentProducts ? (
          currentProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.productId}</td>
              <td>{p.title}</td>
              <td>{p.category}</td>
              <td>{p.price}$</td>
              <td className="d-flex gap-3 pb-4">
                <Link to={`/admin/edit/${p.id}`} className="btn submit-btn">
                  Edit
                </Link>
                <Link to={`/admin/products/${p.id}`} className="btn submit-btn">
                  View
                </Link>
                <button
                  onClick={() => {
                    deleteProductAlert(p);
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
  );
};

export default ProductsTable;
