import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories({ getCategory, getAll }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="d-flex gap-3 nav justify-content-center">
      <button
        onClick={getAll}
        className="btn nav-link fs-4 nav-item text-success"
      >
        All
      </button>
      <ul className="nav">
        {categories &&
          categories.map((c) => {
            return (
              <li
                key={c}
                className="category-item btn  nav-link fs-4  nav-item text-success"
                onClick={(e) => getCategory(c)}
              >
                {c}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Categories;
