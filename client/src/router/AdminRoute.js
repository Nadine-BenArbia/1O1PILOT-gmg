import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("token");

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const isAdmin = user && user.role !== "admin" ? false : true;
  if (!token && !isAuth && !isAdmin) {
    return <Redirect to="/Login" />;
  } else {
    return <Route {...rest} component={component} />;
  }
};

export default AdminRoute;
