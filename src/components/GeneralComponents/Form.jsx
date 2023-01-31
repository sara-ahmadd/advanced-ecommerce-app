import React from "react";

// import "../../css/Form.css";

function Form({ product, submitionFunction, changeFunction, formTitle }) {
  const onSubmitFunction = (e) => {
    e.preventDefault();
    const isFormValid = () => {
      const { productId, title, image, category, description, price } = product;
      productId &&
        title &&
        image &&
        category &&
        description &&
        price &&
        submitionFunction();
    };
    isFormValid();
  };
  return (
    <div>
      <h2 className="text-center text-success p-2">{formTitle}</h2>
      <form onSubmit={onSubmitFunction} className="text-start my-3 mx-auto">
        <label className="form-label">ID</label>
        <input
          type="text"
          className="form-control"
          value={product.productId}
          onChange={(e) => changeFunction(e)}
          placeholder="Product id"
          name="productId"
        />
        <hr />
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={product.title}
          onChange={(e) => changeFunction(e)}
          placeholder="Product name"
          name="title"
        />
        <hr />
        <label className="form-label">Image Link</label>
        <input
          type="text"
          className="form-control"
          value={product.image}
          onChange={(e) => changeFunction(e)}
          placeholder="Product image url"
          name="image"
        />
        <hr />
        <label className="form-label">Category</label>
        <input
          type="text"
          className="form-control"
          value={product.category}
          onChange={(e) => changeFunction(e)}
          placeholder="Product category"
          name="category"
        />
        <hr />
        <label className="form-label">Price</label>
        <input
          type="text"
          className="form-control"
          value={product.price}
          onChange={(e) => changeFunction(e)}
          placeholder="Product price"
          name="price"
        />
        <hr />
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={product.description}
          onChange={(e) => changeFunction(e)}
          placeholder="Product Description"
          name="description"
        />
        <input className="btn submit-btn mt-3" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
