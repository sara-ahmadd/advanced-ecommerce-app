import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../reduxToolkit/UserSlice/UserSlice";
import { toast } from "react-toastify";

function List({ hideSideBar, show }) {
  const { user, authorized } = useSelector((state) => {
    return {
      user: state.userReducer.user,
      authorized: state.userReducer.authorized,
    };
  });
  const sideBareDisappear = () => {
    if (show) {
      hideSideBar();
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      {user !== {} && authorized && user.firstName ? (
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
          to="/contact"
          onClick={() => {
            sideBareDisappear();
          }}
        >
          Contact Us
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
    </ul>
  );
}

export default List;
