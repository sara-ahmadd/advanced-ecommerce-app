import React, { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";
import { toast } from "react-toastify";
import { auth, usersCollectionRef } from "../../firebase/firebase";
import { deleteUser, onAuthStateChanged, signOut } from "firebase/auth";
import { cartActions } from "../../reduxToolkit/CartSlice/CartSlice";
import { onSnapshot, query, where } from "firebase/firestore";

function List({ hideSideBar, show }) {
  const user = useSelector((state) => state.userReducer);
  const cart = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userQuery =
          usersCollectionRef &&
          query(usersCollectionRef, where("userId", "==", user.uid));
        onSnapshot(userQuery, (snap) => {
          dispatch(
            cartActions.refreshCart(...snap.docs.map((x) => x.data().cart))
          );
        });
        let userName = user.email.slice(0, user.email.indexOf("@"));
        dispatch(
          userActions.login({
            firstName: user.displayName
              ? user.displayName.split(" ")[0]
              : userName.split(" ")[0],
            lastName: user.displayName
              ? user.displayName.split(" ")[1]
              : userName.split(" ")[1],
            email: user.email,
            userId: user.uid,
          })
        );
      } else {
        dispatch(userActions.logOut());
        signOut(auth);
      }
    });
  }, [dispatch]);

  const sideBareDisappear = () => {
    if (show) {
      hideSideBar();
    }
  };
  return (
    <ul className="items-list">
      <li className="list-item">
        <NavLink
          to="/"
          onClick={() => {
            sideBareDisappear();
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink
          to="/contact"
          onClick={() => {
            sideBareDisappear();
          }}
        >
          Contact
        </NavLink>
      </li>

      {user && user.firstName ? (
        <>
          <li>
            <NavLink
              to="/admin"
              onClick={() => {
                sideBareDisappear();
              }}
              className="admin-btn"
            >
              Admin
            </NavLink>
          </li>
          <li className="list-item">
            <button
              onClick={() => {
                sideBareDisappear();
              }}
              className="profile"
            >
              <i>
                <BsFillPersonFill />
              </i>
              {user.firstName ? <h2>Hi, {user.firstName}</h2> : null}
            </button>
          </li>
          <li className="list-item">
            <button
              onClick={() => {
                sideBareDisappear();
                dispatch(userActions.logOut());
                //deleting user account from database
                deleteUser(user);
                toast.success("You Signed out.");
                navigate("/login");
              }}
              className="logOut-btn"
            >
              Delete Account
            </button>
          </li>
          <li className="list-item">
            <button
              onClick={() => {
                sideBareDisappear();
                dispatch(userActions.logOut());
                toast.success("You Logged out.");
                navigate("/login");
              }}
              className="logOut-btn"
            >
              Log Out
            </button>
          </li>
          {/* <li className="list-item">
            <NavLink
              to="/orders"
              onClick={() => {
                sideBareDisappear();
              }}
            >
              My Orders
            </NavLink>
          </li> */}
          <li className="list-item">
            <NavLink
              to="/cart"
              onClick={() => {
                sideBareDisappear();
              }}
              className="cart-container"
            >
              <h2>Cart</h2>
              <div className="cart-icon">
                <i>
                  <GiShoppingCart />
                </i>
                <span className="count">{cart ? cart.length : 0}</span>
              </div>
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="list-item">
            <NavLink
              to="/login"
              onClick={() => {
                sideBareDisappear();
              }}
            >
              Log In
            </NavLink>
          </li>
          <li
            className="list-item"
            onClick={() => {
              sideBareDisappear();
            }}
          >
            <NavLink to="/signUp">Sign Up</NavLink>
          </li>
        </>
      )}
    </ul>
  );
}

export default List;
