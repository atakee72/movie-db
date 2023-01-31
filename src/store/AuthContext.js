import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

// Create context

export const AuthContext = createContext();

// Create the store

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});
  const redirectTo = useNavigate();

  const register = async (email, password) => {
    console.log("email, password :>> ", email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('user', user)
      setUser(userCredential.user)
    } catch (error) {
      alert('register error :>> ', error);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const login = () => {
    setUser({
      name: "Fynni",
    });
    redirectTo("/");
  };

  const logout = () => {
    setUser(null);
    redirectTo("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};
