import React, { useState } from "react";
import { collectionRef } from "../../firebase/firebase";
import { onSnapshot } from "firebase/firestore";

const Search = ({ products, getAllProducts, setProducts }) => {
  const [search, setSearch] = useState("");
  // Filtration according to value in search field.
  const getAllMatches = (value = "") => {
    onSnapshot(collectionRef, (res) => {
      let data = res.docs
        .map((x) => {
          let { image, price, description, title, productId, category } =
            x.data();
          return {
            id: x.id,
            image,
            price,
            description,
            title,
            productId,
            category,
          };
        })
        .filter((x) => x.title.toLowerCase().includes(value));
      setProducts({
        loading: false,
        ProductList: data,
        error: "",
        category: "",
      });
    });
  };
  return (
    <div className="mb-3">
      <input
        type="search"
        className="form-control mb-3 mx-auto w-25 p-2"
        id="exampleFormControlInput1"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
          getAllMatches(search);
          if (e.target.value === "") {
            getAllProducts();
          }
        }}
      />
    </div>
  );
};

export default Search;
