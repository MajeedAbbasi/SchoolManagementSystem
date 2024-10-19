import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  let loggedIn = JSON.parse(localStorage.getItem("login"));
  return loggedIn.type == true ? <Outlet /> : <Navigate to={"/"} />;
};
export default Protected;
