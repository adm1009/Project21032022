import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";
type MyProps ={
  children:any
}

const PrivateRoute = ({ children }:MyProps) => {
  const isAuth = Auth.getAuth();
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
