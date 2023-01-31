import useGetProducts from "../../hooks/useGetProducts";

function Categories({
  getIntoCategory,
  setProducts,
  collectionRef,
  setCurrentPage,
}) {
  const { productsArray } = useGetProducts(collectionRef);

  let categoryArray = productsArray.map((x) => x.category);
  let categories = [...new Set(categoryArray)];

  const getProducts = (prodsArray) => {
    setProducts({
      loading: false,
      ProductList: prodsArray,
      error: "",
    });
  };
  return (
    <div className="d-flex gap-3 nav justify-content-center">
      <button
        className="btn nav-link fs-4 nav-item text-success"
        onClick={() => getProducts(productsArray)}
      >
        All
      </button>
      <ul className="nav">
        {categories &&
          categories.map((c, index) => {
            return (
              <button
                key={index}
                className="category-item btn  nav-link fs-4  nav-item text-success"
                onClick={() => {
                  getIntoCategory(c);
                  setCurrentPage(1);
                }}
              >
                {c}
              </button>
            );
          })}
      </ul>
    </div>
  );
}

export default Categories;
