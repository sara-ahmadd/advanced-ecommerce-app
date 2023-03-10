import React from "react";

const AddToCartBtn = ({ onClickFunction, setAdd }) => {
  return (
    <button
      className="btn submit-btn text-light w-50 mx-auto mt-2"
      onClick={() => {
        onClickFunction();
        setAdd(true);
      }}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
