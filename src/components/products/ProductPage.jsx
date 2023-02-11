import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cartActions } from "../../reduxToolkit/CartSlice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { dataBase, usersCollectionRef } from "../../firebase/firebase";
import AddToCartBtn from "./AddToCartBtn";
import { async } from "@firebase/util";

function ProductPage({ page }) {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: 0,
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

  //get the currently logged in user
  const user = useSelector((state) => state.userReducer);
  let userCart = useSelector((state) => state.cart.products);

  const [docId, setUserdocId] = useState("");

  //get the data of the same user from (users) collection on firestore database
  useEffect(() => {
    const userQuery =
      usersCollectionRef &&
      query(usersCollectionRef, where("userId", "==", user.userId));
    const unsub = onSnapshot(userQuery, (snap) => {
      setUserdocId(snap.docs.map((x) => x.id).join());
    });
    return unsub;
  }, []);

  let userRef = docId && doc(dataBase, "users", docId);
  //this state is a dependency for useEffect to update user cart in the database
  const [add, setAdd] = useState(false);
  useEffect(() => {
    //adding new product to cart of the current user in database by updating user field.
    add &&
      updateDoc(userRef, {
        cart: userCart,
      });
  }, [add]);

  let addProductToCart = () => {
    //adding new product to cart of the current user.
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
      <Link
        to={page === "home" ? "/" : "/admin"}
        className="btn submit-btn w-50 mx-auto"
      >
        Go Home
      </Link>
      {user.authorized && page === "home" && (
        <AddToCartBtn onClickFunction={addProductToCart} setAdd={setAdd} />
      )}
    </div>
  );
}

export default ProductPage;
