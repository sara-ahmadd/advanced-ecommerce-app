// import { getDocs, query, where } from "firebase/firestore";
// import { useState } from "react";
// import { collectionRef } from "../../firebase/firebase";

function Categories({ categories, getIntoCategory, getAll }) {
  // const [prices, setPrices] = useState([]);

  // const getAccordingToPrice = (price) => {
  //   let getCategory = query(collectionRef, where("price", ">", `${price}`));
  //   getDocs(getCategory).then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <div className="d-flex gap-3 nav justify-content-center">
      <button
        className="btn nav-link fs-4 nav-item text-success"
        onClick={() => getAll()}
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
                onClick={() => getIntoCategory(c)}
              >
                {c}
              </button>
            );
          })}
        {/* {prices &&
          prices.map((price, index) => {
            return (
              <button
                key={index}
                className="category-item btn  nav-link fs-4  nav-item text-success"
                onClick={() => getAccordingToPrice(price)}
              >
                Price : {price}
              </button>
            );
          })} */}
      </ul>
    </div>
  );
}

export default Categories;
