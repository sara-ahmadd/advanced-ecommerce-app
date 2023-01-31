import { onSnapshot } from "firebase/firestore";

const getProducts = (collection, setProducts, setCategories) => {
  onSnapshot(collection, (res) => {
    try {
      let data = res.docs.map((x) => {
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
      });
      let categoryArray = data.map((x) => x.category);
      setCategories([...new Set(categoryArray)]);
      setProducts({
        loading: false,
        ProductList: data,
        error: "",
      });
    } catch (error) {
      setProducts({
        loading: false,
        ProductList: [],
        error: error.message,
      });
    }
  });
};

export default getProducts;
