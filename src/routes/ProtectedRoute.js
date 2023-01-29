import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useIsAuth from "../hooks/useIsAuth";
import { AuthContext } from "../store/AuthContext";
// import { isAuth } from "../utils/isAuth"; - This utility goes with the 2. option below

function ProtectedRoute({ children }) {
  console.log("children of the protected :>> ", children);

  const { user } = useContext(AuthContext);

  //Option 1 (with internal variable):
  // const isUser = user ? true : false;

  //Option 2 (with a utility component):
  // const isUser = isAuth(user);

  //Option 3 (with a custom (own) hook):
  const isUser = useIsAuth(); // no need to pass the "user" variable, it already takes it elsewhere..

  return <>{isUser ? children : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
