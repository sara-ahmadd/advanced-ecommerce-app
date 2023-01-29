import React from "react";
import { Link } from "react-router-dom";
// import "../../css/Sidebar.css";
function AdminSidebar() {
  return (
    <div>
      <ul className="nav flex-colum w-100">
        <li className="btn submit-btn w-20 mt-2 nav-item h-50">
          <Link className="myBtn text-light" to={"/admin/addNewProduct"}>
            Add New Product
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
