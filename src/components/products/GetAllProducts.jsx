import { deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { collectionRef, dataBase } from "../../firebase/firebase";
import Search from "./Search";
import Categories from "./Categories";
import ProductsGrid from "../../pages/Home/ProductsGrid";
import Pagentation from "./Pagentation";
import { useEffect } from "react";
import Swal from "sweetalert2";
import ProductsTable from "../../pages/Admin/ProductsTable";

const GetAllProducts = ({ page }) => {
  const [products, setProducts] = useState({
    loading: true,
    ProductList: [],
    error: "",
  });
  const [categories, setCategories] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [productsPerPage] = useState(5);

  let lastProduct = currentPage * productsPerPage;
  let firstProduct = lastProduct - productsPerPage;

  let currentProducts = products.ProductList.slice(firstProduct, lastProduct);

  //Get All Products
  const getProducts = () => {
    onSnapshot(collectionRef, (res) => {
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
          category: "",
        });
      } catch (error) {
        setProducts({
          loading: false,
          ProductList: [],
          error: error.message,
          category: "",
        });
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Get Products Of Specific Category.
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

  const deleteSingleProduct = async (id) => {
    const docRef = doc(dataBase, "products", id);
    await deleteDoc(docRef);
  };
  const deleteProductAlert = (product) => {
    Swal.fire({
      title: `You Will Delete This Product : [ ${product.title} ], Are You Sure?`,
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        return deleteSingleProduct(product.id);
      }
    });
  };

  return (
    <div className="pt-5 ">
      <h1 className="fs-2 text-center text-success">
        BROWSE OUR NEW COLLECTION
      </h1>
      <Search
        products={currentProducts}
        setProducts={setProducts}
        getAllProducts={getProducts}
      />
      {/* Filtration according to category */}
      <Categories
        categories={categories}
        getAllProducts={getProducts}
        getIntoCategory={getIntoCategory}
        setCurrentPage={setCurrentPage}
      />
      {page === "home" ? (
        <ProductsGrid products={products} currentProducts={currentProducts} />
      ) : page === "admin" ? (
        <ProductsTable
          products={products}
          currentProducts={currentProducts}
          deleteProductAlert={deleteProductAlert}
        />
      ) : null}
      <Pagentation
        products={products.ProductList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default GetAllProducts;
