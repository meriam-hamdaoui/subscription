import React from "react";
import { Form } from "react-bootstrap";
import SocialIcons from "../components/SocialIcons";

const FormContainer = ({
  title,
  orUse,
  button,
  username,
  newEmail,
  newPswd,
  alert,
  handleChangeSignUp,
  handleChangeSignIn,
  handleClickSignup,
  handleClickSignin,
}) => {
  const handleChange = (e) =>
    title === "Create Account" ? handleChangeSignUp(e) : handleChangeSignIn(e);

  const handleClick = () =>
    title === "Create Account" ? handleClickSignup() : handleClickSignin();

  return (
    <Form>
      <h1>{title}</h1>
      <SocialIcons />
      <span>or use your {orUse}</span>

      {title === "Create Account" && (
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={username}
          onChange={handleChange}
          autoComplete={false}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={title === "Create Account" ? newEmail : ""}
        onChange={handleChange}
        autoComplete={false}
      />
      {alert && <small style={{ color: "red" }}>{alert}</small>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={title === "Create Account" ? newPswd : ""}
        onChange={handleChange}
        autoComplete={false}
      />
      {title !== "Create Account" && <a href="/">Forgot your password?</a>}
      <button type="button" onClick={handleClick}>
        {button}
      </button>
    </Form>
  );
};

export default FormContainer;
