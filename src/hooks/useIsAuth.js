import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

function useIsAuth() {
  const { user } = useContext(AuthContext);

  const isUserAuthenticated = user !== null ? true : false;

  return isUserAuthenticated;
}

export default useIsAuth;
