import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create context

export const AuthContext = createContext();

// Create the store

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});
  const redirectTo = useNavigate();

  const loginFunction = () => {
    setUser({
      name: "Fynni",
    });
    redirectTo("/");
  };

  const logoutFunction = () => {
    setUser(null);
    redirectTo("/");
  };

  return (
    <AuthContext.Provider value={{ user, loginFunction, logoutFunction }}>
      {props.children}
    </AuthContext.Provider>
  );
};
