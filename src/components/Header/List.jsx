import React, { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function List({ hideSideBar, show }) {
  const { user, authorized } = useSelector((state) => {
    return {
      user: state.userReducer.user,
      authorized: state.userReducer.authorized,
    };
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let userName = user.email.slice(0, user.email.indexOf("@"));
        console.log(user);
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
      {user && authorized && user.firstName ? (
        <>
          <li className="list-item">
            <NavLink
              to="/user"
              onClick={() => {
                sideBareDisappear();
              }}
              className="profile"
            >
              <i>
                <BsFillPersonFill />
              </i>
              {user.firstName ? <h2>Hi, {user.firstName}</h2> : null}
            </NavLink>
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
          <li className="list-item">
            <NavLink
              to="/orders"
              onClick={() => {
                sideBareDisappear();
              }}
            >
              My Orders
            </NavLink>
          </li>
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
                <span className="count">0</span>
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

      <li className="list-item">
        <NavLink
          to="/contact"
          onClick={() => {
            sideBareDisappear();
          }}
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}

export default List;
