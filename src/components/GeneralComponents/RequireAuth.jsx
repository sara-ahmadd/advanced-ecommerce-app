import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
  console.log(user);
  if (user.firstName) {
    return children;
  } else {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
}

export default RequireAuth;
