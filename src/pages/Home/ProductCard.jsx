import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="card"
      style={{ width: "100%", height: "100%", margin: "10px auto" }}
    >
      <img
        src={product.image}
        className="card-img-top my-2 mx-auto"
        style={{ width: "200px", height: "200px" }}
        alt="img"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h3 className="card-title title">{product.title}</h3>
        <h3 className="card-title price">
          <span className="text-success fw-bold">Price</span> :{product.price}$
        </h3>
        <h3 className="card-title category">
          <span className="text-success fw-bold">Category</span> :
          {product.category}
        </h3>
        <p className="card-text description">
          <span className="text-success fw-bold">Description</span> :
          {product.description}
        </p>

        <Link
          to={`products/${product.id}`}
          className="btn submit-btn blue-bgc text-light"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
