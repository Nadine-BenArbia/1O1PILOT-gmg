import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("token");

  const isAuth = useSelector((state) => state.userReducer.isAuth);

  if (!token && !isAuth) {
    return <Redirect to="/Login" />;
  } else {
    return <Route {...rest} component={component} />;
  }
};

export default PrivateRoute;
