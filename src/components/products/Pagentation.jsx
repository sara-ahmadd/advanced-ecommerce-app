import { Link, NavLink } from "react-router-dom";
import "./_Pagenation.scss";

const Pagentation = ({
  products = [],
  currentPage,
  setCurrentPage,
  productsPerPage,
}) => {
  let pagesCountArray = [];

  const pagesCount = Math.ceil(products.length / productsPerPage);

  for (let i = 1; i <= pagesCount; i++) {
    pagesCountArray.push(i);
  }

  const onChange = (number) => {
    setCurrentPage(number);
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(1);
    }
  };
  const nextPage = () => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pagesCount);
    }
  };
  return (
    <ul className="my-3 text-center pagination d-flex justify-content-center flex-wrap">
      <li onClick={previousPage} className="page-item">
        <Link
          to="."
          className="page-link btn px-3 py-1 m-1 text-center submit-btn"
        >
          Previous
        </Link>
      </li>
      {pagesCountArray.map((num, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              onChange(num);
            }}
            className="page-item"
          >
            <Link
              to="."
              className="page-link btn px-3 py-1 m-1 text-center outline-dark-btn"
            >
              {num}
            </Link>
          </li>
        );
      })}
      <li onClick={nextPage} className="page-item">
        <Link
          to="."
          className="page-link btn px-3 py-1 m-1 text-center submit-btn"
        >
          Next
        </Link>
      </li>
    </ul>
  );
};

export default Pagentation;
