import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import { Button, Button2 } from "../styles/Button.styles";
// import { ThemeContext } from "styled-components";

function Navbar() {
  const { loginFunction, logoutFunction, user } = useContext(AuthContext);
  // const [isClicked, setIsClicked] = useState(false);
  // const { theme, setRedTheme, redTheme } = useContext(ThemeContext);
  // console.log('theme :>> ', theme);
  // console.log('setRedTheme', setRedTheme)

  return (
    <nav>
      <h1 className="logo">
        <span className="aNormal">
          <a className="aNormal" href="/">
            Movies Database Project
          </a>
        </span>
      </h1>
      <Button /*onClick={() => setRedTheme(!redTheme)}*/>Change Theme</Button>
      {user ? (
        <Button2 backgroundColor="red" onClick={logoutFunction}>
          Logout
        </Button2>
      ) : (
        <Button2 backgroundColor="green" onClick={loginFunction}>
          Login
        </Button2>
      )}{" "}
      |
      <NavLink to="/">
        <Button>
          <span>Home</span>
        </Button>
      </NavLink>{" "}
      |
      <NavLink to="movies">
        <Button>
          <span>Movies</span>
        </Button>
      </NavLink>{" "}
      |
      <NavLink to="login">
        <Button>
          <span>Login</span>
        </Button>
      </NavLink>{" "}
      |
      <NavLink to="register">
        <Button>
          <span>Register</span>
        </Button>
      </NavLink>{" "}
      |
      <NavLink to="about">
        <Button>
          <span>About</span>
        </Button>
      </NavLink>
    </nav>
  );
}

export default Navbar;