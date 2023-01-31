import { useState } from "react";
import { Button } from "../styles/Button.styles";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (event) => {
    const passInput = event.target.value;
    setPassword(passInput);
  };

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
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
            <Button onClick={handleRegister}>Register</Button>
            <p className="inlineP">
              {" "}
              Please click register button. Your email and password are OK!
            </p>
          </div>
        ) : (
          <div
            className="warning" /*style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start", marginTop:"10px"}}*/
          >
            <Button className="disabledBtn" disabled>
              Register
            </Button>
            <p className="inlineP">
              {" "}
              To enable the register button please check your email or password.
              Your email must have an "@" and a "." And your password must have at least 7 characters.{" "}
            </p>{" "}
            <br />
          </div>
        )}
      </div>
      <br />
      <Link to="/login"><span>Already have an account? Please go to login >>></span></Link>
    </div>
  );
}

export default Register;
