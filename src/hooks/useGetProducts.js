import { onSnapshot } from "firebase/firestore";
import { useState } from "react";

const useGetProducts = (collection) => {
  const [productsArray, setProductsArray] = useState([]);
  onSnapshot(collection, (res) => {
    let data = res.docs.map((x) => {
      let { image, price, description, title, productId, category } = x.data();
      return {
        id: x.id,
        image,
        price,
        description,
        title,
        productId,
        category,
      };
    });
    setProductsArray(data);
  });
  return { productsArray, setProductsArray };
};

export default useGetProducts;
