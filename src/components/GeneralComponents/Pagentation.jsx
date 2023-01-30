const Pagentation = ({
  products = [],
  numberOfPages,
  setNumberOfPages,
  productsPerPage,
}) => {
  let pagesArray = [];

  for (let i = 1; i <= products.length / productsPerPage; i++) {
    pagesArray.push(i);
  }
  
  const onChange = (number) => {
    setNumberOfPages(number);
  };
  return (
    <div className="my-3 text-center">
      <button
        onClick={() => setNumberOfPages(numberOfPages - 1)}
        className=" btn px-3 py-1 m-1 text-center submit-btn"
      >
        Previous
      </button>
      {pagesArray.map((num, index) => {
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
        onClick={() => setNumberOfPages(numberOfPages + 1)}
        className=" btn px-3 py-1 m-1 text-center submit-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagentation;
