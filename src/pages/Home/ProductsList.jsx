import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import Loader from "../../components/GeneralComponents/Loader";
import { getDocs, query, where } from "firebase/firestore";
import { collectionRef } from "../../firebase/firebase";

const ProductsList = () => {
  const [products, setProducts] = useState({
    loading: true,
    ProductList: [],
    error: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  const getAllProducts = () => {
    getDocs(collectionRef)
      .then((res) => {
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
          category: "",
        });
      })
      .catch((err) =>
        setProducts({
          loading: false,
          ProductList: [],
          error: err.message,
          category: "",
        })
      );
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const getIntoCategory = (category) => {
    let getCategory = query(
      collectionRef,
      where("category", "==", `${category}`)
    );
    getDocs(getCategory).then((res) => {
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
      setProducts({
        loading: false,
        ProductList: data,
        error: "",
        category: "",
      });
    });
  };

  return (
    <div className="pt-5 ">
      <h1 className="fs-3 text-center text-success">
        BROWSE OUR NEW COLLECTION
      </h1>
      <Categories
        categories={categories}
        getAll={getAllProducts}
        getIntoCategory={getIntoCategory}
      />
      <div className="container ">
        <div className="row my-4 align-items-strech">
          {products.loading && (
            <>
              <Loader />
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          )}
          {products.ProductList &&
            products.ProductList.map((p) => (
              <div
                key={p.id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 "
              >
                <ProductCard product={p} />
              </div>
            ))}
          {products.error && <h1>Somthing Went Wrong!..'{products.error}'</h1>}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
