import { Link, NavLink } from "react-router-dom";
import "./_Pagenation.scss";
import { useEffect, useState } from "react";

const Pagentation = ({
  products = [],
  currentPage,
  setCurrentPage,
  productsPerPage,
}) => {
  const [num, setNum] = useState(1);
  let pagesCountArray = [];

  const pagesCount = Math.ceil(products.length / productsPerPage);

  for (let i = 1; i <= pagesCount; i++) {
    pagesCountArray.push(i);
  }

  const onChange = (number) => {
    setCurrentPage(number);
    setNum(number);
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setNum(currentPage - 1);
    } else {
      setCurrentPage(1);
      setNum(1);
    }
  };
  const nextPage = () => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
      setNum(currentPage + 1);
    } else {
      setCurrentPage(pagesCount);
      setNum(pagesCount);
    }
  };

  useEffect(() => {
    const pagesNumber = Array.from(
      document.querySelectorAll(".pages .numbers .page-number")
    );
    pagesNumber.map((page) => {
      return page.classList.remove("active");
    });
    pagesNumber.filter((element) => {
      return element.innerHTML === `${num}` && element.classList.add("active");
    });
    console.log(pagesNumber);
  }, [num]);

  return (
    <ul className="pages my-3 text-center pagination d-flex justify-content-center flex-wrap">
      <li onClick={previousPage} className="page-item">
        <Link
          to="."
          className="page-link btn px-3 py-1 m-1 text-center submit-btn"
        >
          Previous
        </Link>
      </li>
      {pagesCountArray.map((number, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              onChange(number);
            }}
            className="page-item  mx-2 numbers"
          >
            <Link to="." className="page-link btn px-3 text-center page-number">
              {number}
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
