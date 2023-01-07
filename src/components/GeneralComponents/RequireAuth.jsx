// import React, { Children, useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { Auth } from "./withAuthContext";

// function RequireAuth({ children }) {
//   const [user, login, logout] = useContext(Auth);
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{ path: location.pathname }} />;
//   }

//   return children;
// }

// export default RequireAuth;
