import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/GeneralComponents/Loader";
import { deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { collectionRef, dataBase } from "../../firebase/firebase";
import Swal from "sweetalert2";
import Search from "../../components/GeneralComponents/Search";
import Pagentation from "../../components/GeneralComponents/Pagentation";
import Categories from "../../components/GeneralComponents/Categories";
import getProducts from "../../functions/getProducts";
const ProductsList = () => {
  const [products, setProducts] = useState({
    loading: true,
    ProductList: [],
    error: "",
  });
  const [productsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  let lastProduct = currentPage * productsPerPage;
  let firstProduct = lastProduct - productsPerPage;

  const currentProducts = products.ProductList.slice(firstProduct, lastProduct);

  console.log(currentProducts, products.ProductList);

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

  const [categories, setCategories] = useState([]);

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

  // Get All Products Without Filters.
  useEffect(() => {
    getProducts(collectionRef, setProducts, setCategories);
  }, []);

  return (
    <div>
      <h1 className="text-success">Products</h1>
      <Search products={currentProducts} setProducts={setProducts} />
      <Categories
        categories={categories}
        setCategories={setCategories}
        setProducts={setProducts}
        collectionRef={collectionRef}
        getIntoCategory={getIntoCategory}
      />
      <table className="table table-hover">
        <thead>
          <tr>
            <td className="fs-2">ID</td>
            <td className="fs-2">Product</td>
            <td className="fs-2">Category</td>
            <td className="fs-2">Price</td>
            <td className="fs-2">Operation</td>
          </tr>
        </thead>
        <tbody>
          {products.loading && (
            <tr>
              <td className="fs-1">
                <Loader />
              </td>
            </tr>
          )}
          {currentProducts ? (
            currentProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.productId}</td>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{p.price}$</td>
                <td className="d-flex gap-3 pb-4">
                  <Link to={`/admin/edit/${p.id}`} className="btn submit-btn">
                    Edit
                  </Link>
                  <Link
                    to={`/admin/products/${p.id}`}
                    className="btn submit-btn"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => {
                      deleteProductAlert(p);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="fs-3">No Products To Show..🙁</tr>
          )}
          {products.error && (
            <tr>
              <td>Somthing Went Wrong!..</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagentation
        products={products.ProductList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default ProductsList;
