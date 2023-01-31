import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

// Create context

export const AuthContext = createContext();

// Create the store

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const redirectTo = useNavigate();

  const register = async (email, password) => {
    console.log("email, password :>> ", email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user", user);
      setUser(userCredential.user);
    } catch (error) {
      // alert("register error :>> ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        alert("You already have an account.");
      }
    }
  };

  const login = async (email, password) => {
    console.log("email, password (login) >>", email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userInfo = userCredential.user;
      setUser(userInfo);
      console.log("returning userInfo", userInfo);
    } catch (error) {
      // alert("register error :>> ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/user-not-found") {
        alert("User not found");
      } else if (errorCode === "auth/wrong-password") {
        alert("Wrong password");
      }
    } // redirectTo("/");
  };

  const checkUserStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("User has logged in :>> ", uid);
        setUser(user);
        setLoader(false);
      } else {
        // User is signed out
        console.log("User has logged out");
        setUser(null);
        setLoader(false);
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Logout successful!");
        setUser(null);
      })
      .catch((error) => {
        // An error occured
        console.log(
          "An error occured while logging out. You may not be logged out. Please check!"
        );
      });

    redirectTo("/");
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loader }}>
      {props.children}
    </AuthContext.Provider>
  );
};
