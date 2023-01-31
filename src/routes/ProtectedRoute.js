import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useIsAuth from "../hooks/useIsAuth";
import { AuthContext } from "../store/AuthContext";
// import { isAuth } from "../utils/isAuth"; - This utility goes with the 2. option below

function ProtectedRoute({ children }) {
  console.log("children of the protected :>> ", children);

  const { user, loader } = useContext(AuthContext);

  //Option 1 (with internal variable):
  // const isUser = user ? true : false;

  //Option 2 (with a utility component):
  // const isUser = isAuth(user);

  //Option 3 (with a custom (own) hook):
  const isUser = useIsAuth(); // no need to pass the "user" variable, it already takes it (from) elsewhere..

  return <>{loader ? <p>...loading...</p> : isUser ? children : <Navigate to="/" />}</>;    //Eğer login veya logout süreci devam ediyor ise, sadece ...loading...'i göster, eğer o süreçler bitmişse, yine (de) kontrol et user var mı yok mu diye ve varsa "children"e girmeye izin ver, yoksa homepage'e yönlendir.
}

export default ProtectedRoute;
