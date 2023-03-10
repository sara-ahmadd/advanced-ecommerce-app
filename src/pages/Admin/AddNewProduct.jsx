// import axios from "axios";
import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collectionRef } from "./../../firebase/firebase";
import Form from "./../../components/GeneralComponents/Form";

function AddNewProduct() {
  const [product, setProduct] = useState({
    productId: "",
    title: "",
    image: "",
    category: "",
    price: 0,
    description: "",
  });
  const navigate = useNavigate();
  const onChangeValue = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const addNewProduct = async () => {
    await addDoc(collectionRef, {
      productId: product.productId,
      title: product.title,
      image: product.image,
      category: product.category,
      price: product.price,
      description: product.description,
    }).then((prod) => {
      navigate(-1);
    });
  };
  return (
    <div className="text-center">
      <Form
        product={product}
        setProduct={setProduct}
        submitionFunction={addNewProduct}
        changeFunction={onChangeValue}
        formTitle={"Add A New Product"}
      />
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn submit-btn w-25 my-3 mx-auto"
      >
        Go Back
      </button>
    </div>
  );
}

export default AddNewProduct;
