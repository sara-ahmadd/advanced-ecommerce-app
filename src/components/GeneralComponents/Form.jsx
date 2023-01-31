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
    <>
      <h2 className="text-center text-primary p-2">{formTitle}</h2>
      <form onSubmit={onSubmitFunction}>
        <label>ID</label>
        <input
          type="text"
          value={product.productId}
          onChange={(e) => changeFunction(e)}
          placeholder="Product id"
          name="productId"
        />
        <hr />
        <label>Name</label>
        <input
          type="text"
          value={product.title}
          onChange={(e) => changeFunction(e)}
          placeholder="Product name"
          name="title"
        />
        <hr />
        <label>Image Link</label>
        <input
          type="text"
          value={product.image}
          onChange={(e) => changeFunction(e)}
          placeholder="Product image url"
          name="image"
        />
        <hr />
        <label>Category</label>
        <input
          type="text"
          value={product.category}
          onChange={(e) => changeFunction(e)}
          placeholder="Product category"
          name="category"
        />
        <hr />
        <label>Price</label>
        <input
          type="text"
          value={product.price}
          onChange={(e) => changeFunction(e)}
          placeholder="Product price"
          name="price"
        />
        <hr />
        <label>Description</label>
        <input
          type="text"
          value={product.description}
          onChange={(e) => changeFunction(e)}
          placeholder="Product Description"
          name="description"
        />
        <input className="btn btn-primary mt-3" type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
