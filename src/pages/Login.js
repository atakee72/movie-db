import { useState } from "react";
import { Button } from "../styles/Button.styles";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useContext(AuthContext);

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (event) => {
    const passInput = event.target.value;
    setPassword(passInput);
  };

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <div>
      <h1 style={user && { filter: "blur(2px)" }}>Login</h1>
      {user && (
        <h3
          className="animate"
          style={{
            position: "absolute",
            left: "35%",
            top: "225px",
            right: "auto",
            border: "1px solid white",
            outline: "1px solid white",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            height: "20vh",
            textAlign: "center",
            verticalAlign: "middle",
            padding: "10px",
            lineHeight: "50px",
            zIndex: "1",
            filter: "unset"
          }}
        >
          You're logged in with the following email address: <br />
          <span style={{ lineHeight: "75px" }}>{user?.email}!</span> <br />
          Welcome to our movie database!
        </h3>
      )}

      <div style={user && { filter: "blur(2px)" }}>
        <>
          <FloatingLabel
            htmlFor="email"
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              style={{
                height: "30px",
                borderRadius: "4px",
                border: "none",
                margin: "0 10px 0 5px",
                fontFamily: "Verdana",
                width: "30vh",
              }}
              name="email"
              onChange={handleEmail}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <br />
          <FloatingLabel
            htmlFor="password"
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              style={{
                height: "30px",
                borderRadius: "4px",
                border: "none",
                margin: "0 10px 0 5px",
                fontFamily: "Verdana",
                width: "30vh",
              }}
              size="md"
              name="password"
              onChange={handlePassword}
              type="password"
              placeholder="Enter at least 7 characters"
            />
          </FloatingLabel>
        </>
        <br />
        {email.includes("@") && email.includes(".") && password.length > 6 ? (
          <div className="warning">
            <Button onClick={handleLogin}>Login</Button>
            <p className="inlineP">
              {" "}
              Please click login button. Your email and password are OK!
            </p>
          </div>
        ) : (
          <div className="warning">
            <Button className="disabledBtn" disabled>
              Login
            </Button>
            <p className="inlineP">
              {" "}
              To enable the login button please check if you have entered your
              email or password correctly. Remember that your email must have an
              "@" and a "." And your password must have at least 7 characters.{" "}
            </p>{" "}
            <br />
          </div>
        )}
      </div>
      <br />
      <Link to="/register">
        <span style={user && { filter: "blur(2px)" }}>New here? Please go to register</span>
      </Link>
    </div>
  );
}

export default Login;
