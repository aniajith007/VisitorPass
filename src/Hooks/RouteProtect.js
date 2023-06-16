import React from "react";
import { useVisitorContext } from "./Context";
import { Navigate, useNavigate } from "react-router-dom";
import { LocalSt } from "../LocalStorage";
export default function RouteProtect({ children }) {
  const { user, loginchange } = useVisitorContext();
  //const navigate = useNavigate();
  console.log("RouteProtect", user);
  if (user && JSON.parse(LocalSt("getLST"))) {
    return children;
  } else if (!user && JSON.parse(LocalSt("getLST"))) {
    // Refresh Protection
    // set user data from LST
    // 3rd if condition will work
    loginchange();
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}
