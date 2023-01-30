import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/GeneralComponents/Loader";
import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { collectionRef, dataBase } from "../../firebase/firebase";
import Swal from "sweetalert2";
import Search from "../../components/GeneralComponents/Search";
import Pagentation from "../../components/GeneralComponents/Pagentation";
const ProductsList = () => {
  const [products, setProducts] = useState({
    loading: true,
    ProductList: [],
    error: "",
    category: "",
  });
  const productsPerPage = 8;
  const [numberOfPages, setNumberOfPages] = useState(1);
  let lastProduct = numberOfPages * productsPerPage;
  let firstProduct = lastProduct - productsPerPage;

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

  const getAllProducts = () => {
    onSnapshot(collectionRef, (res) => {
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
        ProductList: data.slice(firstProduct, lastProduct),
        error: "",
        category: "",
      });
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1 className="text-success">Products</h1>
      <Search products={products} setProducts={setProducts} />
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
          {products.ProductList ? (
            products.ProductList.map((p) => (
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
        numberOfPages={numberOfPages}
        setNumberOfPages={setNumberOfPages}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default ProductsList;
