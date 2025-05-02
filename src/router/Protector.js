import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = window.localStorage.getItem("token");

  if (token == null || token == "null" || token.length === 0) {
    window.localStorage.clear();
    return <Navigate to="/login" />;
  }

  return children;
};

export const ProtectedAuthRoute = ({ children }) => {
  const token = window.localStorage.getItem("token");

  return !token ? children : <Navigate to="/" />;
};
