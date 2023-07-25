import React from "react";
import { Form } from "react-bootstrap";
import SocialIcons from "../components/SocialIcons";
const FormContainer = ({ title, orUse, button }) => {
  return (
    <Form>
      <h1>{title}</h1>
      <SocialIcons />
      <span>or use your {orUse}</span>

      {title === "Create Account" && <input type="text" placeholder="Name" />}

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {title !== "Create Account" && <a href="/">Forgot your password?</a>}
      <button>{button}</button>
    </Form>
  );
};

export default FormContainer;
