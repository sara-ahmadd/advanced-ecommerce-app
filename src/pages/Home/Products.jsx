import { useEffect } from "react";
import { useState } from "react";
import Categories from "../../components/GeneralComponents/Categories";
import { onSnapshot, query, where } from "firebase/firestore";
import { collectionRef } from "../../firebase/firebase";
import ProductsGrid from "./ProductsGrid";
import Pagentation from "../../components/GeneralComponents/Pagentation";
import Search from "../../components/GeneralComponents/Search";
import getProducts from "../../functions/getProducts";

const Products = () => {
  const [products, setProducts] = useState({
    loading: true,
    ProductList: [],
    error: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [productsPerPage] = useState(8);

  let lastProduct = currentPage * productsPerPage;
  let firstProduct = lastProduct - productsPerPage;

  const currentProducts = products.ProductList.slice(firstProduct, lastProduct);

  const [categories, setCategories] = useState([]);
  // Get All Products Without Filters.
  useEffect(() => {
    getProducts(collectionRef, setProducts, setCategories);
  }, []);

  // Gett Products Of Specific Category.
  const getIntoCategory = (category) => {
    let getCategory = query(
      collectionRef,
      where("category", "==", `${category}`)
    );
    onSnapshot(getCategory, (res) => {
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
      <h1 className="fs-2 text-center text-success">
        BROWSE OUR NEW COLLECTION
      </h1>
      <Search products={currentProducts} setProducts={setProducts} />
      {/* Filtration according to category */}
      <Categories
        categories={categories}
        setCategories={setCategories}
        setProducts={setProducts}
        collectionRef={collectionRef}
        getIntoCategory={getIntoCategory}
      />
      <ProductsGrid products={products} currentProducts={currentProducts} />
      <Pagentation
        products={products.ProductList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default Products;
