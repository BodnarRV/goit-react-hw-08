import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuthenticated = isLoggedIn;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
