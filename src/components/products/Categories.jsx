function Categories({
  getIntoCategory,
  categories,
  getAllProducts,
  setCurrentPage,
}) {
  return (
    <div className="d-flex gap-3 nav justify-content-center">
      <button
        className="btn nav-link fs-4 nav-item text-success"
        onClick={() => getAllProducts()}
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
