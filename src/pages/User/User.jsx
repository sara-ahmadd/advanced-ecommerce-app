import React from "react";
import { useSelector } from "react-redux";

function User() {
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
  return (
    <div className="container custom-container">
      <h2>
        Name : {user.firstName} {user.lastName}
      </h2>
      <h2>Email : {user.email || user.loginEmail}</h2>
    </div>
  );
}

export default User;
