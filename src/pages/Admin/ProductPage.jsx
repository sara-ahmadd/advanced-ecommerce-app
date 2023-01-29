import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collectionRef, dataBase } from "../../firebase/firebase";
// import "../../css/single-product.css";

// import { cartActions } from "../../reduxToolkit/cart/cart";

function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  let docRef = doc(dataBase, "products", params.id);
  useEffect(() => {
    getDoc(docRef)
      .then((res) => {
        const product = res.data();
        console.log(product);
        setProduct({
          id: product.productId,
          title: product.title,
          description: product.description,
          image: product.image,
          price: product.price,
          category: product.category,
        });
      })
      .catch((err) => console.log(err));
  }, [params]);
  return (
    <div className="card col-10 col-md-6 col-sm-4 mx-auto my-2 p-1">
      <img
        src={product.image}
        className="card-img-top mx-auto"
        style={{ width: "60%", height: "350px" }}
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
      <button
        onClick={() => {
          navigate("/admin");
        }}
        className="btn submit-btn w-50 mx-auto"
      >
        Go Back
      </button>
    </div>
  );
}

export default ProductPage;
