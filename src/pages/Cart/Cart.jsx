// import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { cartActions } from "../../reduxToolkit/CartSlice/CartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    dispatch(cartActions.deleteFromCart(id));
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price.toFixed(2) * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="container mt-4">
      <h1> Cart - {cart.length || 0}</h1>
      <button
        className="btn btn-danger m-3"
        onClick={() => {
          clearCart();
        }}
      >
        Delete Cart
      </button>
      <h1 className="p-2 text-center fs-2 btn submit-btn m-2">
        Total - {Number(totalPrice).toFixed(2)} $
      </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            const { id, title, image, price, quantity } = product;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>
                  <img
                    src={image}
                    style={{ width: "100px", height: "100px" }}
                    alt="..."
                  />
                </td>
                <td>{price}$</td>
                <td>{quantity} Pieces</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteProduct(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)} className="btn submit-btn">
        Go Back
      </button>
    </div>
  );
}

export default Cart;
