import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";

function List({ hideSideBar }) {
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
  const dispatch = useDispatch();
  return (
    <ul className="items-list">
      <li>
        <NavLink
          to="/admin"
          onClick={() => {
            hideSideBar();
          }}
          className="admin-btn"
        >
          Admin
        </NavLink>
      </li>
      {user !== {} && user.firstName ? (
        <>
          <li className="list-item">
            <NavLink
              to="/User"
              onClick={() => {
                hideSideBar();
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
                hideSideBar();
                dispatch(userActions.logOut());
              }}
              className="logOut-btn"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="list-item">
            <NavLink
              to="/login"
              onClick={() => {
                hideSideBar();
              }}
            >
              Log In
            </NavLink>
          </li>
          <li
            className="list-item"
            onClick={() => {
              hideSideBar();
            }}
          >
            <NavLink to="/signUp">Sign Up</NavLink>
          </li>
        </>
      )}

      <li className="list-item">
        <NavLink
          to="/orders"
          onClick={() => {
            hideSideBar();
          }}
        >
          My Orders
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink
          to="/contact"
          onClick={() => {
            hideSideBar();
          }}
        >
          Contact Us
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink
          to="/cart"
          onClick={() => {
            hideSideBar();
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
    </ul>
  );
}

export default List;
