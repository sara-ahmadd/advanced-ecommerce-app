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

  // console.log(currentPage);

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
    <div className="my-3 text-center">
      <button
        onClick={previousPage}
        className=" btn px-3 py-1 m-1 text-center submit-btn"
      >
        Previous
      </button>
      {pagesCountArray.map((num, index) => {
        return (
          <button
            key={index}
            onClick={() => onChange(num)}
            className=" btn px-3 py-1 m-1 text-center btn-outline-dark"
          >
            {num}
          </button>
        );
      })}
      <button
        onClick={nextPage}
        className=" btn px-3 py-1 m-1 text-center submit-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagentation;
