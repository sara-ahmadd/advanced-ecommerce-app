import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cartActions } from "../../reduxToolkit/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/firebase";
import AddToCartBtn from "./AddToCartBtn";
// import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";

function ProductPage({ page }) {
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
  let docRef = doc(dataBase, "products", params.id);
  useEffect(() => {
    getDoc(docRef)
      .then((res) => {
        const product = res.data();
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
  }, [params, docRef]);

  const addProductToCart = () => {
    dispatch(cartActions.addToCart(product));
  };

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
      {page === "home" && (
        <AddToCartBtn
          onClickFunction={
            addProductToCart
            // dispatch(userActions.addToUserCart(product))
          }
        />
      )}
    </div>
  );
}

export default ProductPage;
