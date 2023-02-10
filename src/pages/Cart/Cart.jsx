import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../reduxToolkit/CartSlice/CartSlice";
import { useEffect } from "react";
import { onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { usersCollectionRef } from "../../firebase/firebase";
import Swal from "sweetalert2";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer);
  const userCart = useSelector((state) => state.cart.products);

  const userQuery = query(
    usersCollectionRef,
    where("userId", "==", user.userId)
  );
  useEffect(() => {
    onSnapshot(userQuery, (snap) => {
      dispatch(cartActions.refreshCart(...snap.docs.map((x) => x.data().cart)));
    });
  }, []);

  const deleteProduct = (id) => {
    dispatch(cartActions.deleteFromCart(id));
    updateDoc(userQuery, {
      cart: userCart,
    });
  };

  const deleteProductAlert = (id, title) => {
    Swal.fire({
      title: `You Will Delete This Product : [ ${title} ], Are You Sure?`,
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        return deleteProduct(id);
      }
    });
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
    updateDoc(userQuery, {
      cart: userCart,
    });
  };

  const clearAllProducts = () => {
    Swal.fire({
      title: `You Will Delete All Products In Your Cart, Are You Sure?`,
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        return clearCart();
      }
    });
  };

  const totalPrice =
    userCart &&
    userCart.reduce((acc, product) => {
      acc += Number(product.price).toFixed(2) * product.quantity;
      return acc;
    }, 0);

  return (
    <div className="container mt-4">
      <h1> Cart - {(userCart && userCart.length) || 0}</h1>

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
          {userCart &&
            userCart.map((x) => {
              const { id, title, image, price, quantity } = x;
              // console.log(x);
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
                        deleteProductAlert(id, title);
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
      <div className="d-flex flex-column align-items-start">
        <h1 className="p-2 text-center fs-2 m-2">
          Total - {totalPrice || 0} $
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="w-25 h-25 btn submit-btn m-3"
        >
          Go Back
        </button>
        <button
          className="w-25 h-25 btn btn-danger m-3"
          onClick={() => {
            clearAllProducts();
          }}
        >
          Delete Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
