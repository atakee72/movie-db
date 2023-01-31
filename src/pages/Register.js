import { useState } from "react";
import { Button } from "../styles/Button.styles";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    // emailInput.includes("@" && ".") ? setEmail(emailInput) : alert("What you have entered is not an email address.")
  };

  const handlePassword = (event) => {
    const passInput = event.target.value;
    setPassword(passInput);
    // passInput?.length > 7
    //   ? setPassword(passInput)
    //   : alert("Your password must have more than 7 characters.");
  };

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        {" "}
        <label htmlFor="email">E-mail </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleEmail}
        />{" "}
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePassword}
        />{" "}
        <br />
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </div>
  );
}

export default Register;
