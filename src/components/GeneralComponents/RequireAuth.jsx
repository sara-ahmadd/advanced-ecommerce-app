import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const location = useLocation();
  const { authorized } = useSelector((state) => {
    return {
      authorized: state.userReducer.authorized,
    };
  });

  if (authorized) {
    return children;
  } else {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
}

export default RequireAuth;
