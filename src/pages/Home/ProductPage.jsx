import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cartActions } from "../../reduxToolkit/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
// import "../../css/single-product.css";

// import { cartActions } from "../../reduxToolkit/cart/cart";

function ProductPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  useEffect(() => {
    console.log(params);
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        const newProduct = res.data;
        // console.log(newProduct);
        setProduct({
          id: newProduct.id,
          title: newProduct.title,
          description: newProduct.description,
          image: newProduct.image,
          price: newProduct.price,
          category: newProduct.category,
        });
      })
      .catch((err) => console.log(err));
  }, [params]);
  return (
    <div className="card col-10 col-sm-2 col-md-4  mx-auto my-2 p-1">
      <img
        src={product.image}
        className="card-img-top mx-auto"
        style={{ width: "50%", height: "350px" }}
        alt="img"
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          <span className="text-success fw-bold fs-3">Description</span> :
          {product.description}
        </p>
        <p className="card-text">
          <span className="text-success fw-bold fs-3">Price</span> :
          {product.price}$
        </p>
      </div>
      <Link to={"/"} className="btn submit-btn w-50 mx-auto">
        Go Home
      </Link>
      <button
        onClick={() => dispatch(cartActions.addToCart(product))}
        className="btn submit-btn text-light w-50 mx-auto mt-2"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductPage;
