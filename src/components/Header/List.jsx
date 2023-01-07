import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
function List() {
  return (
    <ul className="items-list">
      <li>
        <NavLink to="/admin" className="admin-btn">
          Admin
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/User" className="profile">
          <i>
            <BsFillPersonFill />
          </i>
          <h2>Hi, Guest</h2>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/login">LogOut</NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/orders">My Orders</NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/cart" className="cart-container">
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
