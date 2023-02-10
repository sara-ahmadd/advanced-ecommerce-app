import React from "react";
import { useSelector } from "react-redux";

function User() {
  const user = useSelector((state) => state.userReducer);
  return (
    <div className="container custom-container">
      <h2>
        Name : {user.firstName} {user.lastName}
      </h2>
      <h2>Email : {user.email}</h2>
    </div>
  );
}

export default User;
